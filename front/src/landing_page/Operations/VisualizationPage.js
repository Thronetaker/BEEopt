import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";

const VisualizationPage =() => {
  // Generate AC waveform data
  const data = Array.from({ length: 100 }, (_, i) => {
    const x = i / 10;
    return { x, y: Math.sin(x) }; // sine wave
  });

  return (
    <div className="p-4 bg-white rounded-xl shadow-md max-w-xl mx-auto">
      <h3 className="text-xl font-semibold mb-4">AC Waveform</h3>
      <LineChart width={600} height={300} data={data}>
        <XAxis dataKey="x" />
        <YAxis />
        <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
        <Tooltip />
        <Line type="monotone" dataKey="y" stroke="#8884d8" strokeWidth={2} />
      </LineChart>
    </div>
  );
}

export default  VisualizationPage;