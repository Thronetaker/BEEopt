import { useState } from "react";
import axios from "axios";

export function ThreePhasePowerForm() {
  const [vl, setVl] = useState("");
  const [il, setIl] = useState("");
  const [pf, setPf] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleCalculate = async () => {
    const v = parseFloat(vl);
    const i = parseFloat(il);
    const p = parseFloat(pf);

    if (!isNaN(v) && !isNaN(i) && !isNaN(p)) {
      setLoading(true);
      try {
        const response = await axios.post(
          "http://localhost:3002/three_phase_power",
          { V_L: v, I_L: i, pf: p }
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
    setVl("");
    setIl("");
    setPf("");
    setResult(null);
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 max-w-2xl">
      <h3 className="text-xl font-semibold mb-4">🔌 Three-Phase Power Calculator</h3>
      <form className="grid grid-cols-3 gap-3 mb-4" onSubmit={e => e.preventDefault()}>
        <div>
          <label className="block text-sm font-medium">V<sub>L</sub> (Line Voltage, V)</label>
          <input
            type="number"
            value={vl}
            onChange={e => setVl(e.target.value)}
            className="w-full border px-2 py-1 rounded"
          />
        </div>
        <div>
          <label className="block text-sm font-medium">I<sub>L</sub> (Line Current, A)</label>
          <input
            type="number"
            value={il}
            onChange={e => setIl(e.target.value)}
            className="w-full border px-2 py-1 rounded"
          />
        </div>
        <div>
          <label className="block text-sm font-medium">pf (Power Factor, 0-1)</label>
          <input
            type="number"
            value={pf}
            onChange={e => setPf(e.target.value)}
            step="0.01"
            min="0"
            max="1"
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
          P = {result === "Invalid input" || typeof result === "string"
            ? result
            : result.toFixed(4)} W
        </div>
      )}
    </div>
  );
}
