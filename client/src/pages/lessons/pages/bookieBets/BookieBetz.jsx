import React, { useContext } from 'react';
import './style.css';

import { GameContext } from '../../../../context/GameContext';
import { useState } from 'react';

import {
  footballGenerator,
  horseRaceGenerator,
} from '../../components/EventGenerator';
import FootballItem from '../../components/FootballItem';
import RacingItem from '../../components/RacingItem';

function BookieBetz() {
  const newFootballEvents = footballGenerator;
  const newRaceEvents = horseRaceGenerator;
  console.log('newFootballEvents', newFootballEvents);
  console.log('newRaceEvents', newRaceEvents);
  const [sportSelected, setSportSelected] = useState(false);
  const [footballSelected, setFootballSelected] = useState(false);
  const [racingSelected, setRacingSelected] = useState(false);

  const {
    stage,
    betFairBank,
    setBetFairBank,
    bookieBetzBank,
    setBookieBetzBank,
    bookieDepositData,
    setBookieDepositData,
    exchangeDepositData,
    setExchangeDepositData,
    playerBank,
    setPlayerBank,
    bankToggle,
    setBankToggle,
    generatedFootballEvents,
    setGeneratedFootballEvents,
    generatedRacingEvents,
    setGeneratedRacingEvents,
  } = useContext(GameContext);

  const findFootball = () => {
    console.log('footballSelected');
    setSportSelected(true);
    setFootballSelected(true);
  };

  const findRacing = () => {
    console.log('footballSelected');
    setSportSelected(true);
    setRacingSelected(true);
  };

  const goBackFunction = () => {
    setSportSelected(false);
    setRacingSelected(false);
    setFootballSelected(false);
  };

  return (
    <section id='bookie__container'>
      <div className='bookie__header'>
        <h2>BookieBetz</h2>
        <span>In Account £{bookieBetzBank}</span>
      </div>

      {!sportSelected && (
        <div className='bookie__sports__selection'>
          <h3 onClick={findFootball}>FootBall</h3>
          <h3 onClick={findRacing}>Horse Racing</h3>
        </div>
      )}

      {footballSelected && (
        <div>
          <h3>FootBall</h3>

          <div className='sporting__event__container'>
            <div>
              <ul>
                {newFootballEvents.map((event, index) => {
                  return <FootballItem event={event} key={index} />;
                })}
              </ul>
            </div>
          </div>

          <button onClick={goBackFunction}>Go Back</button>
        </div>
      )}

      {racingSelected && (
        <div>
          <h3>Horse Racing</h3>
          <div className='sporting__event__container'>
            <div>
              <ul>
                {newRaceEvents.map((event, index) => {
                  return <RacingItem event={event} key={index} />;
                })}
              </ul>
            </div>
          </div>
          <button onClick={goBackFunction}>Go Back</button>
        </div>
      )}
    </section>
  );
}

export default BookieBetz;
