import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NumericInput from 'react-numeric-input';
NumericInput.style.input.color = 'white';

class App extends Component {
    constructor(props) {
    super(props);
    this.state = { inputValue: "" };
    this.state = { inputValue2: "" };
    this._handleUpdate = this._handleUpdate.bind(this);
    this._handleUpdate2 = this._handleUpdate2.bind(this);
    this._reset = this._reset.bind(this);
    this.one="";
    this.two="";
  }

     _handleUpdate(e) {
    if (e.target.validity.valid) {
      this.setState({ inputValue: e.target.value });
      this.one = e.target.value;
    }
  }

  _handleUpdate2(e) {
    if (e.target.validity.valid) {
      this.setState({ inputValue2: e.target.value });
      this.two = e.target.value2

    }
  }



  _reset() {
    this.setState({ inputValue: ""});
    this.setState({ inputValue2: "" });
    this.state.inputValue3 = parseInt(this.state.inputValue) + parseInt(this.state.inputValue2)
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React and Django</h1>
        </header>
        <p className="App-intro">
          This is a project by C. Theodorou.
        </p>

        <div>
        <input type="number" value={this.state.inputValue} onChange={this._handleUpdate} step="any" />
        <input type="number" value={this.state.inputValue2} onChange={this._handleUpdate2} step="any" />

        <button onClick={this._reset}>reset</button>
      </div>
      <div>
      <input type="text" value={this.state.inputValue3}/>
      </div>


      </div>
    );
  }
}

export default App;
