import React from 'react';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/Header';
import Home from './components/pages/Home';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route exact path="/" component={Home} />
          {/* <Route path="/tier1" component={Tier1} /> */}
          {/* <Route path="/tier2" component={Tier2} /> */}
        </Routes>
          {/* <Footer /> */}
      </div>
    </Router>
  );
}

export default App;