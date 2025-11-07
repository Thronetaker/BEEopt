import React, { useRef } from 'react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import Button from '@mui/material/Button';

// Transformer problems, solutions, images, and refs for download
const transformerProblems = [
  "A transformer has 500 turns on the primary and 100 turns on the secondary. If the primary voltage is 2400V, find the secondary voltage.",
  "Calculate the efficiency of a transformer with input power 1500W and output power 1400W.",
  "Determine the primary current of a transformer rated 5kVA with secondary voltage 230V and load current 20A."
];
const transformerSolutions = [
  "Secondary voltage \( V_s = V_p \\times \\frac{N_s}{N_p} = 2400 \\times \\frac{100}{500} = <b>480V</b> \).",
  "Efficiency \( \\eta = \\frac{P_{out}}{P_{in}} \\times 100 = \\frac{1400}{1500} \\times 100 = <b>93.33%</b> \).",
  "Primary current \( I_p = \\frac{S}{V_p} = \\frac{5000}{2400} = <b>2.08A</b> \)."
];
const transformerImages = [
  "/media/images/t1.jpg",
  "/media/images/t2.jpg",
  "/media/images/t3.webp",
  "/media/images/t4.webp",
  "/media/images/t5.webp",
];

export const TransformersNotesPage = () => {
  const notesRef = useRef();
  const problemsRef = useRef();
  const solutionsRef = useRef();

  // Download handler
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
      <h1 className="text-4xl font-bold text-indigo-700 mb-6 text-center">
        Transformers: Download Problems, Solutions, Notes
      </h1>

      {/* Practice Problems */}
      <div ref={problemsRef} className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Practice Problems</h2>
        <ul className="list-decimal pl-6 text-gray-700 space-y-2">
          {transformerProblems.map((p, i) => <li key={i}>{p}</li>)}
        </ul>
        <Button
          onClick={() => handleDownload(problemsRef, "transformers_problems.pdf")}
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
          {transformerSolutions.map((s, i) => (
            <li key={i} dangerouslySetInnerHTML={{ __html: s }} />
          ))}
        </ul>
        <Button
          onClick={() => handleDownload(solutionsRef, "transformers_solutions.pdf")}
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
          Transformers transfer electrical energy between circuits via magnetic induction.
          Key concepts include turns ratio, voltage transformation, efficiency, core losses,
          and practical applications in power distribution.
        </p>
        <div className="grid grid-cols-2 gap-4 my-4">
          {transformerImages.map((img, idx) => (
            <img 
              key={idx} 
              src={img} 
              alt={`Transformer diagram ${idx + 1}`} 
              className="rounded shadow m-2" 
              style={{ height: "600px", width: "300px" }} 
            />
          ))}
        </div>
        <Button
          onClick={() => handleDownload(notesRef, "transformers_notes.pdf")}
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
