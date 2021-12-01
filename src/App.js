import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/Header';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Coverage from './components/pages/Coverage';
import Case from './components/pages/Case';
import More from './components/pages/More';
import Footer from './components/Footer';


function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/coverage" element={<Coverage />} />
          <Route exact path="/case" element={<Case />} />
          <Route exact path="/more" element={<More />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

/* Notes:

*/