import React, { useContext } from 'react';
import { GameContext } from '../../../context/GameContext';

function BetTickets() {
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
  } = useContext(GameContext);

  return (
    <div className='stage__container'>
      <div className='inplay__bets__container'></div>
      Current Bets - total cash on the table = {totalInPlayBank}
      <div className='bookie__inplay__bets'>
        <h3>Bookie</h3>
      </div>
      <div className='exchange__inplay__bets'>
        <h3>Exchange</h3>
      </div>
    </div>
  );
}

export default BetTickets;
