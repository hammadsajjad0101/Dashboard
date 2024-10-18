import React from "react";
import { useNavigate } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { IoNotifications } from "react-icons/io5";
import { FaCaretDown } from "react-icons/fa";
import { IoCloseOutline } from "react-icons/io5";
import useToggle from "../components/useToggle";
import Dropdown from "../components/Dropdown";

export default function Navbar() {
  const isUserSignedIn = !!localStorage.getItem("token");
  const navigate = useNavigate();
  const [isOpen, toggleDropdown] = useToggle(false);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <>
      {isUserSignedIn && (
        <div className="container m-0 p-0">
          <div className="navbar-container">
            <h2 className="dashboard-heading">Dashboard</h2>
            <div className="nav-items">
              <CiSearch
                className="nav-icons"
                style={{ fontSize: "1.8rem" }}
                onClick={toggleDropdown}
              />
              <IoNotifications
                className="nav-icons"
                style={{ fontSize: "1.4rem" }}
              />
              <Dropdown handleLogout={handleLogout} />
            </div>
          </div>
          {/* Search Container */}
          {isOpen && (
            <div className="search-container">
              <input
                type="text"
                placeholder="SEARCH"
                className="search-bar"
              ></input>
              <IoCloseOutline
                className="search-close-icon"
                onClick={toggleDropdown}
              />
            </div>
          )}
        </div>
      )}
    </>
  );
}
