import React from 'react';
// Pages
import BetFair from '../../pages/lessons/betfair/BetFair';
import BookieBetz from '../../pages/lessons/bookieBets/BookieBetz';

function Events() {
  return (
    <main className='mock__website__container'>
      <BookieBetz />
      <BetFair />
    </main>
  );
}

export default Events;
