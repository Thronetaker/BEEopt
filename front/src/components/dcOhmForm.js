import { useState } from "react";
import axios from "axios";
import server from "../environment.js";

export function OhmForm() {
  const [V, setV] = useState("");
  const [R, setR] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  // Sends request to backend API
  const handleCalculate = async () => {
    const v = parseFloat(V);
    const r = parseFloat(R);

    // Input validation before sending to API
    if (!isNaN(v) && !isNaN(r) && r !== 0) {
      setLoading(true);
      try {
        // Replace with your actual backend server address if running elsewhere
        const response = await axios.post(
          `${server}/ohms_law`,
          {
            V: v,      // Pass as number not string
            R: r,
            mode: "I"  // We are calculating I = V / R
          }
        );
        if (response.data.success && typeof response.data.result === "number") {
          setResult(response.data.result);
          console.log("hogyaaaa");
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
    setV("");
    setR("");
    setResult(null);
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 max-w-2xl">
      <h3 className="text-xl font-semibold mb-4">🔋 Ohm's Law Calculator</h3>
      <form className="grid grid-cols-2 gap-3 mb-4" onSubmit={(e) => e.preventDefault()}>
        <div>
          <label className="block text-sm font-medium">V (Volts)</label>
          <input
            type="number"
            value={V}
            onChange={(e) => setV(e.target.value)}
            className="w-full border px-2 py-1 rounded"
          />
        </div>
        <div>
          <label className="block text-sm font-medium">R (Ω)</label>
          <input
            type="number"
            value={R}
            onChange={(e) => setR(e.target.value)}
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
          className="bg-blue-500 px-4 py-2 m-2 rounded text-black hover:bg-blue-600"
          disabled={loading}
        >
          {loading ? "Calculating..." : "Calculate"}
        </button>
      </div>
      {result !== null && (
        <div className="bg-green-50 border border-green-200 p-2 rounded text-center font-mono mb-4">
          I = {result === "Invalid input" || typeof result === "string"
            ? result
            : `${parseFloat(result).toFixed(4)} A`}
        </div>
      )}
    </div>
  );
}
