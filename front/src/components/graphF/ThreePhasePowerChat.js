// ThreePhasePowerChart.js
import React from 'react';
import { Line } from 'react-chartjs-2';

const VL = 400;
const IL = 10;
const pfs = [0.2, 0.4, 0.6, 0.8, 1.0];
const powers = pfs.map(pf => Math.sqrt(3) * VL * IL * pf);

const data = {
  labels: pfs,
  datasets: [
    {
      label: 'Power (W)',
      data: powers,
      borderColor: 'rgb(255, 206, 86)',
      backgroundColor: 'rgba(255, 206, 86, 0.4)',
    }
  ]
};

const options = {
  responsive: true,
  plugins: {
    title: {
      display: true,
      text: 'Three Phase Power vs Power Factor (VL=400V, IL=10A)',
    },
    legend: { display: false },
  },
  scales: {
    x: { title: { display: true, text: "Power Factor (pf)" } },
    y: { title: { display: true, text: "Power (W)" } },
  },
};

export function ThreePhasePowerChart() {
  return <Line data={data} options={options} />;
}
