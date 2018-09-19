import React, { Component } from 'react';
import './ClearButton.css';


class ClearButton extends React.Component {
    render() {
        return (
        <div className="ClearButton-wrapper" onClick={this.props.handleClear}>
            {this.props.value}
        </div>
        );

    }
}

export default ClearButton;