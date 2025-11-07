import React from 'react'
import { ReactanceForm } from '../../components/acReactanceForm'

const ReactancePage = () => {
  return (
     <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Reactance Calculator</h1>
          <p className="text-gray-600 mb-6">Calculate total Reactance in AC circuits.</p>
    
          <div className="p-2 bg-white rounded-xl shadow-lg p-6 mb-6">
            <h3 className="text-xl font-semibold text-gray-700 mb-4">Formula</h3>
            <div className="text-2xl font-mono bg-gray-50 p-4 rounded-lg text-center">
              Xₗ = 2πfL, Xc = 1/(2πfC)
            </div>
          </div>
          <ReactanceForm/>
    </div>
  )
}

export default ReactancePage