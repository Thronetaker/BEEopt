import React from 'react';
import { ThreePhasePowerForm } from '../../components/threePhasePowerForm';

const ThreePhasePowerPage = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-800 mb-2">Three Phase Power Calculator</h1>
      <p className="text-gray-600 mb-6">
        Calculate total power in a balanced three-phase system.
      </p>

      <div className="p-2 bg-white rounded-xl shadow-lg p-6 mb-6">
        <h3 className="text-xl font-semibold text-gray-700 mb-4">Formula</h3>
        <div className="text-2xl font-mono bg-gray-50 p-4 rounded-lg text-center">
          P = √3 × V<sub>L</sub> × I<sub>L</sub> × pf
        </div>
        <div className="text-gray-500 text-center text-sm mt-2">
          Where VL = Line Voltage (V), IL = Line Current (A), pf = Power Factor
        </div>
      </div>

      <ThreePhasePowerForm />
    </div>
  );
};

export default ThreePhasePowerPage;
