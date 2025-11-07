import React from 'react';
import { MotorSlipForm } from '../../components/motorSlipForm';

const MotorSlipPage = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-800 mb-2">Motor Slip Calculator</h1>
      <p className="text-gray-600 mb-6">Calculate the slip of an induction motor.</p>

      <div className="p-2 bg-white rounded-xl shadow-lg p-6 mb-6">
        <h3 className="text-xl font-semibold text-gray-700 mb-4">Formula</h3>
        <div className="text-2xl font-mono bg-gray-50 p-4 rounded-lg text-center">
          slip = (Ns - Nr) / Ns
        </div>
        <div className="text-gray-500 text-center text-sm mt-2">
          Where Ns = Synchronous Speed (rpm), Nr = Rotor Speed (rpm), slip (fraction)
        </div>
      </div>

      <MotorSlipForm />
    </div>
  );
}

export default MotorSlipPage;
