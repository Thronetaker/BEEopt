import { useState } from "react";
import axios from "axios";

export function MotorTorqueForm() {
  const [P, setP] = useState("");
  const [W, setW] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleCalculate = async () => {
    const p = parseFloat(P);
    const w = parseFloat(W);
    if (!isNaN(p) && !isNaN(w) && w !== 0) {
      setLoading(true);
      try {
        const response = await axios.post(
          "http://localhost:3002/motor_torque",
          { P: p, w: w }
        );
        if (response.data.success && typeof response.data.result === "number") {
          setResult(response.data.result);
        } else {
          setResult("API error");
        }
      } catch (err) {
        setResult("Server error");
      } finally {
        setLoading(false);
      }
    } else {
      setResult("Invalid input");
    }
  };

  const handleClear = () => {
    setP("");
    setW("");
    setResult(null);
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 max-w-2xl">
      <h3 className="text-xl font-semibold mb-4">🌀 Motor Torque Calculator</h3>
      <form className="grid grid-cols-2 gap-3 mb-4" onSubmit={e => e.preventDefault()}>
        <div>
          <label className="block text-sm font-medium">P (Power, Watts)</label>
          <input
            type="number"
            value={P}
            onChange={e => setP(e.target.value)}
            className="w-full border px-2 py-1 rounded"
          />
        </div>
        <div>
          <label className="block text-sm font-medium">W (Angular Speed, rad/s)</label>
          <input
            type="number"
            value={W}
            onChange={e => setW(e.target.value)}
            className="w-full border px-2 py-1 rounded"
          />
        </div>
      </form>
      <div className="flex gap-2 mb-4">
        <button
          type="button"
          onClick={handleClear}
          className="bg-gray-200 px-4 py-2 rounded hover:bg-gray-300"
          disabled={loading}
        >
          Clear
        </button>
        <button
          type="button"
          onClick={handleCalculate}
          className="bg-blue-500 px-4 py-2 rounded m-2 text-black hover:bg-blue-600"
          disabled={loading}
        >
          {loading ? "Calculating..." : "Calculate"}
        </button>
      </div>

      {result !== null && (
        <div className="bg-green-50 border border-green-200 p-2 rounded text-center font-mono mb-4">
          T = {result === "Invalid input" || typeof result === "string"
            ? result
            : result.toFixed(4)} Nm
        </div>
      )}
    </div>
  );
}
