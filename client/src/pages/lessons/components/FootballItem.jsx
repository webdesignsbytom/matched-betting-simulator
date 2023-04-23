import React, { useContext } from 'react';
import { GameContext } from '../../../context/GameContext';

function FootballItem({ event, index }) {
  const {
    playerBank,
    setPlayerBank,
    betFairBank,
    setBetFairBank,
    bookieBetzBank,
    setBookieBetzBank,
    betHistory,
    setBetHistory,
    stage,
    setStage,
    bankToggle,
    setBankToggle,
    bookieDepositData,
    setBookieDepositData,
    exchangeDepositData,
    setExchangeDepositData,
    totalInPlayBank,
    setTotalInPlayBank,
    currentBookieBet,
    setCurrentBookieBet,
    currentExchangeBet,
    setCurrentExchangeBet,
    currentBookieBetData,
    setCurrentBookieBetData,
    currentExchangeBetData,
    setCurrentExchangeBetData,
  } = useContext(GameContext);

  const betTypes = event.betTypes;
  const bookieOdds = event.bookieOdds;
  const teams = event.competitors;

  const placeBet = (odds) => {
    console.log('bet placing', odds);
    
  };

  const handleChange = (event) => {
    console.log(event.target.value);
    const value = event.target.value;
    const num = Number(value);
    console.log('num ', num);
    
    setCurrentBookieBetData({
      ...currentBookieBetData,
      betStake: value,
    });
    console.log('current bet XXXXX', currentBookieBetData);
  };
  
  return (
    <li key={index}>
      <div> {event.title}</div>

      {teams.map((team, index) => {
        return (
          <div key={index} className='betData__container'>
            <h4>{team}</h4>

            <ul>
              {betTypes.map((betType, index) => {
                return (
                  <li className='betType' key={index}>
                    {betType}
                  </li>
                );
              })}
            </ul>

            <ul>
              {bookieOdds[index].map((odd, index) => {
                return (
                  <li key={index} className='odds__list__item'>
                    <span>{odd}</span>
                    <button onClick={placeBet}>Bet</button>
                    <input type='number' onChange={handleChange} />
                  </li>
                );
              })}
            </ul>
          </div>
        );
      })}
    </li>
  );
}

export default FootballItem;
