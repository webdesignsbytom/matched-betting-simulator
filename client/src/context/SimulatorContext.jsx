import React, { useContext, useEffect } from 'react';
import { useState } from 'react';
// Context
import { UserContext } from './UserContext';

export const SimulatorContext = React.createContext();

const SimulatorContextProvider = ({ children }) => {
  const { user } = useContext(UserContext);

  const [currentlySelectedBookieBet, setCurrentlySelectedBookieBet] = useState({
    betType: '',
    match: '',
    teamName: [],
    price: 0,
  });
  console.log('currentlySelectedBookieBet', currentlySelectedBookieBet);

  const [simulatorPlayerData, setSimulatorPlayerData] = useState({
    userId: '',
    bank: '',
    betHistory: [],
    openBets: [],
  });

  const [simulatorBetData, setSimulatorBetData] = useState({
    team: '',
    type: '',
  });

  const makeBookieBet = (betType, teamName, match, price) => {
    console.log('betTyoe', betType);
    console.log('match', match);
    console.log('teamName', teamName);
    console.log('price', price);
    setCurrentlySelectedBookieBet({
      betType: betType,
      teamName: teamName,
      price: price,
    });
  };

  const submitBookieBet = (betData) => {
    console.log('aaaaaa', betData);
    console.log('qqq', currentlySelectedBookieBet);
  };

  console.log('simulatorBetData', simulatorBetData);
  console.log('simulatorPlayerData', simulatorPlayerData);

  useEffect(() => {
    if (user.email) {
      let userData = {
        userId: user.id,
        bank: user.simulatorAccount.bank,
        betHistory: user.simulatorAccount.betHistory,
      };
      setSimulatorPlayerData(userData);
    }
  }, [
    user.email,
    user.simulatorAccount.bank,
    user.simulatorAccount.betHistory,
    user.id,
  ]);

  return (
    <SimulatorContext.Provider
      value={{
        makeBookieBet,
        submitBookieBet,
        currentlySelectedBookieBet,
        simulatorPlayerData,
        simulatorBetData,
      }}
    >
      {children}
    </SimulatorContext.Provider>
  );
};

export default SimulatorContextProvider;
