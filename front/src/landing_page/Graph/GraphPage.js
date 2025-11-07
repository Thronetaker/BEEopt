// import React, { useState } from "react";
// import { Chart } from "../../components/graphF/XLvsFreq";

// const GraphPage = () => {
//   const [xval, setXval] = useState("");
//   const [fval, setFval] = useState("");
//   const [xl, setXL] = useState([]);
//   const [freq, setFreq] = useState([]);

//   const handleXL = (e) => {
//     e.preventDefault();
//     const arr = xval.split(",").map((item) => item.trim());
//     setXL(arr);
//   };

//   const handleFreq = (e) => {
//     e.preventDefault();
//     const arr = fval.split(",").map((item) => item.trim());
//     setFreq(arr);
//   };

//   const data = {
//     labels: freq, // x-axis
//     datasets: [
//       {
//         label: "Inductive Reactance",
//         data: xl, // y-axis
//         borderColor: "rgb(255, 99, 132)",
//         backgroundColor: "rgba(255, 99, 132, 0.5)",
//       },
//     ],
//   };

//   return (
//     <div className="container mt-5 p-2">
//       <div className="row">
//         {/* XL vs Frequency Graph */}
//         <div className="col-12 d-flex flex-row gap-4">
          
//           {/* Frequency Input */}
//           <div className="col-6">
//             <form onSubmit={handleFreq}>
//               <h1>Frequency values:</h1>
//               <input
//                 type="text"
//                 value={fval}
//                 onChange={(e) => setFval(e.target.value)}
//                 placeholder="Enter values separated by commas"
//               />
//               <button
//                 type="submit"
//                 style={{ backgroundColor: "#50E3C2", marginLeft: "10px" }}
//               >
//                 Submit
//               </button>
//             </form>
//             <p>Array: {JSON.stringify(freq)}</p>
//           </div>

//           {/* XL Input */}
//           <div className="col-6">
//             <form onSubmit={handleXL}>
//               <h1>XL values:</h1>
//               <input
//                 type="text"
//                 value={xval}
//                 onChange={(e) => setXval(e.target.value)}
//                 placeholder="Enter values separated by commas"
//               />
//               <button
//                 type="submit"
//                 style={{ backgroundColor: "#50E3C2", marginLeft: "10px" }}
//               >
//                 Submit
//               </button>
//             </form>
//             <p>Array: {JSON.stringify(xl)}</p>
//           </div>
//         </div>

//         {/* Chart Display */}
//         <div className="col-12 mt-4">
//           <Chart data={data} />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default GraphPage;

import React, { useState } from "react";
import { ChartComponent } from "../../components/graphF/XLvsFreq"; // Generic Chart

