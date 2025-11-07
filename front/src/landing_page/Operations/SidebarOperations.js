
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SidebarOperations = ({ operations }) => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedOperation, setSelectedOperation] = useState(null);

  const navigate = useNavigate();

  const handleOperationClick = (category, op) => {
    setSelectedOperation(op.id);
    // Navigate to the route
    navigate(`/operations/${category}/${op.id}`);
  };

  return (
    <>
      {/* Sidebar */}
      <div className="col-auto col-sm-2 bg-dark d-flex flex-column justify-content-between min-vh-100">
        <div className="mt-3">
          <a
            href="/operations"
            className="text-decoration-none ms-4 d-flex align-items-center text-white d-none d-sm-inline"
          >
            <span className="fs-4">BEE Operations</span>
          </a>
          <hr className="text-white d-none d-sm-block" />

          <ul className="nav nav-pills flex-column mt-2 mt-sm-0" id="parentM">
            {Object.entries(operations).map(([category, ops]) => (
              <li className="nav-item my-1 py-2 py-sm-0" key={category}>
                <button
                  className={`nav-link text-white text-center text-sm-start w-100 ${
                    selectedCategory === category ? "bg-primary" : ""
                  }`}
                  data-bs-toggle="collapse"
                  onClick={() =>
                    setSelectedCategory(
                      selectedCategory === category ? null : category
                    )
                  }
                  aria-current="page"
                >
                  <span className="ms-2 d-none d-sm-inline">
                    {category === "dc" && "⚡ DC Circuits"}
                    {category === "ac" && "~ AC Circuits"}
                    {category === "transformer" && "⚙ Transformers"}
                    {category === "motor" && "🔧 Motors"}
                    {category === "threePhase" && "🌀 Three-Phase"}
                  </span>
                  <i
                    className={`fa ms-2 ${
                      selectedCategory === category
                        ? "fa-angle-up"
                        : "fa-angle-down"
                    }`}
                    aria-hidden="true"
                  ></i>
                </button>

                <ul
                  className={`nav flex-column ms-3 collapse ${
                    selectedCategory === category ? "show" : ""
                  }`}
                  id={`submenu-${category}`}
                  data-bs-parent="#parentM"
                >
                  {ops.map((op) => (
                    <li className="nav-item" key={op.id}>
                      <button
                        onClick={() => handleOperationClick(category, op)}
                        className={`nav-link text-white-50 ms-3 text-start w-100 ${
                          selectedOperation === op.id ? "text-info" : ""
                        }`}
                      >
                        {op.name}
                      </button>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>

        {/* User Dropdown */}
        <div className="dropdown open mb-3 ms-3">
          <a
            className="btn border-none dropdown-toggle text-white"
            type="button"
            id="triggerId"
            data-bs-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <i className="fa fa-user" aria-hidden="true"></i>
            <span className="fs-5 ms-3 d-none d-sm-inline">Admin</span>
          </a>
          <div className="dropdown-menu" aria-labelledby="triggerId">
            <a className="dropdown-item" href="#">
              Profile
            </a>
            <a className="dropdown-item disabled" href="#">
              Settings
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default SidebarOperations;
