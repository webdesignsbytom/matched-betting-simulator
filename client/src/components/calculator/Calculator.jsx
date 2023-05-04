import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// Utils
import { betSampleData, betSampleResultsData } from "../../utils/data/BetData";
import {
  calculateQualifyingBetStake,
  calculateFreeSnrBetStake,
  calculateFreeSrBetStake,
  calculateRefundBetStake,
  bookieQualifyingResultData,
  exchangeQualifyingResultData,
  bookieSnrResultData,
  exchangeSnrResultData,
  bookieStakeReturnedResultData,
  exchangeStakeReturnedResultData,
} from "./BetCalculations";
import BetTypeSelector from "./BetTypeSelector";

function Calculator() {
  const [betType, setBetType] = useState("Qualifying Bet");
  const [betData, setBetData] = useState(betSampleData);
  const [layStake, setLayStake] = useState(0.0);
  const [liability, setLiablilty] = useState(0.0);
  const [bookieResults, setBookieResults] = useState(betSampleResultsData);
  const [exchangeResults, setExchangeResults] = useState(betSampleResultsData);

  useEffect(() => {
    setLayStake(0);
    setLiablilty(0);
    setBookieResults(betSampleResultsData);
    setExchangeResults(betSampleResultsData);
    if (betType === "Qualifying Bet") {
      const layStakeResult = calculateQualifyingBetStake(betData);
      const bookieBetResultsData = bookieQualifyingResultData(
        betData,
        layStake,
        liability
      );
      const exchangeBetResultsData = exchangeQualifyingResultData(
        betData,
        layStake,
        liability
      );

      setLayStake(layStakeResult.layBetData);
      setLiablilty(layStakeResult.liabilityRequired);
      setBookieResults(bookieBetResultsData);
      setExchangeResults(exchangeBetResultsData);
    }

    if (betType === "Free Bet") {
      const layStakeResult = calculateFreeSnrBetStake(betData);
      const bookieBetResultsData = bookieSnrResultData(
        betData,
        layStake,
        liability
      );
      const exchangeBetResultsData = exchangeSnrResultData(
        betData,
        layStake,
        liability
      );

      setLayStake(layStakeResult.layBetData);
      setLiablilty(layStakeResult.liabilityRequired);
      setBookieResults(bookieBetResultsData);
      setExchangeResults(exchangeBetResultsData);
    }

    if (betType === "Free Bet SR") {
      const layStakeResult = calculateFreeSrBetStake(betData);

      const bookieBetResultsData = bookieStakeReturnedResultData(
        betData,
        layStake,
        liability
      );
      const exchangeBetResultsData = exchangeStakeReturnedResultData(
        betData,
        layStake,
        liability
      );
      setLayStake(layStakeResult.layBetData);
      setLiablilty(layStakeResult.liabilityRequired);
      setBookieResults(bookieBetResultsData);
      setExchangeResults(exchangeBetResultsData);
    }

    if (betType === "Refund Bet") {
      const layStakeResult = calculateRefundBetStake(betData);
      setLayStake(layStakeResult);
    }
  }, [betType, betData]);

  const handleBetOptionChange = (event) => {
    const { name, value } = event.target;
    setBetType(value);
  };

  const handleBetData = (event) => {
    const { name, value } = event.target;

    setBetData({
      ...betData,
      [name]: value,
    });
  };

  return (
    <section className="grid bg-[#008080] w-full lg:h-fit">
      <main className="grid">
        <section className="">
          <BetTypeSelector
            betType={betType}
            handleBetOptionChange={handleBetOptionChange}
          />

          <article className="p-2 text-base leading-5">
            <p>
              Be sure to have the correct setting selected. Double check any
              bets and odds. Do help keep track of multiple bets, you can
              download the free print out{" "}
              <Link>
                <span>here</span>
              </Link>
            </p>
          </article>
        </section>

        {/* Calculator */}
        <section className="grid bg-[#ffa500]">
          <section className="">
            <div className="pl-2">
              <h4 className="font-semibold">Bookie Bets</h4>
            </div>

            <section className="grid bg-blue-300 px-2">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="grid">
                  <label htmlFor="backBetStake" className="">
                    Back Bet Stake:
                  </label>
                  <input
                    type="number"
                    id="backBetStake"
                    name="backBetStake"
                    onChange={handleBetData}
                    className="outline-2 outline-black outline"
                  />
                </div>

                <div className="grid">
                  <label htmlFor="backBetOdds" className="">
                    Back Bet odds:
                  </label>
                  <input
                    type="number"
                    id="backBetOdds"
                    name="backBetOdds"
                    onChange={handleBetData}
                    className="outline-2 outline-black outline"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 my-2">
                <div className='hidden md:grid'></div>
                <div className="grid grid-flow-col">
                  <label htmlFor="bookiecommision" className="">
                    Bookie commision:
                  </label>
                  <div className="grid justify-end">
                    <div className="grid grid-flow-col w-fit">
                      <input
                        type="number"
                        id="bookiecommision"
                        name="bookiecommision"
                        placeholder="0"
                        className="outline-2 outline-black outline w-[100px]"
                        onChange={handleBetData}
                      />
                      <span className="pl-2 font-semibold">%</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </section>

          <section className="grid bg-red-300 pb-2">
            <div className="pl-2 bg-[#ffa500]">
              <h4 className="font-semibold">Exchange Bets</h4>
            </div>
            <section className="grid md:grid-cols-2 gap-6 px-2">
              <div className="grid">
                <label htmlFor="layBetOdds" className="">
                  Lay Bet odds:
                </label>
                <input
                  type="number"
                  id="layBetOdds"
                  name="layBetOdds"
                  className="outline-2 outline-black outline"
                  onChange={handleBetData}
                />
              </div>

              <div className="grid">
                <label htmlFor="exchangecommision" className="">
                  Exchange commision:
                </label>
                <div className='grid justify-end'>
                <div className='grid grid-flow-col w-fit'>
                  <input
                    type="number"
                    id="exchangecommision"
                    name="exchangecommision"
                    placeholder="5"
                    className="outline-2 outline-black outline w-[100px]"
                    onChange={handleBetData}
                  />
                  <span className="pl-2 font-semibold">%</span>
                    </div>
                </div>
              </div>
            </section>
          </section>

          {/* Results */}
          <section className="grid bg-[#008080] p-1">
            <article className="grid md:grid-cols-2 pl-2">
              <div className="">
                <h3>
                  Set your lay stake to:{" "}
                  <span className="bg-white px-6">£{layStake.toFixed(2)}</span>
                </h3>
              </div>
              <div>
                <p>
                  Your liability will be{" "}
                  <span className="bg-white px-6">£{liability.toFixed(2)}</span>
                </p>
              </div>
            </article>
          </section>
        </section>

        {/* results table
          [
            [ ] [ B ] [ E ] [ P ]
            [BW] [B+] [L-] [£P]
            [EW] [B-] [L+] [£P]
          ]
        */}

        <section className="pt-4 grid ">
          <section className='w-full md:pl-4 bg-red-300'>
            <table className="">
              <thead>
                <tr className="">
                  <th className=""></th>
                  <th style={{ backgroundColor: "lightBlue" }} className="p-2">
                    Bookie
                  </th>
                  <th style={{ backgroundColor: "#e24343" }} className="p-2">
                    Exchange
                  </th>
                  <th style={{ backgroundColor: "pink" }} className="p-2">
                    Total Profit
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="">
                  <td style={{ backgroundColor: "lightBlue" }} className="p-2">
                    Bookie Wins
                  </td>
                  <td style={{ backgroundColor: "lightBlue" }} className="p-2">
                    {" "}
                    {bookieResults.bookieResults.toFixed(2)}
                  </td>
                  <td style={{ backgroundColor: "lightBlue" }} className="p-2">
                    {" "}
                    {bookieResults.exchangeResults.toFixed(2)}
                  </td>
                  <td style={{ backgroundColor: "pink" }} className="p-2">
                    {" "}
                    £ {bookieResults.totalProfit.toFixed(2)}
                  </td>
                </tr>
                <tr className="table__row">
                  <td style={{ backgroundColor: "#e24343" }} className="p-2">
                    Exchange Wins
                  </td>
                  <td style={{ backgroundColor: "#e24343" }} className="p-2">
                    {" "}
                    {exchangeResults.bookieResults.toFixed(2)}
                  </td>
                  <td style={{ backgroundColor: "#e24343" }} className="p-2">
                    {" "}
                    {exchangeResults.exchangeResults.toFixed(2)}
                  </td>
                  <td style={{ backgroundColor: "pink" }} className="p-2">
                    {" "}
                    £ {exchangeResults.totalProfit.toFixed(2)}
                  </td>
                </tr>
              </tbody>
            </table>
          </section>

          {/* Explained more */}
          <section className='bg-yellow-400 px-2'>
            <p className='text-sm text-center mt-8'>
              Remember the qualifying bet will lose a small amount due to the
              exchange commision. However you will make this back on the free
              bet. Just remember to calculate the correct overall winnings.
            </p>
          </section>
        </section>
      </main>
    </section>
  );
}

export default Calculator;
