import React from "react";

export default function Dropdown({ handleLogout }) {
  return (
    <div className="dropdown d-inline" style={{ fontSize: "1.4rem" }}>
      <button
        className="btn dropdown-toggle p-0 m-0"
        type="button"
        id="dropdownMenuButton"
        data-bs-toggle="dropdown"
        aria-expanded="false"
        style={{ color: "white", border: "none" }}
      ></button>
      <ul className="dropdown-menu p-1" aria-labelledby="dropdownMenuButton">
        <li className="dropdown-item hover-bg p-2">Profile</li>
        <li className="dropdown-item hover-bg p-2">Settings</li>
        <li className="dropdown-item hover-bg p-2" onClick={handleLogout}>
          Logout
        </li>
      </ul>
    </div>
  );
}
