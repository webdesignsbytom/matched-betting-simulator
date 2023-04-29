import React, { useContext } from "react";
// Context
import { UserContext } from "../../context/UserContext";
import { ToggleContext } from "../../context/ToggleContext";
import { SimulatorContext } from "../../context/SimulatorContext";
// Components
import UserBetslip from "./UserBetslip";
import TeachingInfo from "./TeachingInfo";

function UserBetArea() {
  const { user, setUser } = useContext(UserContext);
  const { betslipSimulatorOpen, toggleSimulatorBetSlip } = useContext(ToggleContext);
  const { simulatorPlayerData, simulatorBetData } = useContext(SimulatorContext)


  return (
    <section className="grid grid-rows-reg h-full">
      <div className="text-center grid gap-0 grid-flow-col justify-between px-2 py-1 border-b-2 border-black border-solid">
        <h3>User area</h3>
        <div>
          <span>Bank: £{simulatorPlayerData.bank}</span>
        </div>
        <button
          onClick={toggleSimulatorBetSlip}
          className="outline outline-2 outline-black rounded px-2 bg-red-200"
        >
          <h4>{!betslipSimulatorOpen ? <span>Open Betslip</span> : <span>Close Betslip</span>}</h4>
        </button>
      </div>

      <section>
        {betslipSimulatorOpen ? (
          <UserBetslip />
        ) : (
          <TeachingInfo />
        )}
      </section>
    </section>
  );
}

export default UserBetArea;
