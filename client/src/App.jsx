import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import Navbar from "./pages/Navbar";
import Permissions from "./pages/Permissions";
import Roles from "./pages/Roles";
import Users from "./pages/Users";

export default function App() {
  const isUserSignedIn = !!localStorage.getItem("token");
  return (
    <div className="app">
      <div>{isUserSignedIn && <Navbar />}</div>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        {isUserSignedIn ? (
          <React.Fragment>
            <Route path="/home" element={<Home />} />
            <Route path="/permissions" element={<Permissions />} />
            <Route path="/roles" element={<Roles />} />
            <Route path="/users" element={<Users />} />
          </React.Fragment>
        ) : (
          <Route path="*" element={<Navigate to="/login" />} />
        )}
      </Routes>
    </div>
  );
}
