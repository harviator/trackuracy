import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Route exact path="/" component={Home} />
        <Route path="/tier1" component={Teir1} />
        <Route path="/tier2" component={Teir2} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;