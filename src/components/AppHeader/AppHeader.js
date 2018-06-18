import React from 'react';

import Clock from './Clock/Clock';

import './AppHeader.css';
import logo from './logo.svg';

const appHeader = () => {
  return (
    <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Bienvenue sur le jeu du pendu</h1>

        <Clock />
    </header>
  )
}

export default appHeader;