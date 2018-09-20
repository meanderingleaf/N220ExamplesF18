import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import "./WinMeter";
import RPS from "./RPS";
import WinMeter from "./WinMeter";

class App extends Component {

  state = {
    wins: 0
  }

  render() {
    return (
      <div className="App">
        <WinMeter score={this.state.wins} />
        <RPS onPlay={(outcome) => { this.onRPSResult(outcome) }} />
      </div>
    );
  }

  onRPSResult(outcome) {
    if(outcome == "win") {
      this.setState({ wins: this.state.wins + 1 })
    }
    console.log(outcome);
  }
}

export default App;
