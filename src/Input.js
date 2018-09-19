import React, { Component } from 'react';
import './Input.css';


class Input extends React.Component {
    render() {
        return (
            <div className="input">
                {this.props.input}    
            </div>
        );

    }
}

export default Input;