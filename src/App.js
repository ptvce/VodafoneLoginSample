import "./App.css";
import Login from "./screens/login/login";
import UserHome from "./screens/user-home";
import { Route, Routes } from "react-router-dom";
import React from "react";

function App() {
  return (
    <div className="App">
      <div>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<UserHome />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
