import React, { useState } from 'react';
import Navbar from '../../components/nav/Navbar';
import Game from './components/Game';
import HowToPlay from './components/HowToPlay';
import './style.css';

function Lessons() {
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlaying = () => {
    setIsPlaying(!isPlaying);
  };
  return (
    <div className='min-h-screen grid grid-rows-reg bg-yellow-400'>
      <Navbar />

      <section>
        <section className='text-center w-full py-1'>
          <h1 className='text-2xl font-semibold'>Learn How To Play</h1>
          <h2>With our exclusive interactive game!</h2>
        </section>

        <section className='px-6'>
          <HowToPlay />
        </section>

        <main className='outline outline-4 outline-black rounded grid mx-4 mt-6 bg-[#008080]'>
          {isPlaying ? (
            <Game />
          ) : (
            <button onClick={togglePlaying}>Start Game</button>
          )}
        </main>
      </section>
    </div>
  );
}

export default Lessons;
