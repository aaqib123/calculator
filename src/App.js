import React, { Component } from 'react';
import './App.css';
import Button from './Button.js';
import Input from './Input.js';
import ClearButton from './ClearButton.js';
import * as math from 'mathjs';

class App extends Component {
  constructor(props) {
    super(props);
    this.addtoInputNumber = this.addtoInputNumber.bind(this);
    this.state = {
      input: ''
    };
    var flagValue = new Boolean(false); 
  }

  addtoInputNumber = (val) => {
    this.setState({ input: this.state.input + val.toString() });
    let temp = this.state.input + val;
    console.log("state " +  temp);
    this.flagValue = false;
  };

  addtoInputMath = (val) => {
    let temp = { input: this.state.input + val };
    let lastDigit = (temp.input.toString().slice(-1));
    console.log("temp " + temp.input);
    console.log("LAST DIGIT " + lastDigit);

    if (isNaN(lastDigit) && this.flagValue == false) {
      console.log(this.flagValue);
      this.setState(temp);
      this.flagValue = true; 
    }

  };

  handleEqual = () => {
    console.log("equal button clicked");
    this.setState({ input: math.eval(this.state.input) });
  };

  render() {
    return (
      <div className="app">
        <div className="calc-wrapper">
          <Input input={this.state.input} />
          <div className="row">
            <Button handleClick={() => { this.addtoInputNumber(1) }} value="1" />
            <Button handleClick={() => { this.addtoInputNumber(2) }} value="2" />
            <Button handleClick={() => { this.addtoInputNumber(3) }} value="3" />
            <Button handleClick={() => { this.addtoInputMath("/") }} value="/" />
          </div>
          <div className="row">
            <Button handleClick={() => { this.addtoInputNumber(4) }} value="4" />
            <Button handleClick={() => { this.addtoInputNumber(5) }} value="5" />
            <Button handleClick={() => { this.addtoInputNumber(6) }} value="6" />
            <Button handleClick={() => { this.addtoInputMath("*") }} value="*" />
          </div>
          <div className="row">
            <Button handleClick={() => { this.addtoInputNumber(7) }} value="7" />
            <Button handleClick={() => { this.addtoInputNumber(8) }} value="8" />
            <Button handleClick={() => { this.addtoInputNumber(9) }} value="9" />
            <Button handleClick={() => { this.addtoInputMath("-") }} value="-" />
          </div>
          <div className="row">
            <Button handleClick={() => { this.addtoInputMath(".") }} value="." />
            <Button handleClick={() => { this.addtoInputNumber(0) }} value="0" />
            <Button handleClick={() => { this.handleEqual() }} value="=" />
            <Button handleClick={() => { this.addtoInputMath("+") }} value="+" />
          </div>
          <div className="row">
            <ClearButton value="clear" handleClear={() => {
              console.log("asdf")
              this.setState({
                input: ''
              })
            }
            } />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
