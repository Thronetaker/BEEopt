// import { useState, useMemo } from 'react';

// const QUESTIONS = [
//   {
//     id: 1,
//     topic: 'DC Circuits',
//     question: 'Two resistors 6 Ω and 3 Ω are in series across a 18 V source. What is the circuit current?',
//     options: ['1 A', '1.5 A', '2 A', '3 A'],
//     answer: 2,
//     explain: 'Series resistance: R_total = 6 + 3 = 9 Ω. Current I = V / R = 18 / 9 = 2 A.'
//   },
//   {
//     id: 2,
//     topic: 'AC Circuits',
//     question: 'Inductive reactance for L = 50 mH at f = 60 Hz is closest to:',
//     options: ['3.14 Ω', '18.85 Ω', '6.28 Ω', '0.31 Ω'],
//     answer: 1,
//     explain: 'Xl = 2πfL = 2 × π × 60 × 0.05 ≈ 18.85 Ω.'
//   },
//   // Add other questions...
// ];

// export default function QuizPage() {
//   const [current, setCurrent] = useState(0);
//   const [selected, setSelected] = useState(null);
//   const [answers, setAnswers] = useState([]);
//   const [showResult, setShowResult] = useState(false);

//   const question = useMemo(() => QUESTIONS[current], [current]);

//   const handleSelect = (index) => setSelected(index);

//   const handleNext = () => {
//     if (selected === null) return;
//     const updated = [...answers];
//     updated[current] = selected;
//     setAnswers(updated);
//     setSelected(null);

//     if (current < QUESTIONS.length - 1) {
//       setCurrent(current + 1);
//     } else {
//       setShowResult(true);
//     }
//   };

//   const handlePrev = () => {
//     if (current === 0) return;
//     const prevIndex = current - 1;
//     setCurrent(prevIndex);
//     setSelected(answers[prevIndex] ?? null);
//   };

//   const resetQuiz = () => {
//     setCurrent(0);
//     setSelected(null);
//     setAnswers([]);
//     setShowResult(false);
//   };

//   const score = useMemo(() => answers.reduce((acc, ans, idx) => ans === QUESTIONS[idx].answer ? acc + 1 : acc, 0), [answers]);

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-purple-50 to-blue-50 py-10 px-4">
//       <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl p-8 md:p-12">
//         <div className="flex flex-col md:flex-row items-center justify-between mb-8">
//           <h1 className="text-3xl md:text-4xl font-bold text-purple-700 mb-3 md:mb-0">BEE Quiz</h1>
//           <div className="text-lg text-gray-600">
//             Question {current + 1} / {QUESTIONS.length}
//           </div>
//         </div>

//         {!showResult ? (
//           <>
//             <div className="mb-4 inline-block px-4 py-1 text-sm font-medium rounded-full bg-purple-100 text-purple-800">
//               {question.topic}
//             </div>

//             <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-6">{question.question}</h2>

//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
//               {question.options.map((opt, idx) => {
//                 const isSelected = selected === idx;
//                 return (
//                   <button
//                     key={idx}
//                     onClick={() => handleSelect(idx)}
//                     className={`w-full px-4 py-3 rounded-xl border transition-shadow font-medium
//                       ${isSelected ? 'bg-purple-200 border-purple-400 shadow-lg text-purple-900' 
//                                    : 'bg-white border-gray-300 hover:shadow-md hover:bg-purple-50 text-gray-700'}`}
//                   >
//                     <span className="mr-2 font-mono">{String.fromCharCode(65 + idx)}.</span>
//                     {opt}
//                   </button>
//                 );
//               })}
//             </div>

//             {selected !== null && (
//               <div className="mb-6 p-4 rounded-xl bg-purple-50 border-l-4 border-purple-400 text-purple-800 text-sm">
//                 <span className="font-semibold">Hint/Concept: </span>
//                 {question.explain}
//               </div>
//             )}

//             <div className="flex justify-between items-center mb-6">
//               <button
//                 onClick={handlePrev}
//                 disabled={current === 0}
//                 className="px-5 py-2 rounded-xl border border-gray-300 text-gray-700 hover:bg-gray-50 disabled:opacity-50"
//               >
//                 Back
//               </button>
//               <button
//                 onClick={handleNext}
//                 disabled={selected === null}
//                 className="px-6 py-2 rounded-xl bg-purple-600 text-white font-semibold hover:bg-purple-700 disabled:opacity-50"
//               >
//                 {current === QUESTIONS.length - 1 ? 'Finish' : 'Next'}
//               </button>
//             </div>

