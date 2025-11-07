// MotorTorqueChart.js
import React from 'react';
import { Line } from 'react-chartjs-2';

const power = 1000; // Watts
const speeds = [10, 30, 50, 70, 90, 110, 130, 150]; // rad/s
const torque = speeds.map(w => power / w);

const data = {
  labels: speeds,
  datasets: [
    {
      label: 'Torque (Nm)',
      data: torque,
      borderColor: 'rgb(0, 128, 255)',
      backgroundColor: 'rgba(0, 128, 255, .5)',
    }
  ]
};

const options = {
  responsive: true,
  plugins: {
    title: {
      display: true,
      text: 'Motor Torque vs Angular Speed (P=1kW)',
    },
    legend: { display: false },
  },
  scales: {
    x: { title: { display: true, text: "Speed (rad/s)" } },
    y: { title: { display: true, text: "Torque (Nm)" } },
  },
};

export function MotorTorqueChart() {
  return <Line data={data} options={options} />;
}
