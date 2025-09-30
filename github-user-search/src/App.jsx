import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Homepage from "./components/Home";
import Aboutpage from "./components/About";
import Dashboard from "./components/Dashboard";

function App() {
  return (
      <div>
        <Dashboard />

        <nav style={{
          backgroundColor: '#f0f0f0',
          padding: '15px',
          borderRadius: '10px',
          marginBottom: '20px'
        }}>
          <Link to = '/'>Home</Link>
          <Link to = 'about'>About</Link>

          <Routes>
            <Route path = "/" element = {<Homepage />} />
            <Route path = "about" element = {<Aboutpage />} />

          </Routes>

        </nav>
      </div>
  )
}

export default App;
