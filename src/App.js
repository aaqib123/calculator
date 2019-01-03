import React, { Component } from "react";
import "./App.css";
import Button from "./Button.js";
import Input from "./Input.js";
import ClearButton from "./ClearButton.js";
import * as math from "mathjs";

class App extends Component {
  constructor(props) {
    super(props);
    //this.addtoInputNumber = this.addtoInputNumber.bind(this);
    //this.addtoInputMath = this.addtoInputMath.bind(this);
    //this.handleEqual = this.handleEqual.bind(this);
    this.state = {
      input: ""
    };
    var flagValue = new Boolean(false); //falg value to prevent multiple arith operators
  }

  //appends number to state. 
  addtoInputNumber = val => {
    //convert to string to prevent adding instead of appending
    this.setState({ input: this.state.input + val.toString() });
    // console.log("state " + this.state.input + val);
    //resets flag value
    this.flagValue = false;
  };

  //appends arith operators to state
  addtoInputMath = val => {
    //if no entry madfe and perios is clicked  = enter 0.
    if (this.state.input == "" && val == ".") {
      this.setState({ input: this.state.input + "0." });
    }

    let temp = { input: this.state.input + val };
    //get last digit of the value in state.
    let lastDigit = temp.input.toString().slice(-1);
    console.log(
      "  TEMP :" +
        temp.input +
        "  LAST DIGIT :" +
        lastDigit +
        "  FLAG :" +
        this.flagValue
    );
    //if input is NaN and the flag is set to false then add the arith operator
    // this prevents adding multiple arith operators in a sequence
    if (isNaN(lastDigit) && this.flagValue == false) {
      this.setState(temp);
      this.flagValue = true;
    }
  };

  //perform math eval on clicking =
  handleEqual = () => {
    console.log("equal button clicked");
    //handles if  = is clicked with no entry
    if (this.state.input != "") {
      let lastDigit = this.state.input.toString().slice(-1);
      //if condition to make sure the last digit in the state is not a operator.
      if (!isNaN(lastDigit)) {
        this.setState({ input: math.eval(this.state.input) });
      }
    }
  };

  render() {
    return (
      <div className="app">
        <div className="calc-wrapper">
          <Input input={this.state.input} />
          <div className="row">
            <Button
              handleClick={() => {
                this.addtoInputNumber(1);
              }}
              value="1"
            />
            <Button
              handleClick={() => {
                this.addtoInputNumber(2);
              }}
              value="2"
            />
            <Button
              handleClick={() => {
                this.addtoInputNumber(3);
              }}
              value="3"
            />
            <Button
              handleClick={() => {
                this.addtoInputMath("/");
              }}
              value="/"
            />
          </div>
          <div className="row">
            <Button
              handleClick={() => {
                this.addtoInputNumber(4);
              }}
              value="4"
            />
            <Button
              handleClick={() => {
                this.addtoInputNumber(5);
              }}
              value="5"
            />
            <Button
              handleClick={() => {
                this.addtoInputNumber(6);
              }}
              value="6"
            />
            <Button
              handleClick={() => {
                this.addtoInputMath("*");
              }}
              value="*"
            />
          </div>
          <div className="row">
            <Button
              handleClick={() => {
                this.addtoInputNumber(7);
              }}
              value="7"
            />
            <Button
              handleClick={() => {
                this.addtoInputNumber(8);
              }}
              value="8"
            />
            <Button
              handleClick={() => {
                this.addtoInputNumber(9);
              }}
              value="9"
            />
            <Button
              handleClick={() => {
                this.addtoInputMath("-");
              }}
              value="-"
            />
          </div>
          <div className="row">
            <Button
              handleClick={() => {
                this.addtoInputMath(".");
              }}
              value="."
            />
            <Button
              handleClick={() => {
                this.addtoInputNumber(0);
              }}
              value="0"
            />
            <Button
              handleClick={() => {
                this.handleEqual();
              }}
              value="="
            />
            <Button
              handleClick={() => {
                this.addtoInputMath("+");
              }}
              value="+"
            />
          </div>
          <div className="row">
            <ClearButton
              value="clear"
              handleClear={() => {
                console.log("CLear");
              //blank state
              this.setState({
                  input: ""
                });
              }}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
