import React, { useState } from 'react';
import { useEffect } from 'react';
import { betSampleData, betSampleResultsData } from '../../utils/data/BetData';
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
} from './BetCalculations';

import './style.css';

function Calculator() {
  const [betType, setBetType] = useState('Qualifying Bet');
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
    if (betType === 'Qualifying Bet') {
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

    if (betType === 'Free Bet') {

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

    if (betType === 'Free Bet SR') {

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

    if (betType === 'Refund Bet') {
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
    <>
      <article className='calculator__main__container'>
        <section className='bet__type__container'>
          <h3>Select Bet Type</h3>
          <form className='calculator__form'>
            <label htmlFor='qualifyingBet'>
              Qualifying Bet
              <input
                type='radio'
                name='betType'
                value='Qualifying Bet'
                id='qualifyingBet'
                checked={betType === 'qualifyingBet'}
                onChange={handleBetOptionChange}
              />
            </label>
            <label htmlFor='freeBet'>
              Free Bet (SNR)
              <input
                type='radio'
                name='betType'
                value='Free Bet'
                id='freeBet'
                checked={betType === 'freeBet'}
                onChange={handleBetOptionChange}
              />
            </label>
            <label htmlFor='freeBetSR'>
              Free Bet (SR)
              <input
                type='radio'
                name='betType'
                value='Free Bet SR'
                id='freeBetSR'
                checked={betType === 'freeBetSR'}
                onChange={handleBetOptionChange}
              />
            </label>
            <label htmlFor='refundBet'>
              Refund Bet
              <input
                type='radio'
                name='betType'
                value='Refund Bet'
                id='refundBet'
                checked={betType === 'refundBet'}
                onChange={handleBetOptionChange}
              />
            </label>
          </form>
          <p>
            Selected Bet Type: <strong>{betType}</strong>
          </p>
        </section>

        {/* Work done here */}
        <section className='calculator__inputs'>
          <div className='backbet__container'>
            <label htmlFor='backBetStake'>
              Back Bet Stake:
              <input
                type='number'
                id='backBetStake'
                name='backBetStake'
                onChange={handleBetData}
              />
            </label>
            <label htmlFor='backBetOdds'>
              Back Bet odds:
              <input
                type='number'
                id='backBetOdds'
                name='backBetOdds'
                onChange={handleBetData}
              />
            </label>
            <label htmlFor='bookiecommision'>
              Bookie commision:
              <input
                type='number'
                id='bookiecommision'
                name='bookiecommision'
                placeholder='0'
                onChange={handleBetData}
              />
              %
            </label>
          </div>

          <div className='laybet__container'>
            <label htmlFor='layBetOdds'>Lay Bet odds:</label>
            <input
              type='number'
              id='layBetOdds'
              name='layBetOdds'
              onChange={handleBetData}
            />

            <label htmlFor='exchangecommision'>
              Exchange commision:
              <input
                type='number'
                id='exchangecommision'
                name='exchangecommision'
                placeholder='5'
                onChange={handleBetData}
              />
              %
            </label>
          </div>

          <div className='laystake__container'>
            <h3>Set your lay stake to £{layStake}</h3>
            <span>Your liability will be {liability}</span>
          </div>
        </section>

        {/* results 
          [
            [ ] [ B ] [ E ] [ P ]
            [BW] [B+] [L-] [£P]
            [EW] [B-] [L+] [£P]
          ]
        */}

        <section className='results__container'>
          <table className='results__table'>
            <thead>
              <tr className='table__row'>
                <th className='ignore'></th>
                <th style={{backgroundColor: "lightBlue"}}>Bookie</th>
                <th style={{backgroundColor: "#e24343"}}>Exchange</th>
                <th style={{backgroundColor: "pink"}}>Total Profit</th>
              </tr>
            </thead>
            <tbody>
              <tr className='table__row'>
                <td style={{backgroundColor: "lightBlue"}}>Bookie Wins</td>
                <td style={{backgroundColor: "lightBlue"}}> {bookieResults.bookieResults}</td>
                <td style={{backgroundColor: "lightBlue"}}> {bookieResults.exchangeResults}</td>
                <td style={{backgroundColor: "pink"}}> £ {bookieResults.totalProfit}</td>
              </tr>
              <tr className='table__row'>
                <td style={{backgroundColor: "#e24343"}}>Exchange Wins</td>
                <td style={{backgroundColor: "#e24343"}}> {exchangeResults.bookieResults}</td>
                <td style={{backgroundColor: "#e24343"}}> {exchangeResults.exchangeResults}</td>
                <td style={{backgroundColor: "pink"}}> £ {exchangeResults.totalProfit}</td>
              </tr>
            </tbody>
          </table>
        </section>
      </article>
    </>
  );
}

export default Calculator;
