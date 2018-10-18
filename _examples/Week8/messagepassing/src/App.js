import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import "./ColorBox";


class App extends Component {

  state = {
    passedColors: [ "rgb(0,255,0)", "rgb(0,0,255)",  "rgb(255,0,0)" ],
    colorStep: 0
  }

  render() {
    return (
      <div className="App">
        <ColorBox bgcolor={this.state.passedColors[0]} colorChanged={(newColor) => { this.handleChange(newColor) }} />
        <ColorBox bgcolor={this.state.passedColors[1]} colorChanged={() => { }} />
        <ColorBox bgcolor={this.state.passedColors[2]} colorChanged={() => { }} />
      </div>
    );
  }

  handleChange(newColor) {
    //modify the array to make a new array put into our state
      var newColors = this.state.passedColors;
      newColors[0] = newColor;

      //set state to update DOM
      this.setState({
        colorStep: 0,
        passedColors: newColors
      })

      //wait one second to update next boxes..
      setTimeout( () => { this.propogateColor() },1000);
  }

  propogateColor() {

    //move our pointer "one forward" in the array
    var nextStep = this.state.colorStep + 1;

    //copy the array so we can modify it.
    var newColors = this.state.passedColors;

    //modify the array to make a new array put into our state
    newColors[nextStep] = this.state.passedColors[0];

    //update state
    this.setState({
      colorStep: nextStep,
      passedColors: newColors
    })

    //if there's still more colors to update.. set a new timeout
    if(this.state.colorStep < this.state.passedColors.length-1) {
      setTimeout( () => { this.propogateColor() },1000);
    }

  }
}

export default App;
