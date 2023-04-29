import React, { useContext, useEffect } from 'react'
import { useState } from 'react';
// Context 
import { UserContext } from "./UserContext";

export const SimulatorContext = React.createContext()


const SimulatorContextProvider = ({ children }) => {
  const { user } = useContext(UserContext)

  const [simulatorPlayerData, setSimulatorPlayerData] = useState({
    userId: '',
    bank: '',
    betHistory: [],
    openBets: [],
  })

  const [simulatorBetData, setSimulatorBetData] = useState({
    team: '',
    type: '',
  })

  useEffect(() => {
    if(user.email) {
      let userData = { userId: user.id, bank: user.simulatorAccount.bank, betHistory: user.simulatorAccount.betHistory}
      setSimulatorPlayerData(userData)
    }
  }, [user.email, user.simulatorAccount.bank, user.simulatorAccount.betHistory, user.id])

    return (
        <SimulatorContext.Provider value={{ simulatorPlayerData, simulatorBetData }}>
          {children}
        </SimulatorContext.Provider> 
      );
}

export default SimulatorContextProvider