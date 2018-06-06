import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NumericInput from 'react-numeric-input';
NumericInput.style.input.color = 'white';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React and Django</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <NumericInput  min={0} max={100} value={0}/>
        <NumericInput  min={0} max={100} value={0}/>
        <button type="button">Calculate</button>
      </div>
    );
  }
}

export default App;
