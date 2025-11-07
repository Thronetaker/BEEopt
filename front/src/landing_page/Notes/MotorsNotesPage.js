import React, { useRef } from 'react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import Button from '@mui/material/Button';

// Problems, Solutions, Motor Images, and notesRefs for download
const motorProblems = [
  "Calculate the slip of an induction motor running at 1440 RPM with synchronous speed 1500 RPM.",
  "Find the torque produced by a motor when power output is 2000 W and speed is 1450 RPM.",
  "Determine the starting current if the locked rotor current is 7 times the full load current.",
];
const motorSolutions = [
  "Slip \( s = \frac{N_s - N_r}{N_s} = \frac{1500 - 1440}{1500} = <b>0.04 (4%)</b> \).",
  "Torque \( T = \frac{P}{\omega} = \frac{2000}{\frac{2\pi \times 1450}{60}} = <b>13.2 Nm</b> \).",
  "Starting current = 7 × full load current = <b>7 × I_{FL}</b>.",
];
const motorImages = [
  "/media/images/m1.jpg",
  "/media/images/m2.jpg",
  "/media/images/m3.jpg",
  "/media/images/m4.png",
];

export const MotorsNotesPage = () => {
  const notesRef = useRef();
  const problemsRef = useRef();
  const solutionsRef = useRef();

  // Download handler (common for Problems, Solutions, Notes)
  const handleDownload = async (ref, filename) => {
    const input = ref.current;
    const canvas = await html2canvas(input, { scale: 2 });
    const imgData = canvas.toDataURL('image/png');
    const pdf = new jsPDF({ orientation: "portrait", unit: "pt", format: "a4" });
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const imgProps = pdf.getImageProperties(imgData);
    const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
    pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
    pdf.save(filename);
  };

  return (
    <div className="max-w-3xl mx-auto my-10 p-6 bg-white rounded-xl shadow-xl">
      <h1 className="text-4xl font-bold text-green-700 mb-6 text-center">
        Motors: Download Problems, Solutions, Notes
      </h1>

      {/* Practice Problems */}
      <div ref={problemsRef} className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Practice Problems</h2>
        <ul className="list-decimal pl-6 text-gray-700 space-y-2">
          {motorProblems.map((p, i) => <li key={i}>{p}</li>)}
        </ul>
        <Button
          onClick={() => handleDownload(problemsRef, "motors_problems.pdf")}
          variant="contained"
          color="secondary"
          size="small"
          className="mt-3"
        >
          Download Problems as PDF
        </Button>
      </div>

      {/* Solutions */}
      <div ref={solutionsRef} className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Solutions</h2>
        <ul className="list-decimal pl-6 text-green-700 space-y-2 font-mono">
          {motorSolutions.map((s, i) => <li key={i} dangerouslySetInnerHTML={{ __html: s }} />)}
        </ul>
        <Button
          onClick={() => handleDownload(solutionsRef, "motors_solutions.pdf")}
          variant="contained"
          color="success"
          size="small"
          className="mt-3"
        >
          Download Solutions as PDF
        </Button>
      </div>

      {/* Summary Notes & Images */}
      <div ref={notesRef} className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Summary, Key Concepts & Diagrams</h2>
        <p className="mb-2 text-gray-700">
          Motors convert electrical energy into mechanical energy. Key terms include slip, torque, power output, starting current, and synchronous speed.
          Induction motors and synchronous motors are widely used with specific operational principles.
        </p>
        <div className="grid grid-cols-2 gap-4 my-4">
          {motorImages.map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt={`Motor diagram ${idx + 1}`}
              className="rounded shadow m-2"
              style={{ height: "600px", width: "300px" }}
            />
          ))}
        </div>
        <Button
          onClick={() => handleDownload(notesRef, "motors_notes.pdf")}
          variant="contained"
          color="primary"
          size="small"
          className="mt-3"
        >
          Download Notes as PDF
        </Button>
      </div>
    </div>
  );
};
