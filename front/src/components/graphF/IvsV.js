// OhmsLawChart.js
import React from 'react';
import { Line } from 'react-chartjs-2';

const resistance = 10; // example resistance in ohms
const voltages = [0, 2, 4, 6, 8, 10, 12];
const currents = voltages.map(V => V / resistance);

const data = {
  labels: voltages,
  datasets: [
    {
      label: 'Current (A)',
      data: currents,
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    }
  ]
};

const options = {
  responsive: true,
  plugins: {
    title: {
      display: true,
      text: 'Ohm’s Law: I vs V (R=10Ω)',
    },
    legend: {
      display: false,
    },
  },
  scales: {
    x: { title: { display: true, text: "Voltage (V)" } },
    y: { title: { display: true, text: "Current (A)" } },
  },
};

export function OhmsLawChart() {
  return <Line data={data} options={options} />;
}
