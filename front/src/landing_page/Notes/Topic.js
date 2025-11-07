// import React from "react";

// const Topic = () => {
//   return (
//     <div className="container">
//       <div className="row">
//         <div className="col-4 mt-5">
//           <div className="card" style={{"width": "18rem"}}>
//             <img src="media\images\circuit.jpeg" className="card-img-top" alt="..." />
//             <div className="card-body">
//               <p className="card-text">
//                 DC Circuits
//               </p>
//             </div>
//           </div>
//         </div>
//         <div className="col-4 mt-5">
//           <div className="card" style={{"width": "18rem"}}>
//             <img src="media\images\circuit.jpeg" className="card-img-top" alt="..." />
//             <div className="card-body">
//               <p className="card-text">
//                 AC Circuits
//               </p>
//             </div>
//           </div>
//         </div>
//         <div className="col-4 mt-5">
//           <div className="card" style={{"width": "18rem"}}>
//             <img src="media\images\circuit.jpeg" className="card-img-top" alt="..." />
//             <div className="card-body">
//               <p className="card-text">
//                 Transformers
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="row">
//         <div className="col-4 mt-5">
//           <div className="card" style={{"width": "18rem"}}>
//             <img src="media\images\circuit.jpeg" className="card-img-top" alt="..." />
//             <div className="card-body">
//               <p className="card-text">
//                 Motors
//               </p>
//             </div>
//           </div>
//         </div>
//         <div className="col-4 mt-5">
//           <div className="card" style={{"width": "18rem"}}>
//             <img src="media\images\circuit.jpeg" className="card-img-top" alt="..." />
//             <div className="card-body">
//               <p className="card-text">
//                 Three Phase
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Topic;

import React from "react";
 import { useNavigate } from "react-router-dom";

const topics = [
  { label: "DC Circuits", path: "/n/dc-circuits" },
  { label: "AC Circuits", path: "/n/ac-circuits" },
  { label: "Transformers", path: "/n/transformers" },
  { label: "Motors", path: "/n/motors" },
  { label: "Three Phase", path: "/n/three-phase" },
];


export default function Topic() {
  const navigate = useNavigate();
  return (
    <div className="container">
      <div className="row">
        {topics.map((topic, i) => (
          <div className="col-4 mt-5" key={topic.label}>
            <div className="card" style={{ width: "18rem", cursor: "pointer" }} onClick={() => navigate(topic.path)}>
              <img src="media/images/circuit.jpeg" className="card-img-top" alt="..." />
              <div className="card-body">
                <p className="card-text">{topic.label}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
