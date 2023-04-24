import React from 'react';
import { Link } from 'react-router-dom';

function HowToPlay() {
  return (
    <section className='outline outline-4 outline-black rounded text-center'>
      <h3 className='text-xl'>How to play?</h3>
      <p className='pb-2'>
        This tutorial will teach you how to make bets, use the calculator and
        compare odds to find the best bets. Using our sandbox betting accounts
        you can following the lessons on screen. Once you master these lessons,
        you can try your hand on the{' '}
        <Link to='/simulator'>
          <span className='text-hyperlink-blue'>Bet Simulator {' '}</span>
        </Link>
        to use real world sports odds to make practice bets.
      </p>
    </section>
  );
}

export default HowToPlay;
