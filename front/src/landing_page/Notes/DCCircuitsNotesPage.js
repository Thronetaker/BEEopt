import React, { useRef } from 'react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import Button from '@mui/material/Button';

// Problems, solutions, circuit images, and notesRefs for download
const problems = [
  "Find the current in a 10Ω resistor connected to a 20V battery.",
  "Calculate the total resistance of two 12Ω resistors in parallel.",
  "A circuit has resistors of 5Ω, 10Ω, and 15Ω in series. What is the total resistance?"
];
const solutions = [
  "Current = V/R = 20V/10Ω = <b>2A</b>.",
  "Total resistance = 1/(1/12 + 1/12) = <b>6Ω</b>.",
  "Total resistance = 5 + 10 + 15 = <b>30Ω</b>."
];
const circuitImages = [
  "data:image/png;base64,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",
  "https://learn.illuminations.mit.edu/images/guide/battery-bulb-circuit.png",
];

export const DCCircuitsNotesPage = () => {
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
      <h1 className="text-4xl font-bold text-blue-700 mb-6 text-center">
        DC Circuits: Download Problems, Solutions, Notes
      </h1>

      {/* Section: Problems */}
      <div ref={problemsRef} className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Practice Problems</h2>
        <ul className="list-decimal pl-6 text-gray-700 space-y-2">
          {problems.map((p, i) => <li key={i}>{p}</li>)}
        </ul>
        <Button
          onClick={() => handleDownload(problemsRef, "dc_circuits_problems.pdf")}
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
          {solutions.map((s, i) => <li key={i} dangerouslySetInnerHTML={{ __html: s }} />)}
        </ul>
        <Button
          onClick={() => handleDownload(solutionsRef, "dc_circuits_solutions.pdf")}
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
          DC circuits use direct current sources, analyzed using <b>Ohm’s Law</b> (\( V = IR \)), <b>KVL</b>, and <b>KCL</b>. 
          Resistors, capacitors, and inductors are common, and circuit reduction techniques are essential.
        </p>
        <div className="grid grid-cols-2 gap-4 my-4">
          {circuitImages.map((img, idx) => (
            <img key={idx} src={img} alt={`DC circuit ${idx + 1}`} className="rounded shadow m-2" style={{height:"200px",width:"300px"}} />
          ))}
        </div>
        <Button
          onClick={() => handleDownload(notesRef, "dc_circuits_notes.pdf")}
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
}
