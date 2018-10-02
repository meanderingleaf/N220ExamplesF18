import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      coats: { owned: [] }
    }

    //load in the JSON
    fetch("data/coats.json")
      .then((result) => result.json())
      .then((data) => {
        this.setState({coats: data});
      })
  }

  render() {


    return (
      <div className="App">
       <h2>Owned</h2>
       {
         this.state.coats.owned.map((coat) => {
            return(<div>{coat}</div>);
         })
       }
      </div>
    );
  }
}

export default App;
