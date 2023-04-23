import React from 'react';

function RacingExchangeItem({ event, index }) {
  console.log('event', event, index);
  const betTypes = event.betTypes;
  const exchangeOdds = event.exchangeOdds;
  const teams = event.competitors;
  console.log(betTypes, exchangeOdds, teams);

  const placeBet = (odds) => {
    console.log('bet placing', odds);
  };
  const handleChange = (event) => {
    console.log(event.target.value);
  };
  return (
    <li key={index} className='racing__event__container'>
      <div className='race__title'>{event.title}</div>

      <div className='second__container'>
        <div className='horse__container'>
          {teams.map((team, index) => {
            return <h4>{team}</h4>;
          })}
        </div>

        <ul>
          {exchangeOdds.map((odd, index) => {
            return (
              <>
                <li key={index} className='odds_cont'>
                  <span>{odd}</span>
                  <button onClick={placeBet}>Bet</button>
                  <input type="number" onChange={handleChange} />
                </li>
              </>
            );
          })}
        </ul>
      </div>
    </li>
  );
}

export default RacingExchangeItem;
