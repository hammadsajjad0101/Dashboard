import React, { useState } from "react";
import PropTypes from "prop-types";
import { PiPencilLight } from "react-icons/pi";
import { IoSettingsOutline } from "react-icons/io5";

export default function Tasks({ tasks, headerText, dateRange }) {
  return (
    <div className="task-main-container container m-0 p-0">
      {/* Task Header */}
      <div className="task-header-container d-flex justify-content-between align-items-center">
        <div className="task-header d-flex align-items-center">
          <h4 className="task-heading">{headerText}</h4>
          <h5 className="task-detail">{dateRange}</h5>
        </div>
        <div className="task-settings d-flex align-items-center">
          <div className="dropdown">
            <button
              className="btn dropdown-toggle ps-1 m-0"
              type="button"
              id="dropdownMenuButton"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              style={{ color: "white", border: "none" }}
            >
              <i>
                <IoSettingsOutline className="task-setting-icon" />
              </i>
            </button>
            <ul
              className="dropdown-menu dropdown-menu-end p-1"
              aria-labelledby="dropdownMenuButton"
            >
              <li className="dropdown-item hover-bg p-2">Action</li>
              <li className="dropdown-item hover-bg p-2">Another action</li>
              <li className="dropdown-item hover-bg p-2">Something else</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Task List */}
      <div className="task-list overflow-auto">
        {tasks.map((task, index) => (
          <div
            key={index}
            className="task-list-content d-flex justify-content-between align-items-start"
          >
            <div className="task-list-left-side d-flex">
              <input type="checkBox" className="form-check-input" />
              <div>
                <h5>{task.title}</h5>
                <p className="task-paragraph">{task.description}</p>
              </div>
            </div>
            <i className="task-pencil-icon">
              <PiPencilLight />
            </i>
          </div>
        ))}
      </div>
    </div>
  );
}

// Define PropTypes for reusability
Tasks.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })
  ).isRequired,
  headerText: PropTypes.string.isRequired,
  dateRange: PropTypes.string.isRequired,
};
