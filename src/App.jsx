import React, {Component} from 'react';
import './App.css'
import Home from './Home.jsx';
import About from './About.jsx';
import Content from './Content.jsx';
import System from './System.jsx';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';

const App = () => (
  <Router>
    <div className="App">
      <h1 id="appTitle">GiBook</h1>
      <nav>
      <ul className="left-navi">
        <li className="link"><Link className="navi" to="/">Home</Link></li>
        <li className="link"><Link className="navi" to="/system">System</Link></li>
        <li className="link"><Link className="navi" to="/about">About</Link></li>
      </ul>
      </nav>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route path="/about" component={About}></Route>
        <Route path="/system" component={System}></Route>
        <Route path="/content" component={Content}></Route>
      </Switch>
    </div>
  </Router>
);

export default App;