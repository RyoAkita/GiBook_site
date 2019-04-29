import React, {Component} from 'react';
import './App.css'
import Home from './Home.jsx';
import About from './About.jsx';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';

const App = () => (
  <Router>
    <div className="App">
      <ul className="left-navi">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
      </ul>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route path="/about" component={About}></Route>
      </Switch>
    </div>
  </Router>
);

export default App;