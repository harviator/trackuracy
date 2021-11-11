import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/Header';
import Home from './components/pages/Home';
import Tier1 from './components/pages/Tier1';
import Tier2 from './components/pages/Tier2';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" component={Home} />
          <Route path="/tier1" component={Tier1} />
          <Route path="/tier2" component={Tier2} />
        </Routes>
          {/* <Footer /> */}
      </div>
    </Router>
  );
}

export default App;

/* Notes:
  -Pages aren't being rendered.
  -Collapsible navbar isn't collapsing on selection.
*/