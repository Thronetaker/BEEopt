import React from 'react'
import { ACForm } from '../../components/acImpedenceForm';

const ImpedancePage = () => {
  return (
        <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-800 mb-2">Impedance Calculator</h1>
      <p className="text-gray-600 mb-6">Calculate total impedance in AC circuits.</p>

      <div className="p-2 bg-white rounded-xl shadow-lg p-6 mb-6">
        <h3 className="text-xl font-semibold text-gray-700 mb-4">Formula</h3>
        <div className="text-2xl font-mono bg-gray-50 p-4 rounded-lg text-center">
          Z = √(R² + (Xₗ - Xc)²)
        </div>
      </div>
      <ACForm/>
    </div>

  )
}

export default ImpedancePage;