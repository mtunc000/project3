import React, { Component } from "react";
import "./App.css";
import Clinic from "./Clinic/Clinic";
import Individual from "./Individual/Individual";
import Aux from "./hoc/Aux";

class App extends Component {
  state = {
    userInput: ""
  };
  inputChangeHandler = event => {
    this.setState({
      userInput: event.target.value
    });
  };

  render() {
    return (
      <Aux className="App">
        <h1> Project 3 Starting </h1>
        <Clinic inputLength={this.state.userInput.length}>
          <input
            type="text"
            onChange={this.inputChangeHandler}
            value={this.state.userInput}
          />
        </Clinic>
        <br /> <br />
        <Individual inputLength={this.state.userInput.length}>
          <input
            type="text"
            onChange={this.inputChangeHandler}
            value={this.state.userInput}
          />
        </Individual>
      </Aux>
    );
  }
}

export default App;
