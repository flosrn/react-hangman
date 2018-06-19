import React, { Component } from 'react';
import './Letter.css';


class Letter extends Component {
  render() {
    return (  
      <span 
        className="letter" 
        onClick={this.props.onClick}>
        {this.props.letter}
      </span> 
    )
  }
}

export default Letter;
