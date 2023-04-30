import React, { useContext } from "react";
import { GameContext } from "../../context/GameContext";

function BetTickets() {
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
    currentBookieBet,
    setCurrentBookieBet,
    currentExchangeBet,
    setCurrentExchangeBet,
  } = useContext(GameContext);

  return (
    <section className="outline outline-4 outline-black rounded grid bg-[#008080] my-4">
      <article className="p-2 pb-10">
        <div>
          <h6 className='font-semibold'>Current Bets: (total cash on the table) = £{totalInPlayBank}</h6>
        </div>
        <section className='grid grid-flow-col outline outline-2 outline-black rounded p-2 my-2'>
          <div className="">
            <h3>Bookie</h3>
          </div>
          <div className="">
            <h3>Exchange</h3>
          </div>
        </section>
      </article>
    </section>
  );
}

export default BetTickets;
