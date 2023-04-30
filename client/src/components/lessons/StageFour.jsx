import React from 'react';
import Events from './Events';
import randomBookieOddsGenerator from './OddsGenerator';
import { footballGenerator, racingGenerator } from './EventGenerator';

function StageFour() {
  return (
    <article className='stage__container'>
      <div className='stage__title__container'>
        <h3>Stage Four: </h3>
        <h4>Find a event to make your bet on</h4>
      </div>

      <div className='stage__info__container'>
        <p>
          You will occasionally see offers for all sorts of sports, but the
          safest, easiest and most likely to have decent odds events are:
          Football and Horse Racing. Racing is great because you can have the
          event over in 5 minutes. Football will however have tighter odds
          usually.
        </p>
        <span>Select and sport from the list and find an event to bet on.</span>
        <span>
          This is for your Qualifying bet. Where you cancel out money one or
          lost with your bets to come as close to even as possible. The best way
          to do this is with low odds and very close to each other
        </span>
        <span>
          Find the same event and bet option with the closest odds. i.e bookie:2
          exchange: 2.1
        </span>
        <span>
          Check the amount of money in the pot for you to accept as a bet.
        </span>
      </div>

      <Events />
    </article>
  );
}

export default StageFour;
