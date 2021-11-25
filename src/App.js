import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/Header';
import Home from './components/pages/Home';
import Whytrackuracy from './components/pages/Whytrackuracy';
import Customizecoverage from './components/pages/Customizecoverage';
import Findoutmore from './components/pages/Findoutmore';
import Footer from './components/Footer';


function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/whytrackuracy" element={<Whytrackuracy />} />
          <Route exact path="/customizecoverage" element={<Customizecoverage />} />
          <Route exact path="/findoutmore" element={<Findoutmore />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

/* Notes:

*/