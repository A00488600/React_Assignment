// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import AboutMe from './components/AboutMe';
import MyTown from './components/MyTown';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <Link to="/">About Me</Link> | <Link to="/mytown">My Town</Link>
        </nav>
        <Routes>
          <Route path="/" element={<AboutMe />} />
          <Route path="/mytown" element={<MyTown />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
