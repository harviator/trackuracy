import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/Header';
import Home from './components/pages/Home';
import Tier1 from './components/pages/Tier1';
import Tier2 from './components/pages/Tier2';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/tier1" element={<Tier1 />} />
          <Route exact path="/tier2" element={<Tier2 />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;