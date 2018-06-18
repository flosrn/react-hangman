import React, { Component } from 'react';
import './Letter.css';

class Letter extends Component {
  constructor(props) {
    super(props);
    // console.log(this.props.listLetter);
  }

  render() {
    return (
      <span>{this.props.letter}</span>
    );
      
      {/* <span 
        className="letter" 
        onClick={() => this.onClick(this.props.index)}>
        {this.props.letter}
      </span> */}    
  }
}

// const Letter = ({ letter, index, onClick }) => (
 
//     <span className="letter" onClick={() => onClick(index)}>
//       {letter}
//     </span>
  
// )

export default Letter;
