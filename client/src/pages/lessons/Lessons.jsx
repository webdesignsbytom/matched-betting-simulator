import React, { useState } from 'react';
import Nav from '../../components/nav/Nav';
import Game from './components/Game';
import HowToPlay from './components/HowToPlay';
import './style.css';

function Lessons() {
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlaying = () => {
    setIsPlaying(!isPlaying);
  };
  return (
    <>
      <Nav />

      <header className='lessons__header__container'>
        <h2>Learn How To Play</h2>
        <span>With our exclusive interactive game</span>
      </header>

      <HowToPlay />

      <main className='lessons__game__container'>
        {isPlaying ? (
          <Game />
        ) : (
          <button onClick={togglePlaying}>Start Game</button>
        )}
      </main>
    </>
  );
}

export default Lessons;
