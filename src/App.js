import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Questionnaire from './pages/Questionnaire';
import './styles.css';
import Navbar from './pages/Navbar'; // Import Navbar

function App() {
  return (
    <Router>
      <div>
      <Navbar /> {/* Use Navbar component here */}
        
        <div className="container">
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/questionnaire" element={<Questionnaire />} />
            <Route path="*" element={<Navigate to="/login" />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
