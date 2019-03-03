import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Skills from "./components/pages/Skills/Skills.js";
import Home from "./components/pages/Home/Home.js";
import Gallery from "./components/pages/Gallery/Gallery.js";
import Contact from "./components/pages/Contact/Contact.js";
import Portfolio from "./components/pages/Portfolio/Portfolio.js";
import './App.css';

class App extends Component {
  render() {
    return (
        <Router>
          <div className="mainDiv">
          <Route exact path="/" component={Home} />
          <Route exact path="/portfolio" component={Portfolio} />
          <Route exact path="/gallery" component={Gallery}/>
          <Route exact path="/skills" component={Skills}/>
          <Route exact path="/contact" component={Contact}/>
          </div>
        </Router>
    );
  }
}

export default App;
