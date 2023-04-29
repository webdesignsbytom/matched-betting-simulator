import React from "react";
import { useState } from "react";

export const ToggleContext = React.createContext();

const ToggleContextProvider = ({ children }) => {
  const [navigationOpen, setNavigationOpen] = useState(false);
  const [betslipSimulatorOpen, setBetslipSimulatorOpen] = useState(true);

  const toggleNavbar = () => {
    setNavigationOpen(!navigationOpen);
  };

  const toggleSimulatorBetSlip = () => {
    setBetslipSimulatorOpen(!betslipSimulatorOpen);
  };

  return (
    <ToggleContext.Provider
      value={{
        navigationOpen,
        betslipSimulatorOpen,
        toggleNavbar,
        toggleSimulatorBetSlip,
      }}
    >
      {children}
    </ToggleContext.Provider>
  );
};

export default ToggleContextProvider;
