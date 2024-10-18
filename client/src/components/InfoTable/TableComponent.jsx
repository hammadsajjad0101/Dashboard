import React, { useState } from "react";
import { IoReload } from "react-icons/io5";
import { IoCloseOutline } from "react-icons/io5";
import { IoSettingsOutline } from "react-icons/io5";
export default function ManagedTable({
  headerText = "Management Table",
  tasks,
}) {
  return (
    <div className="container m-0 p-0">
      <div className="management-container">
        {/* Task Header */}
        <div className="task-header-container d-flex justify-content-between align-items-center">
          <h4 className="small">{headerText}</h4>
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

        {/* Responsive Table */}
        <table className="management-table container m-0 p-0">
          <thead>
            <tr>
              <th>&nbsp;&nbsp;&nbsp;#</th>
              <th>Name</th>
              <th>Job Position</th>
              <th>Milestone</th>
              <th>Salary</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task, index) => (
              <tr key={index}>
                <td>
                  <img src={task.image} alt="" className="table-image" />
                </td>
                <td>{task.name}</td>
                <td>{task.position}</td>
                <td>
                  <div className="progress">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{
                        width: `${task.progress}%`,
                      }}
                      aria-valuenow={task.progress}
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      {task.progress}%
                    </div>
                  </div>
                </td>
                <td>{task.salary}</td>
                <td className="actions-icon">
                  <i className="reload-table-data-icon">
                    <IoReload />
                  </i>
                  <i className="cross-table-icon">
                    <IoCloseOutline />
                  </i>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
