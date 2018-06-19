import React from 'react';

class EndGame extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const winStatut = this.props.winStatut;
    return (
      <div className="statut-container">
        <div className="statut">
          <div><span>{winStatut ? 'BRAVO, VOUS AVEZ TROUVÉ LE MOT' : 'GAME OVER'}</span></div>
          <div>
            <div><span>Parties gagnées: <span>{this.props.gamesWin}</span></span></div>
            <div><span>Parties perdues: <span>{this.props.gamesLoose}</span></span></div>
          </div>
          <div><span onClick={this.props.reload}>{winStatut ? 'Nouvelle partie' : 'TRY AGAIN'}</span></div>
        </div>
      </div>
    )
  }
}

export default EndGame;