//             {/* Progress Bar */}
//             <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
//               <div
//                 className="h-full bg-purple-600 transition-all duration-500"
//                 style={{ width: `${((current) / (QUESTIONS.length - 1)) * 100}%` }}
//               />
//             </div>
//           </>
//         ) : (
//           <>
//             <div className="text-center mb-8">
//               <div className="text-7xl mb-3">{score >= 7 ? '🎉' : '✅'}</div>
//               <h2 className="text-3xl font-bold text-gray-800 mb-2">Quiz Completed</h2>
//               <p className="text-gray-600 text-lg">
//                 Score: <span className="font-semibold">{score}</span> / {QUESTIONS.length}
//               </p>
//             </div>

//             <div className="space-y-4">
//               {QUESTIONS.map((q, idx) => {
//                 const userAns = answers[idx];
//                 const isCorrect = userAns === q.answer;
//                 return (
//                   <div
//                     key={q.id}
//                     className={`p-5 rounded-2xl border ${isCorrect ? 'border-green-400 bg-green-50' : 'border-red-400 bg-red-50'}`}
//                   >
//                     <div className="text-sm text-gray-500 mb-1">{q.topic}</div>
//                     <div className="font-semibold text-gray-800">{q.question}</div>
//                     <div className="mt-2 text-sm">
//                       <span className="font-medium">Your answer:</span>{' '}
//                       <span className={!isCorrect ? 'line-through text-red-700' : 'text-green-700'}>
//                         {q.options[userAns] ?? '—'}
//                       </span>
//                       {!isCorrect && (
//                         <>
//                           <span className="mx-2">→</span>
//                           <span className="font-medium">Correct:</span>{' '}
//                           <span className="text-green-700">{q.options[q.answer]}</span>
//                         </>
//                       )}
//                     </div>
//                     <div className="mt-2 text-gray-700 text-sm">{q.explain}</div>
//                   </div>
//                 );
//               })}
//             </div>

//             <div className="mt-8 flex justify-center">
//               <button
//                 onClick={resetQuiz}
//                 className="px-6 py-3 rounded-xl border border-gray-300 text-gray-700 hover:bg-gray-50"
//               >
//                 Retry Quiz
//               </button>
//             </div>
//           </>
//         )}
//       </div>
//     </div>
//   );
// }

import React, { useState } from "react";

