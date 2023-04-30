import React, { useContext } from 'react';

import { GameContext } from '../../context/GameContext';
function StageThree() {
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

  const handleExchangeChange = (event) => {
    console.log('handleChange', event.target.value);
    console.log('handleChange', event.target.name);
    const { name, value } = event.target;

    setExchangeDepositData(Number(value));
  };

  const submitExchangeDeposit = (event) => {
    event.preventDefault();
    console.log('submiting stuff');
    console.log('exchangeDepositData', exchangeDepositData);

    if (exchangeDepositData > playerBank) {
      return alert('Sorry not enough funds to continue');
    }

    setBetFairBank((current) => current + exchangeDepositData)
    setPlayerBank((current) => current - exchangeDepositData)
  };

  console.log('exchangeDepositData', exchangeDepositData);
  return (
    <article className='stage__container'>
      <div className='stage__title__container'>
        <h3>Stage Three: </h3>
        <h4>Join the Exchange website - BetFair.com</h4>
      </div>

      <div className='stage__info__container'>
        <p>
          You really want to check out BetFair and there are almost no real
          exchanges so im happy to use a real example. This is a site where you
          can accept lay bets from other players around the country. Where they
          would make a bet with you for one horse to win and your conditions to
          win would be any horse but that one winning. You need the money to
          cover your bets here. So depost £500 just to be safe
        </p>
      </div>

      <section className='stage__example__container'>
        <input
          type='number'
          name='betFairDeposit'
          onChange={handleExchangeChange}
        />
        <button onClick={submitExchangeDeposit}>DEPOSIT</button>
      </section>
    </article>
  );
}

export default StageThree;