// Helper to automatically set labels, datasets, and titles per topic
const graphConfigs = {
  ohmsLaw: {
    title: "Ohm’s Law: I vs V",
    xLabel: "Voltage (V)",
    yLabel: "Current (A)",
    xPlaceholder: "e.g. 0,2,4,6,8",
    yPlaceholder: "e.g. 0,0.2,0.4,0.8",
    color: "rgb(53, 162, 235)",
    bgColor: "rgba(53, 162, 235, 0.5)",
    datasetLabel: "Current (A)",
  },
  power: {
    title: "Power vs Current (Constant V)",
    xLabel: "Current (A)",
    yLabel: "Power (W)",
    xPlaceholder: "e.g. 0,1,2,3,4",
    yPlaceholder: "e.g. 0,12,24",
    color: "rgb(255, 99, 132)",
    bgColor: "rgba(255, 99, 132, 0.5)",
    datasetLabel: "Power (W)",
  },
  impedance: {
    title: "Impedance vs Frequency",
    xLabel: "Frequency (Hz)",
    yLabel: "Impedance (Ω)",
    xPlaceholder: "e.g. 10,20,50,100",
    yPlaceholder: "e.g. 12,15,23",
    color: "rgb(255, 152, 0)",
    bgColor: "rgba(255, 152, 0, 0.5)",
    datasetLabel: "Impedance (Ω)",
  },
  turnRatio: {
    title: "Secondary Voltage vs Turn Ratio",
    xLabel: "Turn Ratio (Ns/Np)",
    yLabel: "Secondary Voltage (Vs)",
    xPlaceholder: "e.g. 0.1,0.5,1",
    yPlaceholder: "e.g. 22,110,220",
    color: "rgba(54, 162, 235, 1)",
    bgColor: "rgba(54, 162, 235, 0.4)",
    datasetLabel: "Secondary Voltage (Vs)",
  },
  motorTorque: {
    title: "Motor Torque vs Speed",
    xLabel: "Speed (rad/s)",
    yLabel: "Torque (Nm)",
    xPlaceholder: "e.g. 30,50,70,90",
    yPlaceholder: "e.g. 33,20,15",
    color: "rgb(0, 128, 255)",
    bgColor: "rgba(0, 128, 255, .5)",
    datasetLabel: "Torque (Nm)",
  },
  motorSlip: {
    title: "Slip vs Rotor Speed",
    xLabel: "Rotor Speed (rpm)",
    yLabel: "Slip",
    xPlaceholder: "e.g. 1490,1470,1450",
    yPlaceholder: "e.g. 0.01,0.02,0.03",
    color: "rgb(123, 31, 162)",
    bgColor: "rgba(123, 31, 162, 0.4)",
    datasetLabel: "Slip",
  },
  threePhasePower: {
    title: "Three Phase Power vs Power Factor",
    xLabel: "Power Factor (pf)",
    yLabel: "Power (W)",
    xPlaceholder: "e.g. 0.2,0.4,0.6,0.8,1.0",
    yPlaceholder: "e.g. 1000,2000,3000",
    color: "rgb(255, 206, 86)",
    bgColor: "rgba(255, 206, 86, 0.4)",
    datasetLabel: "Power (W)",
  }
};

export default function GraphPage() {
  const [topic, setTopic] = useState("ohmsLaw");
  const [xInput, setXInput] = useState("");
  const [yInput, setYInput] = useState("");
  const [xData, setXData] = useState([]);
  const [yData, setYData] = useState([]);

  const config = graphConfigs[topic];

  const handleXSubmit = (e) => {
    e.preventDefault();
    setXData(xInput.split(",").map((val) => val.trim()));
  };
  const handleYSubmit = (e) => {
    e.preventDefault();
    setYData(yInput.split(",").map((val) => val.trim()));
  };

  const data = {
    labels: xData,
    datasets: [
      {
        label: config.datasetLabel,
        data: yData,
        borderColor: config.color,
        backgroundColor: config.bgColor,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      title: { display: true, text: config.title },
      legend: { display: false }
    },
    scales: {
      x: { title: { display: true, text: config.xLabel } },
      y: { title: { display: true, text: config.yLabel } },
    },
  };

  return (
    <div className="container mt-5 p-2">
      <div className="mb-4">
        <label>Graph Topic: </label>
        <select value={topic} onChange={e => {
          setTopic(e.target.value);
          setXInput(""); setYInput(""); setXData([]); setYData([]);
        }}>
          {Object.keys(graphConfigs).map(tk => (
            <option key={tk} value={tk}>
              {graphConfigs[tk].title}
            </option>
          ))}
        </select>
      </div>
      <div className="row">
        {/* X Input */}
        <div className="col-6">
          <form onSubmit={handleXSubmit}>
            <h3>{config.xLabel} values:</h3>
            <input
              type="text"
              value={xInput}
              onChange={e => setXInput(e.target.value)}
              placeholder={config.xPlaceholder}
            />
            <button type="submit" style={{ backgroundColor: "#50E3C2", marginLeft: "10px" }}>
              Submit
            </button>
          </form>
          <p>Array: {JSON.stringify(xData)}</p>
        </div>

        {/* Y Input */}
        <div className="col-6">
          <form onSubmit={handleYSubmit}>
            <h3>{config.yLabel} values:</h3>
            <input
              type="text"
              value={yInput}
              onChange={e => setYInput(e.target.value)}
              placeholder={config.yPlaceholder}
            />
            <button type="submit" style={{ backgroundColor: "#50E3C2", marginLeft: "10px" }}>
              Submit
            </button>
          </form>
          <p>Array: {JSON.stringify(yData)}</p>
        </div>
      </div>

      {/* Chart Display */}
      <div className="col-12 mt-4">
        <ChartComponent data={data} options={options} />
      </div>
    </div>
  );
}
