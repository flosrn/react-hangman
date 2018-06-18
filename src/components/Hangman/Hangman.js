import React from 'react';

import './Hangman.css';

class Hangman extends React.Component {

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
            <div className="hangman-head-container" ref={this.props.head}>
              <div className="hangman-head"></div>
            </div>
            <div className="hangman-body-container">
              <div className="hangman-body-container-left">
                <div className="hangman-body-left" ref={this.props.bodyLeft}></div>
                <div className="hangman-leftHand" ref={this.props.handLeft}></div>
              </div>
              <div className="hangman-body-container-right">
                <div className="hangman-body-right" ref={this.props.bodyRight}></div>
                <div className="hangman-rightHand" ref={this.props.handRight}></div>
              </div>
            </div>
            <div className="hangman-foot-container">
              <div className="hangman-foot-container-left">
                <div className="hangman-leftFoot" ref={this.props.footLeft}></div>
              </div>
              <div className="hangman-foot-container-right">
                <div className="hangman-rightFoot" ref={this.props.footRight}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Hangman;
