import React, {Component} from 'react';
import './App.css'
import Home from './Home.jsx';
import About from './About.jsx';
import Content from './Content.jsx';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';

const App = () => (
  <Router>
    <div className="App">
      <h1 id="appTitle">GiBook</h1>
      <ul className="left-navi">
        <li className="link"><Link to="/">Home</Link></li>
        <li className="link"><Link to="/about">About</Link></li>
      </ul>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route path="/about" component={About}></Route>
        <Route path="/content" component={Content}></Route>
      </Switch>
    </div>
  </Router>
);

export default App;