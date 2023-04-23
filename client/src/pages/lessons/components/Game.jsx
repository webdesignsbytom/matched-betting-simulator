import React, { useContext, useEffect, useState } from 'react';
import BankingBar from './BankingBar';
import StageOne from './StageOne';
import StageTwo from './StageTwo';
import StageThree from './StageThree';
import StageFour from './StageFour';
import './style.css';
import { GameContext } from '../../../context/GameContext';
import StageFive from './StageFive';
import StageSix from './StageSix';
import RandomResults from './RandomResults';
import StageEight from './StageEight';
import BetTickets from './BetTickets';

function Game() {

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
useEffect(() => {
  }, []);

  return (
    <>
      <BankingBar />;
      <StageOne />
      {stage.stageTwoOn && <StageTwo />}
      {stage.stageThreeOn && <StageThree />}
      {stage.stageThreeOn && <BankingBar />}; 
      {stage.stageFourOn && <StageFour />}
      {stage.stageFourOn && <BetTickets />}
      {stage.stageFiveOn && <StageFive />}
      {stage.stageSixOn && <StageSix />}
      {stage.stageSevenOn && <RandomResults />}
      {stage.stageEightOn && <StageEight />}
    </>
  );
}

export default Game;
