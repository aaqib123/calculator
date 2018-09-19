import React, { Component } from 'react';
import './Button.css';


class Button extends React.Component {
    render() {
        const asdf= this.props.value;
        return (
        <div className="button-wrapper"  onClick={this.props.handleClick} >
            {asdf}
        </div>
        );

    }
}

export default Button;

// onClick={this.props.handleClick(asdf)}