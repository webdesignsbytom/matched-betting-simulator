import React, { useContext } from 'react';
import { GameContext } from '../../context/GameContext';

function StageTwo() {
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
  } = useContext(GameContext);

  const handleBookieChange = (event) => {
    console.log('handleChange', event.target.value);
    console.log('handleChange', event.target.name);
    const { name, value } = event.target;

    setBookieDepositData(Number(value));
  };
  console.log('bookieDepositData', bookieDepositData);

  const submitBookieDeposit = (event) => {
    event.preventDefault();
    console.log('submit');

    if (bookieDepositData > playerBank) {
      return alert('Sorry not enough funds to continue')
    }
    setPlayerBank((current) => current - bookieDepositData);
    setBookieBetzBank((current) => current + bookieDepositData);

  };


  return (
    <article className='stage__container'>
      <div className='stage__title__container'>
        <h3>Stage Two: </h3>
        <h4>Join the bookie</h4>
      </div>

      <div className='stage__info__container'>
        <p>
          So you have found a free bet offer. BookieBetz are offering bet £10
          and get a £10 free bet. Sign up being sure to check the rules, terms,
          countries, and withdrawal limits/minimums. Check any boxes required.
          Lets deposit £10 and move on the next step for now.{' '}
        </p>
      </div>

      <section className='stage__example__container'>
        <input
          type='number'
          name='betDataDeposit'
          onChange={handleBookieChange}
        />
        <button onClick={submitBookieDeposit}>DEPOSIT</button>
      </section>
    </article>
  );
}

export default StageTwo;
