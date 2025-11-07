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
  "/media/images/dc1.jpg",
  "/media/images/dc2.jpg",
  "/media/images/dc3.jpg",
  "/media/images/dc4.jpg",
  "/media/images/dc5.jpg",
  "/media/images/dc6.jpg"
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
            <img key={idx} src={img} alt={`DC circuit ${idx + 1}`} className="rounded shadow m-2" style={{height:"600px",width:"300px"}} />
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
