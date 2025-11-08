import { useState } from "react";
import axios from "axios";
import server from "../environment.js";

export function ACForm() {
  const [R, setR] = useState("");
  const [XL, setXL] = useState("");
  const [XC, setXC] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  // Send request to external API
  const handleCalculate = async () => {
    const r = parseFloat(R);
    const xl = parseFloat(XL);
    const xc = parseFloat(XC);

    // Input validation
    if (
      !isNaN(r) &&
      !isNaN(xl) &&
      !isNaN(xc)
    ) {
      setLoading(true);
      try {
        const response = await axios.post(
          `${server}/impedance`,
          { R: r, XL: xl, XC: xc }
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
    setR("");
    setXL("");
    setXC("");
    setResult(null);
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 max-w-2xl">
      <h3 className="text-xl font-semibold mb-4">
        ⚡ AC Impedance Calculator
      </h3>
      <form className="grid grid-cols-3 gap-3 mb-4" onSubmit={e => e.preventDefault()}>
        <div>
          <label className="block text-sm font-medium">R (Ω)</label>
          <input
            type="number"
            value={R}
            onChange={e => setR(e.target.value)}
            className="w-full border px-2 py-1 rounded"
          />
        </div>
        <div>
          <label className="block text-sm font-medium">XL (Ω)</label>
          <input
            type="number"
            value={XL}
            onChange={e => setXL(e.target.value)}
            className="w-full border px-2 py-1 rounded"
          />
        </div>
        <div>
          <label className="block text-sm font-medium">XC (Ω)</label>
          <input
            type="number"
            value={XC}
            onChange={e => setXC(e.target.value)}
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
          Z = {result === "Invalid input" || typeof result === "string"
            ? result
            : `${parseFloat(result).toFixed(4)} Ω`}
        </div>
      )}
    </div>
  );
}