// Example question sets for categories (fill with more as needed)
// const quizData = {
//   ohm: [
//     {
//       question: "What is the formula for current using Ohm's Law?",
//       options: [
//         "I = V/R",
//         "I = V × R",
//         "I = R/V",
//         "I = V + R"
//       ],
//       answer: 0
//     },
//     {
//       question: "If V = 10V and R = 2Ω, what is I?",
//       options: [
//         "5A",
//         "8A",
//         "20A",
//         "0.2A"
//       ],
//       answer: 0
//     }
//   ],
//   power: [
//     {
//       question: "Which formula is used to calculate power in a DC circuit?",
//       options: [
//         "P = V + I",
//         "P = V / I",
//         "P = V × I",
//         "P = V - I"
//       ],
//       answer: 2
//     }
//   ],
//   impedance: [
//     {
//       question: "What is the correct formula for impedance in an RLC circuit?",
//       options: [
//         "Z = √(R² + (XL - XC)²)",
//         "Z = R + XL + XC",
//         "Z = R/(XL + XC)"
//       ],
//       answer: 0
//     }
//   ],
//   turnRatio: [
//     {
//       question: "The turn ratio of a transformer is:",
//       options: [
//         "Np / Ns",
//         "Ns / Np",
//         "Np + Ns"
//       ],
//       answer: 0
//     }
//   ],
//   motorTorque: [
//     {
//       question: "Torque in a motor is given by:",
//       options: [
//         "T = P / W",
//         "T = P × W",
//         "T = W / P"
//       ],
//       answer: 0
//     }
//   ],
//   motorSlip: [
//     {
//       question: "Slip in an induction motor is calculated as:",
//       options: [
//         "(Ns - Nr)/Ns",
//         "Ns / Nr",
//         "Nr / Ns"
//       ],
//       answer: 0
//     }
//   ],
//   threePhasePower: [
//     {
//       question: "Three phase power in a balanced system is:",
//       options: [
//         "P = √3 × VL × IL × pf",
//         "P = VL × IL",
//         "P = VL / IL"
//       ],
//       answer: 0
//     }
//   ]
// };
const quizData = {
  ohm: [
    {
      question: "What is the formula for current using Ohm's Law?",
      options: [
        "I = V/R",
        "I = V × R",
        "I = R/V",
        "I = V + R"
      ],
      answer: 0
    },
    {
      question: "If V = 12V and R = 4Ω, what is I?",
      options: ["3A", "48A", "8A", "16A"],
      answer: 0
    },
    {
      question: "What is the SI unit of resistance?",
      options: ["Ampere", "Volt", "Ohm", "Watt"],
      answer: 2
    },
    {
      question: "If the resistance increases and voltage stays constant, the current will:",
      options: ["Increase", "Decrease", "Stay the same", "Double"],
      answer: 1
    },
    {
      question: "Ohm’s Law is valid for:",
      options: [
        "All conductors",
        "Only linear, ohmic conductors",
        "Only insulators",
        "All non-metals"
      ],
      answer: 1
    }
  ],
  power: [
    {
      question: "Which formula calculates power in a DC circuit?",
      options: [
        "P = V + I",
        "P = V / I",
        "P = V × I",
        "P = V - I"
      ],
      answer: 2
    },
    {
      question: "If V = 24V and I = 2A, what is the power?",
      options: ["12W", "48W", "26W", "22W"],
      answer: 1
    },
    {
      question: "The SI unit of power is:",
      options: ["Joule", "Ohm", "Watt", "Ampere"],
      answer: 2
    },
    {
      question: "In which scenario will the power dissipated in a resistor be maximum for fixed applied voltage?",
      options: [
        "Highest resistance",
        "Lowest resistance",
        "Zero resistance",
        "Infinite resistance"
      ],
      answer: 1
    },
    {
      question: "If current doubles in a circuit with constant resistance, power will:",
      options: [
        "Double",
        "Halve",
        "Increase four times",
        "Stay the same"
      ],
      answer: 2
    }
  ],
  impedance: [
    {
      question: "What is the correct formula for impedance in a series RLC AC circuit?",
      options: [
        "Z = √(R² + (XL - XC)²)",
        "Z = R + XL + XC",
        "Z = R/(XL + XC)",
        "Z = XL - XC"
      ],
      answer: 0
    },
    {
      question: "The unit of impedance is:",
      options: ["Ohm", "Henry", "Farad", "Watt"],
      answer: 0
    },
    {
      question: "If XL = 20Ω, XC = 15Ω, and R = 9Ω, what is Z?",
      options: [
        "11Ω",
        "12Ω",
        "9Ω",
        "10Ω"
      ],
      answer: 1 // sqrt(9^2 + (20-15)^2) = sqrt(81+25)=sqrt(106)=approx 10.3
    },
    {
      question: "Impedance in an AC circuit is:",
      options: [
        "The same as resistance",
        "Opposition to AC only",
        "Combined effect of resistance and reactance",
        "Irrelevant in DC circuits"
      ],
      answer: 2
    },
    {
      question: "If frequency increases, inductive reactance XL will:",
      options: [
        "Decrease",
        "Increase",
        "Stay the same",
        "Become zero"
      ],
      answer: 1
    }
  ],
  turnRatio: [
    {
      question: "The turn ratio of a transformer is:",
      options: [
        "Np / Ns",
        "Ns / Np",
        "Np + Ns",
        "Np × Ns"
      ],
      answer: 0
    },
    {
      question: "If primary turns are 400 and secondary turns are 100, the turn ratio is:",
      options: [
        "4",
        "0.25",
        "1.5",
        "40"
      ],
      answer: 0
    },
    {
      question: "The turn ratio directly determines:",
      options: [
        "Core material",
        "Voltage transformation ratio",
        "Power loss",
        "Wire thickness"
      ],
      answer: 1
    },
    {
      question: "For a step-down transformer:",
      options: [
        "Np < Ns",
        "Np > Ns",
        "Np = Ns",
        "No relation"
      ],
      answer: 1
    },
    {
      question: "If both Np and Ns are doubled, the turn ratio will:",
      options: [
        "Be halved",
        "Be doubled",
        "Stay same",
        "Become zero"
      ],
      answer: 2
    }
  ],
  motorTorque: [
    {
      question: "Torque in a motor is given by:",
      options: [
        "T = P / W",
        "T = P × W",
        "T = W / P",
        "T = V × I"
      ],
      answer: 0
    },
    {
      question: "If power is 100W and angular speed is 10 rad/s, torque equals:",
      options: [
        "10 Nm",
        "110 Nm",
        "0.1 Nm",
        "1 Nm"
      ],
      answer: 0
    },
    {
      question: "If speed increases for a constant power, torque will:",
      options: [
        "Decrease",
        "Increase",
        "Stay the same",
        "Be zero"
      ],
      answer: 0
    },
    {
      question: "SI unit of torque is:",
      options: ["Nm", "Watt", "kg", "Volt"],
      answer: 0
    },
    {
      question: "Torque is a measure of:",
      options: [
        "Rotational effect",
        "Heat produced",
        "Voltage drop",
        "Magnetic flux"
      ],
      answer: 0
    }
  ],
  motorSlip: [
    {
      question: "Slip in an induction motor is calculated as:",
      options: [
        "(Ns - Nr)/Ns",
        "Ns / Nr",
        "Nr / Ns",
        "Ns × Nr"
      ],
      answer: 0
    },
    {
      question: "Slip is zero when:",
      options: [
        "Rotor speed = Synchronous speed",
        "Rotor is locked",
        "Load is increased",
        "Frequency increases"
      ],
      answer: 0
    },
    {
      question: "Higher slip in an induction motor means:",
      options: [
        "Rotor lags further behind the field",
        "Rotor is faster than field",
        "No output",
        "Higher efficiency"
      ],
      answer: 0
    },
    {
      question: "Slip is usually expressed as a:",
      options: [
        "Fraction or percentage",
        "Time",
        "Voltage",
        "Angle"
      ],
      answer: 0
    },
    {
      question: "Typical slip values at full load are:",
      options: [
        "0-1%",
        "100-200%",
        "Very high",
        "2-6%"
      ],
      answer: 3
    }
  ],
  threePhasePower: [
    {
      question: "Three phase power in a balanced system is:",
      options: [
        "P = √3 × VL × IL × pf",
        "P = VL × IL",
        "P = VL / IL",
        "P = 3 × VL × IL"
      ],
      answer: 0
    },
    {
      question: "If VL = 400V, IL = 10A, pf = 0.8, what is power?",
      options: [
        "5542.56W",
        "3200W",
        "4000W",
        "6400W"
      ],
      answer: 0 // √3*400*10*0.8 ≈ 5542.56 W
    },
    {
      question: "Why is power factor important in 3-phase systems?",
      options: [
        "It increases voltage",
        "It decreases losses",
        "It affects real power delivered",
        "It sets frequency"
      ],
      answer: 2
    },
    {
      question: "If the power factor is 1, the load is:",
      options: [
        "Purely resistive",
        "Purely inductive",
        "Purely capacitive",
        "Nonlinear"
      ],
      answer: 0
    },
    {
      question: "Real power delivered in a three-phase supply is ___ the apparent power only if pf=1.",
      options: [
        "Equal to",
        "Less than",
        "Greater than",
        "Unrelated to"
      ],
      answer: 0
    }
  ]
};

