import React, { useContext } from 'react';
// Context
import { GameContext } from '../../context/GameContext';
// Components
import BankingBar from './BankingBar';
import StageOne from './StageOne';
import StageTwo from './StageTwo';
import StageThree from './StageThree';
import StageFour from './StageFour';
import StageFive from './StageFive';
import StageSix from './StageSix';
import StageSeven from './StageSeven';
import StageEight from './StageEight';
import BetTickets from './BetTickets';

function GameContainer() {
  const { currentStage } = useContext(GameContext);

  return (
    <div>
      <BankingBar />
      <StageOne />
      {currentStage.stageTwoOn && <StageTwo />}
      {currentStage.stageThreeOn && (
        <>
          <BankingBar />
          <StageThree />
        </>
      )}
      {currentStage.stageFourOn && (
        <>
          <BankingBar />
          <StageFour />
          <BetTickets />
        </>
      )}
      {currentStage.stageFiveOn && (
        <>
          <BankingBar />
          <StageFive />
        </>
      )}
      {currentStage.stageSixOn && (
        <>
          <BankingBar />
          <StageSix />
        </>
      )}
      {currentStage.stageSevenOn && (
        <>
          <StageSeven />
        </>
      )}
      {currentStage.stageEightOn && (
        <>
          <StageEight />
          <BankingBar />
        </>
      )}
    </div>
  );
}

export default GameContainer;
