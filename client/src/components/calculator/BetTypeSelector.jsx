import React from "react";

function BetTypeSelector({ betType, handleBetOptionChange }) {
  return (
    <div>
      <article className="grid grid-flow-col justify-between px-2">
        <h2 className="font-semibold 2xl:text-xl">Select Bet Type:</h2>
        <div>
          <span className="grid md:grid-flow-col">
            Currently Selected: <strong> {betType}</strong>
          </span>
        </div>
      </article>
      <form className="p-2 grid grid-cols-2 md:grid-cols-4 justify-between bg-[#ffa500] pr-6">
        <div>
          <label htmlFor="qualifyingBet">Qualifying Bet</label>
          <input
            className="ml-4"
            type="radio"
            name="betType"
            value="Qualifying Bet"
            id="qualifyingBet"
            checked={betType === "qualifyingBet"}
            onChange={handleBetOptionChange}
          />
        </div>
        <div>
          <label htmlFor="freeBet">Free Bet (SNR)</label>
          <input
            className="ml-4"
            type="radio"
            name="betType"
            value="Free Bet"
            id="freeBet"
            checked={betType === "freeBet"}
            onChange={handleBetOptionChange}
          />
        </div>
        <div>
          <label htmlFor="freeBetSR">Free Bet (SR)</label>
          <input
            className="ml-4"
            type="radio"
            name="betType"
            value="Free Bet SR"
            id="freeBetSR"
            checked={betType === "freeBetSR"}
            onChange={handleBetOptionChange}
          />
        </div>
        <div>
          <label htmlFor="refundBet">Refund Bet</label>
          <input
            className="ml-4"
            type="radio"
            name="betType"
            value="Refund Bet"
            id="refundBet"
            checked={betType === "refundBet"}
            onChange={handleBetOptionChange}
          />
        </div>
      </form>
    </div>
  );
}

export default BetTypeSelector;
