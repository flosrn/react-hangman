import React, { Component } from 'react';

import AppHeader from './components/AppHeader/AppHeader';
import Letters from './components/Letters/Letters';
import EndGame from './components/EndGame/EndGame';
import './App.css';
import Hangman from './components/Hangman/Hangman';

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
    this.win = React.createRef();
    this.defeat = React.createRef();
    this.hiddenWord = React.createRef();
    this.showedWord = React.createRef();
  }

  state = {
    letters: [
      { id: 1, letter: 'A' }, 
      { id: 2, letter: 'B' },
      { id: 3, letter: 'C' },
      { id: 4, letter: 'D' },
      { id: 5, letter: 'E' },
      { id: 6, letter: 'F' },
      { id: 7, letter: 'G' },
      { id: 8, letter: 'H' },
      { id: 9, letter: 'I' },
      { id: 10, letter: 'J' },
      { id: 11, letter: 'K' },
      { id: 12, letter: 'L' },
      { id: 13, letter: 'M' },
      { id: 14, letter: 'N' },
      { id: 15, letter: 'O' },
      { id: 16, letter: 'P' },
      { id: 17, letter: 'Q' },
      { id: 18, letter: 'R' },
      { id: 19, letter: 'S' },
      { id: 20, letter: 'T' },
      { id: 21, letter: 'U' },
      { id: 22, letter: 'V' },
      { id: 23, letter: 'W' },
      { id: 24, letter: 'X' },
      { id: 25, letter: 'Y' },
      { id: 26, letter: 'Z' }
    ],
    wordList: [
      { id: 1, word: 'CODE'},
      { id: 2, word: 'PROGRAMMATION'},
      { id: 4, word: 'GENTILHOMME'},
      { id: 5, word: 'HERMETIQUE'},
      { id: 6, word: 'TRAMPOLINE'},
      { id: 7, word: 'SCAPHANDRE'},
      { id: 8, word: 'SOULEVEMENT'},
      { id: 9, word: 'ARCHITECTURE'},
      { id: 10, word: 'ELECTROMENAGER'},
      { id: 11, word: 'MONGOLFIERE'},
      { id: 12, word: 'AVERTISSEMENT'},
      { id: 13, word: 'DESTRUCTURATION'},
      { id: 14, word: 'PASSEPORT'},
      { id: 15, word: 'VETERINAIRE'},
      { id: 16, word: 'INTELLIGENCE'},
      { id: 17, word: 'NUCLEAIRE'},
      { id: 18, word: 'TERASSEMENT'},
      { id: 19, word: 'AUBERGINE'},
      { id: 20, word: 'MAMMIFERE'},
      { id: 21, word: 'ROUCOULER'},
      { id: 22, word: 'REPUTATION'},
      { id: 23, word: 'MALHEUREUX'},
      { id: 24, word: 'POIGNARDER'},
      { id: 25, word: 'CONTAMINATION'},

    ],
    usedWord: [],
    hiddenWord: [],
    shots: 0,
    shotsWin: 0,
    shotsFailed: 0,
    gamesPlayed: 0,
    gamesWin: 0,
    gamesLoose: 0,
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
      this.defeat.current.style.display = 'inline-block';
    }
  }

  // Choisi un mot au hasard parmis la liste et place chaque lettre dans un tableau
  chooseWord() {
    const wordList = [...this.state.wordList];
    console.log('La liste de mot est: ', wordList);

    const listLength = wordList.length;
    console.log('Le nombre de mot dans cette liste est de: ', listLength);

    const randomWord = this.state.wordList[Math.floor(Math.random() * listLength)].word;
    console.log('Le mot choisi au hasard parmis cette liste est le mot: ', randomWord);

    const splittedWord = randomWord.split("");
    console.log('Ce mot transformé en tableau donne: ', splittedWord);

    const arr = new Array(randomWord.length + 1).join("_").split("");

    this.setState({
      usedWord: splittedWord, 
      hiddenWord: arr
    });
  }

  // En fonction de la lettre choisie par l'utilisateur, indique sa position dans le mot
  handleChooseLetter = (index) => {
    console.log('------------------------------------------------');

    const usedWord = [...this.state.usedWord];

    const chosenLetter = this.state.letters[index].letter;
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
              gamesWin: prevState.gamesWin + 1
            }
          })
          console.log('Gagné!');
          this.letters.current.style.display = 'none';
          this.win.current.style.display = 'inline-block';
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
              gamesLoose: prevState.gamesLoose + 1
            }
          })
          console.log('Perdu!');
          console.log(this.state.usedWord);
          this.hiddenWord.current.style.display = 'none';
          this.showedWord.current.style.display = 'block';
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
      shotsFailed: 0
    });

    this.head.current.style.visibility = 'hidden';
    this.bodyLeft.current.style.visibility = 'hidden';
    this.bodyRight.current.style.visibility = 'hidden';
    this.handLeft.current.style.visibility = 'hidden';
    this.handRight.current.style.visibility = 'hidden';
    this.footLeft.current.style.visibility = 'hidden';
    this.footRight.current.style.visibility = 'hidden';
    this.letters.current.style.display = 'flex';
    this.win.current.style.display = 'none';
    this.defeat.current.style.display = 'none';
    this.hiddenWord.current.style.display = 'block';
    this.showedWord.current.style.display = 'none';

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
          <div className="letter-container" ref={this.letters}>
            {this.state.letters.map(( letter, index ) => (
              <Letters 
                letter={letter.letter} 
                index={index}
                key={letter.id}
                onClick={this.handleChooseLetter} />
            ))}
          </div>
          <EndGame 
            gamesWin={this.state.gamesWin} 
            gamesLoose={this.state.gamesLoose}
            reload={this.reload}
            win={this.win}
            defeat={this.defeat} />
          <div className="counter-container">
            Nombre d'essais: <span>{this.state.shots}</span>
          </div>
          <div className="word-container">
            <div className="hiddenWord-container" ref={this.hiddenWord}>
              {this.state.hiddenWord.map(( letter, index ) => (
                <span className="word" key={index+1}>{letter}</span>
              ))}
            </div>
            <div className="showedWord-container" ref={this.showedWord}>
              {this.state.usedWord.map(( letter, index ) => (
                <span className="word" key={index+1}>{letter}</span>
              ))}
            </div>
          </div>
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
