import React, { Component } from 'react';

import wordsList from './wordsList';
import AppHeader from './components/AppHeader/AppHeader';
import Keyboard from './components/Keyboard/Keyboard';
import EndGame from './components/EndGame/EndGame';
import Word from './components/Word/Word';
import Hangman from './components/Hangman/Hangman';

import './App.css';


class App extends Component {

  constructor(props) {
    super(props);
    this.chooseWord = this.chooseWord.bind(this);
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

  state = {
    usedWord: [],
    hiddenWord: [],
    shots: 0,
    shotsWin: 0,
    shotsFailed: 0,
    gamesPlayed: 0,
    gamesWin: 0,
    gamesLoose: 0,
    winStatut: false,
    looseStatut: false
  }

  componentDidMount() {
     window.addEventListener('load', this.chooseWord);
  }

  componentDidUpdate() {
    if (this.state.shotsFailed === 1) {
      this.head.current.style.visibility = 'visible';
    }
    if (this.state.shotsFailed === 2) {
      this.bodyLeft.current.style.visibility = 'visible';
      this.bodyRight.current.style.visibility = 'visible';
    }
    if (this.state.shotsFailed === 3) {
      this.handLeft.current.style.visibility = 'visible';
    }
    if (this.state.shotsFailed === 4) {
      this.handRight.current.style.visibility = 'visible';
    }
    if (this.state.shotsFailed === 5) {
      this.footLeft.current.style.visibility = 'visible';
    }
    if (this.state.shotsFailed === 6) {
      this.footRight.current.style.visibility = 'visible';
      this.letters.current.style.display = 'none';
    }
  }

  // Choisi un mot au hasard parmis la liste et place chaque lettre dans un tableau
  chooseWord() {
    const wordArray = Object.values(wordsList)[0];
    console.log('La liste de mot est: ', wordArray);

    const listLength = wordArray.length;
    console.log('Le nombre de mot dans cette liste est de: ', listLength);

    const randomWord = wordArray[Math.floor(Math.random() * listLength)];
    console.log('Le mot choisi au hasard parmis cette liste est le mot: ', randomWord);

    const splittedWord = randomWord.split("");
    console.log('Ce mot transformé en tableau donne: ', splittedWord);

    const underscoreWord = new Array(randomWord.length + 1).join("_").split("");

    this.setState({
      usedWord: splittedWord, 
      hiddenWord: underscoreWord
    });
  }

  // En fonction de la lettre choisie par l'utilisateur, indique sa position dans le mot
  handleChooseLetter = (letter, index) => {
    console.log('------------------------------------------------');

    const usedWord = [...this.state.usedWord];

    const chosenLetter = letter;
    console.log('La lettre clickée par l\'utilisateur est la lettre: ', chosenLetter);

    var letterPosition = usedWord.indexOf(chosenLetter);

    this.setState((prevState) => {
      return {
        shots: prevState.shots + 1
      }
    });
    const letterClicked = document.querySelectorAll(".letter");
    letterClicked[index].style.backgroundColor = '#e0e0e0';
    letterClicked[index].style.pointerEvents = 'none';

    // Si la lettre se trouve dans le mot 
    if (letterPosition >= 0) {
      console.log('Cette lettre se trouve à la position ', letterPosition + ' dans le mot');
     
      const hiddenWord = [...this.state.hiddenWord];

      // Remplace le ou les '_' par la lettre
      for (let i = 0; i < usedWord.length; i++) {
        if (usedWord[i] === chosenLetter) {
          hiddenWord[i] = chosenLetter;
        }
      }
      this.setState((prevState) => {
        return {
          hiddenWord: hiddenWord, 
          shotsWin: prevState.shotsWin + 1
        }
      });
      // Verifie si toutes les lettres du mots ont été trouvées, si oui la partie est gagnée
      this.setState({hiddenWord: hiddenWord}, () => {
        const string = hiddenWord.join("");
        if(string.indexOf("_") < 0) {
          this.setState((prevState) => {
            return {
              gamesWin: prevState.gamesWin + 1,
              winStatut: true
            }
          })
          console.log('Gagné!');
          this.letters.current.style.display = 'none';
        }
      })
      // Si elle ne se trouve pas dans le mot
    } else {
      console.log('Cette lettre ne se trouve pas dans le mot!');

      this.setState((prevState) => {
        return {
          shotsFailed: prevState.shotsFailed + 1
        }
      });
      // Si l'utilisateur se trompe plus de 5 fois, la partie est perdue
      this.setState({shotsFailed: this.state.shotsFailed + 1}, () => { 
        if (this.state.shotsFailed === 6) {
          this.setState((prevState) => {
            return {
              gamesLoose: prevState.gamesLoose + 1,
              looseStatut: true
            }
          })
          console.log('Perdu!');
          console.log('Le mot à trouver était le mot: ' + this.state.usedWord);
        }
      })
    }
  }

  // Relance une partie
  reload = () => {
    const letters = document.querySelectorAll(".letter");

    this.setState({
      shots: 0,
      shotsWin: 0,
      shotsFailed: 0,
      winStatut: false,
      looseStatut: false
    });

    this.head.current.style.visibility = 'hidden';
    this.bodyLeft.current.style.visibility = 'hidden';
    this.bodyRight.current.style.visibility = 'hidden';
    this.handLeft.current.style.visibility = 'hidden';
    this.handRight.current.style.visibility = 'hidden';
    this.footLeft.current.style.visibility = 'hidden';
    this.footRight.current.style.visibility = 'hidden';
    this.letters.current.style.display = 'flex';

    letters.forEach(i => {
      i.style.backgroundColor = '#fff';
      i.style.pointerEvents = 'auto';
    });

    this.chooseWord();
  }

  render() {
    return (
      <div className="App">
        <AppHeader />
        <div className="main-container">

          <Keyboard 
            letters={this.letters}
            clicked={this.handleChooseLetter} />
          
          { this.state.winStatut || this.state.looseStatut ? 
          <EndGame 
            winStatut={this.state.winStatut}
            gamesWin={this.state.gamesWin} 
            gamesLoose={this.state.gamesLoose}
            reload={this.reload} /> 
          : null }

          <div className="counter-container">
            Nombre d'essais: <span>{this.state.shots}</span>
          </div>

          <Word 
            winStatut={this.state.winStatut} 
            looseStatut={this.state.looseStatut} 
            hiddenWord={this.state.hiddenWord}
            revealedWord={this.state.usedWord} />

          <Hangman 
            head={this.head} 
            bodyLeft={this.bodyLeft}
            bodyRight={this.bodyRight}
            handLeft={this.handLeft}
            handRight={this.handRight}
            footLeft={this.footLeft}
            footRight={this.footRight} />
        </div>
      </div>
    );
  }
}

export default App;
