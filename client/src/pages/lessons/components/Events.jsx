import React from 'react';
import BetFair from '../pages/betfair/BetFair';
import BookieBetz from '../pages/bookieBets/BookieBetz';

function Events() {
  return (
    <main className='mock__website__container'>
      <BookieBetz />
      <BetFair />
    </main>
  );
}

export default Events;
