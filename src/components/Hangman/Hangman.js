import React from 'react';

import './Hangman.css';

class Hangman extends React.Component {
  constructor(props) {
    super(props);
    this.head = React.createRef();
    this.bodyLeft = React.createRef();
    this.bodyRight = React.createRef();
    this.handLeft = React.createRef();
    this.handRight = React.createRef();
    this.footLeft = React.createRef();
    this.footRight = React.createRef();
    this.letters = React.createRef();
    this.hiddenWord = React.createRef();
    this.showedWord = React.createRef();
  }

  componentDidUpdate() {
    if (this.props.shotsFailed === 1) {
      this.head.current.style.visibility = 'visible';
    }
    if (this.props.shotsFailed === 2) {
      this.bodyLeft.current.style.visibility = 'visible';
      this.bodyRight.current.style.visibility = 'visible';
    }
    if (this.props.shotsFailed === 3) {
      this.handLeft.current.style.visibility = 'visible';
    }
    if (this.props.shotsFailed === 4) {
      this.handRight.current.style.visibility = 'visible';
    }
    if (this.props.shotsFailed === 5) {
      this.footLeft.current.style.visibility = 'visible';
    }
    if (this.props.shotsFailed === 6) {
      this.footRight.current.style.visibility = 'visible';
      this.props.letters.current.style.display = 'none';
    }

    if (this.props.toggleReload) {
      this.head.current.style.visibility = 'hidden';
      this.bodyLeft.current.style.visibility = 'hidden';
      this.bodyRight.current.style.visibility = 'hidden';
      this.handLeft.current.style.visibility = 'hidden';
      this.handRight.current.style.visibility = 'hidden';
      this.footLeft.current.style.visibility = 'hidden';
      this.footRight.current.style.visibility = 'hidden';
    }
  }


  render() {
    return (
      <div className="drawing-container">
        <div className="woodenbar-container-header">
          <div className="woodenbar-top2"></div>
          <div className="woodenbar-top3"></div>
          <div className="woodenbar-container-header-left">
            <div className="woodenbar-top"></div>     
          </div>
        </div>
        <div className="drawing-hangman-container">
          <div className="woodenbar-container-left">
            <div className="woodenbar-left"></div>
            <div className="woodenbar-bottom"></div>
          </div>
          <div className="hangman-container">
            <div className="hangman-head-container" ref={this.head}>
              <div className="hangman-head"></div>
            </div>
            <div className="hangman-body-container">
              <div className="hangman-body-container-left">
                <div className="hangman-body-left" ref={this.bodyLeft}></div>
                <div className="hangman-leftHand" ref={this.handLeft}></div>
              </div>
              <div className="hangman-body-container-right">
                <div className="hangman-body-right" ref={this.bodyRight}></div>
                <div className="hangman-rightHand" ref={this.handRight}></div>
              </div>
            </div>
            <div className="hangman-foot-container">
              <div className="hangman-foot-container-left">
                <div className="hangman-leftFoot" ref={this.footLeft}></div>
              </div>
              <div className="hangman-foot-container-right">
                <div className="hangman-rightFoot" ref={this.footRight}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Hangman;
