import React from 'react';

class EndGame extends React.Component {
  constructor() {
    super();
    this.state = { someKey: 'someValue' };
  }

  render() {
    return (
      <div>
      <div className="defeat" ref={this.props.defeat}>
        <div><span>GAME OVER</span></div>
          <div>
            <div><span>Parties gagnées: <span>{this.props.gamesWin}</span></span></div>
            <div><span>Parties perdues: <span>{this.props.gamesLoose}</span></span></div>
          </div>
          <div><span onClick={this.props.reload}>TRY AGAIN?</span></div>
        </div>
        <div className="win" ref={this.props.win}>
          <div><span>BRAVO, VOUS AVEZ TROUVÉ LE MOT</span></div>
          <div>
            <div><span>Parties gagnées: <span>{this.props.gamesWin}</span></span></div>
            <div><span>Parties perdues: <span>{this.props.gamesLoose}</span></span></div>
          </div>
          <div><span onClick={this.props.reload}>Nouvelle partie</span></div>
        </div>
      </div>
    )
  }

}

export default EndGame;
