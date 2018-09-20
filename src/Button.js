import React, { Component } from 'react';
import './Button.css';


class Button extends React.Component {
    render() {
        return (
        <div className="button-wrapper"  onClick={this.props.handleClick} >
            {this.props.value}
        </div>
        );

    }
}

export default Button;

// onClick={this.props.handleClick(asdf)}