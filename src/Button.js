import React, { Component } from 'react';
import './Button.css';


class Button extends React.Component {
    render() {
        return (
        <div className="button-wrapper">
            {this.props.value}
        </div>
        );

    }
}

export default Button;