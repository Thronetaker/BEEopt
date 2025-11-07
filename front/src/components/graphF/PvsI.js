// PowerChart.js
import React from 'react';
import { Line } from 'react-chartjs-2';

const voltage = 12; // example voltage in V
const currents = [0, 1, 2, 3, 4, 5, 6];
const powers = currents.map(I => voltage * I);

const data = {
  labels: currents,
  datasets: [
    {
      label: 'Power (W)',
      data: powers,
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    }
  ]
};

const options = {
  responsive: true,
  plugins: {
    title: {
      display: true,
      text: 'Power (P) vs Current (I) at V=12V',
    },
    legend: { display: false },
  },
  scales: {
    x: { title: { display: true, text: "Current (A)" } },
    y: { title: { display: true, text: "Power (W)" } },
  },
};

export function PowerChart() {
  return <Line data={data} options={options} />;
}
