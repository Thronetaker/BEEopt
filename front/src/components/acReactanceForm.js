import { useState } from "react";
import axios from "axios";
import server from "../environment.js";

export function ReactanceForm() {
  const [f, setF] = useState("");
  const [L, setL] = useState("");
  const [C, setC] = useState("");
  const [result, setResult] = useState(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);
    setResult(null);

    if (f === "" || (L === "" && C === "")) {
      setError("Please enter frequency and at least L or C");
      return;
    }

    try {
      setLoading(true);
      const freq = parseFloat(f);

      let XL = null, XC = null;

      // If L present, call inductive reactance endpoint
      if (L) {
        const responseXL = await axios.post(`${server}/reactance_inductive`, {
          L: parseFloat(L),
          f: freq
        });
        if (responseXL.data.success && typeof responseXL.data.result === "number") {
          XL = responseXL.data.result;
        } else {
          setError("Inductive reactance API error"); setLoading(false); return;
        }
      }

      // If C present, call capacitive reactance endpoint
      if (C) {
        const responseXC = await axios.post("http://localhost:3002/reactance_capacitive", {
          C: parseFloat(C),
          f: freq
        });
        if (responseXC.data.success && typeof responseXC.data.result === "number") {
          XC = responseXC.data.result;
        } else {
          setError("Capacitive reactance API error"); setLoading(false); return;
        }
      }

      setResult({ XL, XC });
    } catch (err) {
      console.error(err);
      setError("Calculation failed");
    } finally {
      setLoading(false);
    }
  };

  const handleClear = () => {
    setF("");
    setL("");
    setC("");
    setResult(null);
    setError(false);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-lg p-6 max-w-md">
      <h3 className="text-xl font-semibold mb-4">⚡ AC Reactance Calculator</h3>

      <div className="grid grid-cols-3 gap-3 mb-4">
        <div>
          <label className="block text-sm font-medium">Frequency (Hz)</label>
          <input
            type="number"
            value={f}
            onChange={e => setF(e.target.value)}
            className="w-full border px-2 py-1 rounded"
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Inductance L (H)</label>
          <input
            type="number"
            value={L}
            onChange={e => setL(e.target.value)}
            className="w-full border px-2 py-1 rounded"
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Capacitance C (F)</label>
          <input
            type="number"
            value={C}
            onChange={e => setC(e.target.value)}
            className="w-full border px-2 py-1 rounded"
          />
        </div>
      </div>

      <div className="flex gap-2 mb-4">
        <button
          type="submit"
          className="bg-blue-600 m-2 text-black px-4 py-2 rounded hover:bg-blue-700"
          disabled={loading}
        >
          {loading ? "Calculating..." : "Calculate"}
        </button>
        <button
          type="button"
          onClick={handleClear}
          className="bg-gray-200 px-4 py-2 rounded hover:bg-gray-300"
          disabled={loading}
        >
          Clear
        </button>
      </div>

      {result && !error && (
        <div className="bg-green-50 border border-green-200 p-2 rounded text-center font-mono">
          {result.XL !== null && `XL = ${parseFloat(result.XL).toFixed(4)} Ω`}
          {(result.XL !== null && result.XC !== null) && " | "}
          {result.XC !== null && `XC = ${parseFloat(result.XC).toFixed(4)} Ω`}
        </div>
      )}

      {error && (
        <div className="bg-red-50 border border-red-200 p-2 rounded text-center text-red-600">
          {error}
        </div>
      )}
    </form>
  );
}
