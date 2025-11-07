import React, { useRef } from 'react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import Button from '@mui/material/Button';

// AC Problems, solutions, circuit images, and notesRefs for download
const acProblems = [
  "Calculate the RMS current when a 100V AC source with 50Ω resistance is connected.",
  "Find the inductive reactance of a 0.2H coil at 60Hz.",
  "Determine the total impedance of a series circuit with R = 30Ω and X_L = 40Ω.",
];
const acSolutions = [
  "RMS Current = V / R = 100V / 50Ω = <b>2A</b>.",
  "Inductive Reactance \(X_L = 2\pi f L = 2 \times \pi \times 60 \times 0.2 = <b>75.4 \Omega</b>\)",
  "Impedance \(Z = \sqrt{R^2 + X_L^2} = \sqrt{30^2 + 40^2} = <b>50 \Omega</b>\).",
];
const acCircuitImages = [
  "/media/images/ac1.jpg",
  "/media/images/ac2.jpg",
  "/media/images/ac3.jpg",
  "/media/images/a4.jpg",
  "/media/images/a5.jpg"
];

export const ACCircuitsNotesPage = () => {
  const notesRef = useRef();
  const problemsRef = useRef();
  const solutionsRef = useRef();

  // Download handler (for Problems/Solutions/Notes)
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
      <h1 className="text-4xl font-bold text-red-700 mb-6 text-center">
        AC Circuits: Download Problems, Solutions, Notes
      </h1>

      {/* Section: Problems */}
      <div ref={problemsRef} className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Practice Problems</h2>
        <ul className="list-decimal pl-6 text-gray-700 space-y-2">
          {acProblems.map((p, i) => <li key={i}>{p}</li>)}
        </ul>
        <Button
          onClick={() => handleDownload(problemsRef, "ac_circuits_problems.pdf")}
          variant="contained"
          color="secondary"
          size="small"
          className="mt-3"
        >
          Download Problems as PDF
        </Button>
      </div>

      {/* Section: Solutions */}
      <div ref={solutionsRef} className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Solutions</h2>
        <ul className="list-decimal pl-6 text-green-700 space-y-2 font-mono">
          {acSolutions.map((s, i) => <li key={i} dangerouslySetInnerHTML={{ __html: s }} />)}
        </ul>
        <Button
          onClick={() => handleDownload(solutionsRef, "ac_circuits_solutions.pdf")}
          variant="contained"
          color="success"
          size="small"
          className="mt-3"
        >
          Download Solutions as PDF
        </Button>
      </div>

      {/* Section: Summary Notes & Images */}
      <div ref={notesRef} className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Summary, Key Concepts & Diagrams</h2>
        <p className="mb-2 text-gray-700">
          AC circuits use alternating current sources characterized by voltage and current waveforms.
          Important parameters include <b>RMS values</b>, <b>reactance</b>, <b>impedance</b>, and use of <b>phasors</b> to analyze circuits,
          involving resistors, inductors, and capacitors.
        </p>
        <div className="grid grid-cols-2 gap-4 my-4">
          {acCircuitImages.map((img, idx) => (
            <img key={idx} src={img} alt={`AC circuit ${idx + 1}`} className="rounded shadow m-2" style={{ height: "600px", width: "300px" }} />
          ))}
        </div>
        <Button
          onClick={() => handleDownload(notesRef, "ac_circuits_notes.pdf")}
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
