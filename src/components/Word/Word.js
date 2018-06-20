import React from 'react';


class Word extends React.Component {

  render() {
    return (
      <div className="word-container">
        { !this.props.winStatut && !this.props.looseStatut ? 
          this.props.hiddenWord.map(( letter, index ) => (
            <span key={index+1}>{letter}</span>
          )) : 
          this.props.revealedWord.map(( letter, index ) => (
            <span key={index+1}>{letter}</span>
          )) }
      </div>
    )
  }  
}

export default Word;
