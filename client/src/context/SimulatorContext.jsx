import React from 'react'
import { useState } from 'react';

export const SimulatorContext = React.createContext()


const SimulatorContextProvider = ({ children }) => {
  const [toggleBetslipOpen, setToggleBetslipOpen] = useState(false)  

    return (
        <SimulatorContext.Provider value={{ toggleBetslipOpen, setToggleBetslipOpen }}>
          {children}
        </SimulatorContext.Provider> 
      );
}

export default SimulatorContextProvider