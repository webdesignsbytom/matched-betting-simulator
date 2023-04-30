import React, { useContext } from "react";

import { GameContext } from "../../context/GameContext";
function StageThree() {
  const {
    stage,
    betFairBank,
    setBetFairBank,
    bookieBetzBank,
    setBookieBetzBank,
    bookieDepositData,
    setBookieDepositData,
    exchangeDepositData,
    setExchangeDepositData,
    playerBank,
    setPlayerBank,
    bankToggle,
    setBankToggle,
  } = useContext(GameContext);

  const handleExchangeChange = (event) => {
    console.log("handleChange", event.target.value);
    console.log("handleChange", event.target.name);
    const { name, value } = event.target;

    setExchangeDepositData(Number(value));
  };

  const submitExchangeDeposit = (event) => {
    event.preventDefault();
    console.log("submiting stuff");
    console.log("exchangeDepositData", exchangeDepositData);

    if (exchangeDepositData > playerBank) {
      return alert("Sorry not enough funds to continue");
    }

    setBetFairBank((current) => current + exchangeDepositData);
    setPlayerBank((current) => current - exchangeDepositData);
  };

  console.log("exchangeDepositData", exchangeDepositData);
  return (
    <section className="outline outline-4 outline-black rounded grid bg-[#008080] my-4">
      <article className="p-2 pb-10">
        <div className="grid grid-flow-col gap-4 w-fit mb-2">
          <h3 className="font-semibold">Stage Three: </h3>
          <h4>
            Join A Bet Exchange website {" "}
            <a href="https:www.betfair.com" target="_blank" rel="noreferrer">
              <span className='text-yellow-400 font-semibold'>BetFair.com</span>
            </a>
          </h4>
        </div>

        <div className="my-2">
          <p>The exchange is where you cover the bet you made at the bookies. If you bet for a team to win at the bookies. You now accept a bet from someone else where you get a return if the result is anything but the team you bet on at the bookies winning. </p>
          <p>At an exchange you essentially become an online bookie yourself and except bets from a pool of available money.</p>
          <p>
            You really want to check out BetFair and there are almost no real
            exchanges so im happy to use a real example. This is a site where
            you can accept lay bets from other players around the country. Where
            they would make a bet with you for one horse to win and your
            conditions to win would be any horse but that one winning. You need
            the money to cover your bets here. So depost £500 just to be safe
          </p>
        </div>

        <section className="grid">
          <div className="grid grid-flow-col w-fit">
            <input
              type="number"
              name="exchangeDeposit"
              id="exchangeDeposit"
              className="max-w-[150px] p-1"
              onChange={handleExchangeChange}
              placeholder="£500"
            />
            <div>
              <button
                className="outline-black outline outline-2 bg-orange-400 p-1"
                onClick={submitExchangeDeposit}
              >
                DEPOSIT
              </button>
            </div>
          </div>
        </section>
      </article>
    </section>
  );
}

export default StageThree;
