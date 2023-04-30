import React from "react";
import { useState } from "react";

import {
  sampleBookieBetTicket,
  sampleExchangeBetTicket,
} from "../utils/data/BetData";

export const GameContext = React.createContext();

const GameContextProvider = ({ children }) => {
  // player
  const [playerBank, setPlayerBank] = useState(1000);
  const [betHistory, setBetHistory] = useState([]);
  const [totalInPlayBank, setTotalInPlayBank] = useState(0.0);
  const [bankToggle, setBankToggle] = useState(false);
  // bookie
  const [bookieBetzBank, setBookieBetzBank] = useState(0.0);
  const [bookieDepositData, setBookieDepositData] = useState(0);
  const [currentBookieBet, setCurrentBookieBet] = useState({});
  const [currentBookieBetData, setCurrentBookieBetData] = useState(
    sampleBookieBetTicket
  );
  // exchange
  const [betFairBank, setBetFairBank] = useState(0.0);
  const [exchangeDepositData, setExchangeDepositData] = useState(0);
  const [currentExchangeBet, setCurrentExchangeBet] = useState({});
  const [currentExchangeBetData, setCurrentExchangeBetData] = useState(
    sampleExchangeBetTicket
  );
  // game
  const [currentStage, setCurrentStage] = useState({
    stageOneOn: false,
    stageTwoOn: false,
    stageThreeOn: false,
    stageFourOn: false,
    stageFiveOn: false,
    stageSixOn: false,
    stageSevenOn: false,
    stageEightOn: false,
  });

  const startNextStage = () => {
    console.log('starting next stage');
  }

  return (
    <GameContext.Provider
      value={{
        // Functions
        startNextStage,
        // States
        playerBank,
        setPlayerBank,
        betFairBank,
        setBetFairBank,
        bookieBetzBank,
        setBookieBetzBank,
        betHistory,
        setBetHistory,
        currentStage,
        setCurrentStage,
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
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export default GameContextProvider;