function Quiz({ questions }) {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState(null);
  const [score, setScore] = useState(0);
  const [completed, setCompleted] = useState(false);

  const handleOption = (idx) => setSelected(idx);

  const handleNext = () => {
    if (selected === questions[current].answer) setScore(score + 1);
    if (current + 1 === questions.length) {
      setCompleted(true);
    } else {
      setCurrent(current + 1);
      setSelected(null);
    }
  };

  const handleRestart = () => {
    setCurrent(0); setSelected(null); setScore(0); setCompleted(false);
  };

  return (
    <div className="bg-white  rounded-xl shadow-lg p-6 max-w-xl mx-auto my-8">
      {!completed ? (
        <>
          <h2 className="text-xl font-semibold mb-4">Question {current + 1} of {questions.length}</h2>
          <div className="mb-4">{questions[current].question}</div>
          <div className="mb-4 grid gap-2">
            {questions[current].options.map((o, i) => (
              <button key={i}
                onClick={() => handleOption(i)}
                className={`block m-2  w-full p-2 rounded transition-colors duration-200 ${selected === i ? 'bg-black  text-white font-semibold' : 'bg-gray-100 text-black'}`}>
                {o}
              </button>
            ))}
          </div>
          <button
            disabled={selected === null}
            className="bg-blue-500 px-4 py-2 rounded text-black hover:bg-blue-600"
            onClick={handleNext}
          >
            {current + 1 === questions.length ? 'Finish' : 'Next'}
          </button>
        </>
      ) : (
        <div className="text-center">
          <h2 className="text-xl font-semibold mb-4">Quiz Complete</h2>
          <p className="mb-4">Your score: {score} / {questions.length}</p>
          <button
            className="bg-gray-200 px-4 py-2 rounded hover:bg-gray-300"
            onClick={handleRestart}
          >
            Restart Quiz
          </button>
        </div>
      )}
    </div>
  );
}

// Main QuizPage
const QuizPage = () => {
  const [category, setCategory] = useState('ohm');

  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-800 my-6 text-center">Electrical Engineering Quiz</h1>
      
      <div className="flex gap-2 mb-8 justify-center">
        {Object.keys(quizData).map(cat => (
          <button
            key={cat}
            className={`px-3 m-2 py-1 rounded transition-colors duration-200 ${category === cat ? 'bg-black text-white' : 'bg-gray-200 text-black'}`}
            onClick={() => setCategory(cat)}
          >
            {cat.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
          </button>
        ))}
      </div>
      <Quiz questions={quizData[category]} />
    </div>
  );
};

export default QuizPage;
