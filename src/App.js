import React from 'react';
import { Routes, Route, HashRouter } from 'react-router-dom';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import './styles/style.css';

export default function App() {
  return (
    <div>
      <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;500;700&display=swap" rel="stylesheet"></link>
      <HashRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </HashRouter>
    </div>
  );
}
