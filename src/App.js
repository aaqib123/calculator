import React, { Component } from 'react';
import './App.css';
import Button from './Button.js';
import Input from './Input.js';

class App extends Component {
  constructor(props){
    super(props);

    this.state={
      input:''
    }
  }

  render() {
    return (
      <div className="app">     
          <div className="calc-wrapper">
          <Input input="asdf"/>
            <div className="row">
              <Button value="1"/>
              <Button value="2"/>
              <Button value="3"/>
              <Button value="/"/>
            </div>
            <div className="row">
              <Button value="4"/>
              <Button value="5"/>
              <Button value="6"/>
              <Button value="*"/>
            </div>
            <div className="row">
              <Button value="7"/>
              <Button value="8"/>
              <Button value="9"/>
              <Button value="-"/>
            </div>
            <div className="row">
              <Button value="."/>
              <Button value="0"/>
              <Button value="="/>
              <Button value="+"/>
            </div>
          </div>  
      </div>
    );
  }
}

export default App;
