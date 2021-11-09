import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Navbar } from './components';
import Home from './components/pages/Home';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Route exact path="/" component={Home} />
        {/* <Route path="/tier1" component={Tier1} /> */}
        {/* <Route path="/tier2" component={Tier2} /> */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;