import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';


ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' ,
    },
    title: {
      display: true,
      text: '',
    },
  },
};


// export const options2 = {
//   responsive: true,
//   plugins: {
//     legend: {
//       position: 'top' ,
//     },
//     title: {
//       display: true,
//       text: 'XC vs Frequency',
//     },
//   },
// };


// const allXLData = [
//   { frequency: 10, XL: 6.28 },
//   { frequency: 20, XL: 12.57 },
//   { frequency: 30, XL: 18.85 },
//   { frequency: 40, XL: 25.13 },
//   { frequency: 50, XL: 31.42 },
//   { frequency: 60, XL: 37.70 },
//   { frequency: 70, XL: 43.98 },
//   { frequency: 80, XL: 50.27 },
//   { frequency: 100, XL: 62.83 },
// ];

// const allXCData = [
//   { frequency: 10, XC: 159.15 },
//   { frequency: 20, XC: 79.57 },
//   { frequency: 30, XC: 53.05 },
//   { frequency: 40, XC: 39.79 },
//   { frequency: 50, XC: 31.83 },
// ];


// // const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
// const labels = allXLData.map( subarray => subarray.frequency);    //X-axis

// const data = {
//   labels : labels,
//   datasets : [
//         {
//       label: 'Frequency',
//       data: allXLData.map((freq) =>  freq.XL),   // y-axis
//       borderColor: 'rgb(255, 99, 132)',
//       backgroundColor: 'rgba(255, 99, 132, 0.5)',
//     }

//   ]
// }

// const labels2 = allXCData.map( subarray => subarray.frequency);
// const data2 = {
//   labels : labels2,
//   datasets : [
//         {
//       label: 'Frequency',
//       data: allXCData.map((freq) =>  freq.XC),   // y-axis
//       borderColor: 'rgb(53, 162, 235)',
//       backgroundColor: 'rgba(53, 162, 235, 0.5)',
//     }

//   ]
// }
// export const data = {
//   labels,
//   datasets: [
//     {
//       label: 'Dataset 1',
//       data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
//       borderColor: 'rgb(255, 99, 132)',
//       backgroundColor: 'rgba(255, 99, 132, 0.5)',
//     },
//     {
//       label: 'Dataset 2',
//       data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
//       borderColor: 'rgb(53, 162, 235)',
//       backgroundColor: 'rgba(53, 162, 235, 0.5)',
//     },
//   ],
// };

export function ChartComponent({data}) {
  return (
    <div className='container' >
      <div className='row mt-5' >
        <div className='col-4'>
          <Line options={options} data={data} />;
        </div>
      </div>
    </div>
  )
}
