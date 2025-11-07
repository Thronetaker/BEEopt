// TurnRatioChart.js
import React from 'react';
import { Line } from 'react-chartjs-2';

const primaryVoltage = 220; // Vp in volts
const turnRatios = [0.1, 0.2, 0.4, 0.5, 0.7, 1, 1.5, 2];
const secondaryVoltages = turnRatios.map(ratio => ratio * primaryVoltage);

const data = {
  labels: turnRatios,
  datasets: [
    {
      label: 'Secondary Voltage (Vs)',
      data: secondaryVoltages,
      borderColor: 'rgba(54, 162, 235, 1)',
      backgroundColor: 'rgba(54, 162, 235, 0.4)',
    }
  ]
};

const options = {
  responsive: true,
  plugins: {
    title: {
      display: true,
      text: 'Secondary Voltage vs Turn Ratio',
    },
    legend: { display: false },
  },
  scales: {
    x: { title: { display: true, text: "Turn Ratio (Ns/Np)" } },
    y: { title: { display: true, text: "Vs (V)" } },
  },
};

export function TurnRatioChart() {
  return <Line data={data} options={options} />;
}
