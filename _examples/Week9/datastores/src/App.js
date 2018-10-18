import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Map from "./Map.js";
import PointStore from "./PointStore.js";

class App extends Component {

  constructor(props) {
    super(props);

    //This is assumed to actually be loaded via JSON / fetch
    var points = [
      { x: 100, y: 200 },
      { x: 20, y: 300 },
      { x: 400, y: 400 }
    ];
    //End external loads

    PointStore.init(points);
    PointStore.register(this);

    this.state = {
      points: PointStore.points
    }
  }

  render() {
    return (
      <div className="App">
        <Map points={this.state.points} />
      </div>
    );
  }
}

export default App;
