import { Routes, Route, useNavigate } from "react-router-dom";
import SidebarOperations from "./SidebarOperations";
import ImpedancePage from "./acImpedancePage";
import VisualizationPage from "./VisualizationPage";
import PhotoUpload from "./PhotoUpload";
import ReactancePage from "./acReactancePage";
import OhmPage from "./dcOhmPage";
import PowerPage from "./dcPowerPage";
import TurnRatioPage from "./turnRatioPage";
import MotorTorquePage from "./motorTorquePage";
import MotorSlipPage from "./motorSlipPage";
import ThreePhasePowerPage from "./threePhasePowerPage";

// Operations data (keep your original categories + symbols in Sidebar)
const operations = {
  dc: [
    { id: "ohms-law", name: "Ohm's Law", formula: "V = I × R", description: "Calculate voltage, current, or resistance" },
    { id: "power", name: "Power Calculation", formula: "P = V × I", description: "Calculate electrical power in DC circuits" }
  ],
  ac: [
    { id: "impedance", name: "Impedance", formula: "Z = √(R² + (Xₗ - Xc)²)", description: "Calculate total impedance in AC circuits" },
    { id: "reactance", name: "Reactance", formula: "Xₗ = 2πfL, Xc = 1/(2πfC)", description: "Calculate inductive and capacitive reactance" }
  ],
  transformer: [
    { id: "turns-ratio", name: "Turns Ratio", formula: "Nₚ/Nₛ = Vₚ/Vₛ", description: "Calculate transformer turns and voltage ratios" }
  ],
  motor: [
    { id: "torque", name: "Motor Torque", formula: "T = P/ω", description: "Calculate motor torque from power and speed" },
    { id: "slip", name: "Motor Slip", formula: "s = (Nₛ - Nᵣ)/Nₛ", description: "Calculate slip in induction motors" }
  ],
  threePhase: [
    { id: "power-calculations", name: "Three-Phase Power", formula: "P = √3 × V × I × pf", description: "Calculate power in three-phase systems" }
  ],
  extra: [
    { id: "photo-upload", name: "Photo Upload", description: "Upload circuit or experiment images" },
    { id: "visualization", name: "Waveform Visualization", description: "Visualize AC/DC waveforms" }
  ]
};

export function OperationsPanel() {
  const navigate = useNavigate();

  const handleOperationSelect = (category, operation) => {
    // Navigate to the route for the selected operation
    navigate(`/operations/${category}/${operation.id}`);
  };

  return (
    <div className="row m-2">
      {/* Sidebar (Styling & Symbols Preserved) */}
      <SidebarOperations operations={operations} onOperationSelect={handleOperationSelect} />

      {/* Right Panel */}
      <div className="col-8 p-8 overflow-auto" style={{ maxHeight: "85vh" }}>
        <Routes>
          {/* DC Pages */}
          <Route path="dc/ohms-law" element={<OhmPage />} />
          <Route path="dc/power" element={<PowerPage />} />

          {/* AC Pages */}
          <Route path="ac/impedance" element={<ImpedancePage />} />
          <Route path="ac/reactance" element={<ReactancePage />} />

          {/* Transformer Pages */}
          <Route path="transformer/turns-ratio" element={<TurnRatioPage />} />

          {/* Motor Pages */}
          <Route path="motor/torque" element={<MotorTorquePage/>} />
          <Route path="motor/slip" element={<MotorSlipPage />} />

          {/* Three-Phase Pages */}
          <Route path="threePhase/power-calculations" element={<ThreePhasePowerPage />} />

          {/* Extra Pages */}
          <Route path="extra/photo-upload" element={<PhotoUpload />} />
          <Route path="extra/visualization" element={<VisualizationPage />} />

          {/* Default message */}
          <Route path="*" element={<div className="text-gray-500">Select an operation from sidebar</div>} />
        </Routes>
      </div>
    </div>
  );
}
