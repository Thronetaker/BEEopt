// formulas.js
export const operationsConfig = {
  // DC Circuits
  'ohms-law': {
    inputs: [
      { id: 'voltage', label: 'Voltage', unit: 'V' },
      { id: 'current', label: 'Current', unit: 'A' },
      { id: 'resistance', label: 'Resistance', unit: 'Ω' }
    ],
    outputs: [{ id: 'result', label: 'Calculated Value', unit: '' }],
    formula: 'V = I × R'
  },
  'power': {
    inputs: [
      { id: 'voltage', label: 'Voltage', unit: 'V' },
      { id: 'current', label: 'Current', unit: 'A' }
    ],
    outputs: [{ id: 'power', label: 'Power', unit: 'W' }],
    formula: 'P = V × I'
  },

  // AC Circuits
  'impedance': {
    inputs: [
      { id: 'R', label: 'Resistance', unit: 'Ω' },
      { id: 'XL', label: 'Inductive Reactance', unit: 'Ω' },
      { id: 'XC', label: 'Capacitive Reactance', unit: 'Ω' }
    ],
    outputs: [{ id: 'Z', label: 'Total Impedance', unit: 'Ω' }],
    formula: 'Z = √(R² + (XL - XC)²)'
  },
  'reactance': {
    inputs: [
      { id: 'freq', label: 'Frequency', unit: 'Hz' },
      { id: 'L', label: 'Inductance', unit: 'H' },
      { id: 'C', label: 'Capacitance', unit: 'F' }
    ],
    outputs: [{ id: 'X', label: 'Reactance', unit: 'Ω' }],
    formula: 'XL = 2πfL, XC = 1/(2πfC)'
  },

  // Transformers
  'turns-ratio': {
    inputs: [
      { id: 'Np', label: 'Primary Turns', unit: 'turns' },
      { id: 'Ns', label: 'Secondary Turns', unit: 'turns' },
      { id: 'Vp', label: 'Primary Voltage', unit: 'V' }
    ],
    outputs: [{ id: 'Vs', label: 'Secondary Voltage', unit: 'V' }],
    formula: 'Np/Ns = Vp/Vs'
  },

  // Motors
  'torque': {
    inputs: [
      { id: 'P', label: 'Power', unit: 'W' },
      { id: 'omega', label: 'Angular Speed', unit: 'rad/s' }
    ],
    outputs: [{ id: 'T', label: 'Torque', unit: 'Nm' }],
    formula: 'T = P / ω'
  },
  'slip': {
    inputs: [
      { id: 'Ns', label: 'Synchronous Speed', unit: 'rpm' },
      { id: 'Nr', label: 'Rotor Speed', unit: 'rpm' }
    ],
    outputs: [{ id: 's', label: 'Slip', unit: '' }],
    formula: 's = (Ns - Nr)/Ns'
  },

  // Three-phase
  'power-calculations': {
    inputs: [
      { id: 'V', label: 'Line Voltage', unit: 'V' },
      { id: 'I', label: 'Line Current', unit: 'A' },
      { id: 'pf', label: 'Power Factor', unit: '' }
    ],
    outputs: [{ id: 'P', label: 'Power', unit: 'W' }],
    formula: 'P = √3 × V × I × pf'
  }
};
