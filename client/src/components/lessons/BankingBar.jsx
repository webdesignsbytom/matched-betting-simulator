import React, { useContext } from "react";
// Context
import { GameContext } from "../../context/GameContext";

function BankingBar() {
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
  } = useContext(GameContext);

  console.log("playerBank", playerBank);

  return (
    <section className="grid md:grid-cols-4 bg-white p-2">
      <section className="">
        <h3>Player Bank £{playerBank}</h3>
      </section>
      <section className="">
        <h3>BookieBetz Bank £{bookieBetzBank}</h3>
      </section>

      <section className="">
        <h3>BetFair (ex) Bank £{betFairBank}</h3>
      </section>

      <section className="">
        <h3>Inplay Money £{totalInPlayBank}</h3>
      </section>
    </section>
  );
}

export default BankingBar;
