import React, { Component } from 'react';
import Main from './routes/Main.js'
import './App.css';
//import { Router, Route, Link, hashHistory } from 'react-router';

class App extends Component {
  render() {
    return (
      <div>
        <Main />
      </div>
    );
  }
}

export default App;
