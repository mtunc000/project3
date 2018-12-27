import React, { Component } from "react";
import "./App.css";
import Clinic from "./Clinic/Clinic";
import Individual from "./Individual/Individual";

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
      <div className="App">
        <h1> Project 3 Starting </h1>{" "}
        <input
          type="text"
          onChange={this.inputChangeHandler}
          value={this.state.userInput}
        />{" "}
        <br /> <br />
        <Clinic inputLength={this.state.userInput.length} /> <br /> <br />
        <Individual inputLength={this.state.userInput.length} />{" "}
      </div>
    );
  }
}

export default App;
