import React, { useRef } from 'react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import Button from '@mui/material/Button';

// Problems, solutions, three-phase images, and refs for download
const threePhaseProblems = [
  "Calculate the line current in a balanced star-connected load with 10Ω per phase and line voltage 415V.",
  "Find the total power in a three-phase system with line voltage 400V, line current 20A, and power factor 0.8 lagging.",
  "Determine the phase angle between line and phase voltage in a delta connection."
];
const threePhaseSolutions = [
  "Phase voltage \(V_{ph} = \\frac{415}{\\sqrt{3}} = 239.6V\\). Phase current \(I_{ph} = \\frac{V_{ph}}{R} = \\frac{239.6}{10} = <b>23.96 A</b>\\). Line current equals phase current in star connection.",
  "Total power \(P = \\sqrt{3} \\times V_L \\times I_L \\times \\cos\\phi = \\sqrt{3} \\times 400 \\times 20 \\times 0.8 = <b>11.09 kW</b>\\).",
  "In a delta connection, line voltage leads the phase voltage by 30°."
];
const threePhaseImages = [
  "/media/images/tp1.jpg",
  "/media/images/tp2.jpg",
  "/media/images/tp3.jpg"
];

export const ThreePhaseNotesPage = () => {
  const notesRef = useRef();
  const problemsRef = useRef();
  const solutionsRef = useRef();

  // Download handler (for Problems, Solutions, Notes)
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
      <h1 className="text-4xl font-bold text-purple-700 mb-6 text-center">
        Three Phase Circuits: Download Problems, Solutions, Notes
      </h1>

      {/* Practice Problems */}
      <div ref={problemsRef} className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Practice Problems</h2>
        <ul className="list-decimal pl-6 text-gray-700 space-y-2">
          {threePhaseProblems.map((p, i) => <li key={i}>{p}</li>)}
        </ul>
        <Button
          onClick={() => handleDownload(problemsRef, "three_phase_problems.pdf")}
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
          {threePhaseSolutions.map((s, i) => (
            <li key={i} dangerouslySetInnerHTML={{ __html: s }} />
          ))}
        </ul>
        <Button
          onClick={() => handleDownload(solutionsRef, "three_phase_solutions.pdf")}
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
          Three-phase systems use three sinusoidal voltages equally spaced in phase to supply power efficiently.
          Important concepts include star (Y) and delta (Δ) connections, line and phase voltages/currents,
          and power calculations using power factor and phase angles.
        </p>
        <div className="grid grid-cols-2 gap-4 my-4">
          {threePhaseImages.map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt={`Three phase diagram ${idx + 1}`}
              className="rounded shadow m-2"
              style={{ height: "600px", width: "300px" }}
            />
          ))}
        </div>
        <Button
          onClick={() => handleDownload(notesRef, "three_phase_notes.pdf")}
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
