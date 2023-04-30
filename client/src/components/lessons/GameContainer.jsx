import React, { useContext, useEffect } from "react";
// Context
import { GameContext } from '../../context/GameContext';
// Components
import BankingBar from "./BankingBar";
import StageOne from "./StageOne";
import StageTwo from "./StageTwo";
import StageThree from "./StageThree";
import StageFour from "./StageFour";
import StageFive from "./StageFive";
import StageSix from "./StageSix";
import RandomResults from "./RandomResults";
import StageEight from "./StageEight";
import BetTickets from "./BetTickets";

function GameContainer() {
  const { currentStage } = useContext(GameContext);

  return (
    <>
      <BankingBar />
      <StageOne />
      {currentStage.stageTwoOn && <StageTwo />}
      {/* 
      {stage.stageThreeOn && <StageThree />}
      {stage.stageThreeOn && <BankingBar />};
      {stage.stageFourOn && <StageFour />}
      {stage.stageFourOn && <BetTickets />}
      {stage.stageFiveOn && <StageFive />}
      {stage.stageSixOn && <StageSix />}
      {stage.stageSevenOn && <RandomResults />}
      {stage.stageEightOn && <StageEight />} */}
    </>
  );
}

export default GameContainer;
