import React from 'react';

import Letter from './Letter/Letter';
import './Keyboard.css';

const ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

class Keyboard extends React.Component {

  renderKeyboard() {
    const arr = ALPHABET.split('');
    const keyboard = arr.map((letter, index) => 
      <Letter 
        letter={letter} 
        key={index} 
        onClick={() => this.props.clicked(letter, index)} />
    )
    return (
      <div className="letter-container" ref={this.props.letters}>
        {keyboard}
      </div>
    )
  }

  render() {
    return (
      <div>
        {this.renderKeyboard()}
      </div>
    );
  }
}

export default Keyboard;
