import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import { execFile } from 'child_process';
import path from 'path';
import { fileURLToPath } from 'url';
import cors from 'cors';
import userRoutes from './routes/user.routes.js'; 

// Required to get __dirname in ES modules:
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();

app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST"],
    credentials:true
  })
);




app.use(bodyParser.json());
app.use(express.json({ limit : "40kb"}));
app.use(express.urlencoded({ limit: "40kb",extended : true}));

const PORT = 3002;
app.set("port",(process.env.PORT || 3002));
app.use("/api/v1/users", userRoutes);



// Path to your BEE executable
const beeExe = path.join(__dirname, '../bee-lib/bee.exe');

// Helper to call bee.exe
function callBee(func, args) {
    return new Promise((resolve, reject) => {
        execFile(beeExe, [func, ...args.map(String)], (error, stdout, stderr) => {
            if (error) return reject(error);
            resolve(parseFloat(stdout));
        });
    });
}

/* ------------------- DC Circuits Routes ------------------- */
app.post('/ohms_law', async (req, res) => {
    const { V, R, mode } = req.body;
    try {
        const result = await callBee('ohms_law', [V, R, mode]);
        res.json({ success: true, result });
    } catch (err) {
        res.status(500).json({ success: false, error: err.message });
    }
});

app.post('/dc_power', async (req, res) => {
    const { V, I } = req.body;
    try {
        const result = await callBee('dc_power', [V, I]);
        res.json({ success: true, result });
    } catch (err) {
        res.status(500).json({ success: false, error: err.message });
    }
});

/* ------------------- AC Circuits Routes ------------------- */
app.post('/impedance', async (req, res) => {
    const { R, XL, XC } = req.body;
    try {
        const result = await callBee('impedance', [R, XL, XC]);
        res.json({ success: true, result });
    } catch (err) {
        res.status(500).json({ success: false, error: err.message });
    }
});

app.post('/reactance_inductive', async (req, res) => {
    const { L, f } = req.body;
    try {
        const result = await callBee('reactance_inductive', [L, f]);
        res.json({ success: true, result });
    } catch (err) {
        res.status(500).json({ success: false, error: err.message });
    }
});

app.post('/reactance_capacitive', async (req, res) => {
    const { C, f } = req.body;
    try {
        const result = await callBee('reactance_capacitive', [C, f]);
        res.json({ success: true, result });
    } catch (err) {
        res.status(500).json({ success: false, error: err.message });
    }
});

/* ------------------- Transformers Route ------------------- */
app.post('/turns_ratio', async (req, res) => {
    const { Np, Ns } = req.body;
    try {
        const result = await callBee('turns_ratio', [Np, Ns]);
        res.json({ success: true, result });
    } catch (err) {
        res.status(500).json({ success: false, error: err.message });
    }
});

/* ------------------- Motors Routes ------------------- */
app.post('/motor_torque', async (req, res) => {
    const { P, w } = req.body;
    try {
        const result = await callBee('motor_torque', [P, w]);
        res.json({ success: true, result });
    } catch (err) {
        res.status(500).json({ success: false, error: err.message });
    }
});

app.post('/motor_slip', async (req, res) => {
    const { Ns, Nr } = req.body;
    try {
        const result = await callBee('motor_slip', [Ns, Nr]);
        res.json({ success: true, result });
    } catch (err) {
        res.status(500).json({ success: false, error: err.message });
    }
});

/* ------------------- Three Phase Route ------------------- */
app.post('/three_phase_power', async (req, res) => {
    const { V_L, I_L, pf } = req.body;
    try {
        const result = await callBee('three_phase_power', [V_L, I_L, pf]);
        res.json({ success: true, result });
    } catch (err) {
        res.status(500).json({ success: false, error: err.message });
    }
});

/* ------------------- Start Server ------------------- */



const start = async () => {
    const connectionDb = await mongoose.connect("mongodb+srv://parmanand224radha:ilWYq0Ss49QT4Z5x@zoomclonecluster.kltqdfu.mongodb.net/?retryWrites=true&w=majority&appName=ZoomCloneCluster");
    console.log (`Connected to MongoDB : ${connectionDb.connection.host }`);
    app.listen (app.get("port") , () => {
        console.log ("Server is running on port 3002");
    }); 
    
}

start ();  