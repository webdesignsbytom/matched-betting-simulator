import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
// Utils
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


function SmallCalculator() {
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
    <section className='grid bg-[#008080] w-fit h-min'>
      <main className='grid h-min'>
        <section className='h-min'>
          <article className='p-1 flex items-center justify-between'>
            <h2 className='font-semibold'>Select Bet Type:</h2>
            <p className=''>
              Selected Bet Type: <strong>{betType}</strong>
            </p>
          </article>
          <form className='p-1 bg-[#ffa500]'>
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

          <article className='py-1 px-4 h-fit'>
            <p className='leading-5'>
              Be sure to have the correct setting selected. Double check any
              bets and odds. Do help keep track of multiple bets, you can
              download the free print out{' '}
              <Link>
                <span>here</span>
              </Link>
            </p>
          </article>
        </section>

        {/* Calculator */}
        <section className='grid h-min pt-1 bg-[#ffa500]'>
          <section className='px-4'>
            <div className=''>
              <h4 className='font-semibold'>Bookie Bets</h4>
            </div>
            <section className='grid grid-cols-3 gap-4'>
              <div className='grid h-fit'>
                <label htmlFor='backBetStake' className=''>
                  Back Bet Stake:
                </label>
                <input
                  type='number'
                  id='backBetStake'
                  name='backBetStake'
                  onChange={handleBetData}
                  className='p-1'
                />
              </div>

              <div className='grid h-fit'>
                <label htmlFor='backBetOdds' className=''>
                  Back Bet odds:
                </label>
                <input
                  type='number'
                  id='backBetOdds'
                  name='backBetOdds'
                  onChange={handleBetData}
                  className='p-1'
                />
              </div>

              <div className='grid h-fit items-center'>
                <label htmlFor='bookiecommision' className=''>
                  Bookie commision:
                </label>
                <div className='flex items-center'>
                  <input
                    type='number'
                    id='bookiecommision'
                    name='bookiecommision'
                    placeholder='0'
                    className='w-[50px] p-1'
                    onChange={handleBetData}
                  />
                  <span className='pl-2 font-semibold'>%</span>
                </div>
              </div>
            </section>
          </section>

          <section className='grid h-min pb-1'>
            <div className='px-4'>
              <h4 className='font-semibold'>Exchange Bets</h4>
            </div>
            <section className='grid grid-cols-2 gap-4 px-4'>
              <div className='grid h-fit'>
                <label htmlFor='layBetOdds' className='pr-2'>
                  Lay Bet odds:
                </label>
                <input
                  type='number'
                  id='layBetOdds'
                  name='layBetOdds'
                  onChange={handleBetData}
                  className='p-1'
                />
              </div>
              <div className='grid h-fit items-center'>
                <label htmlFor='exchangecommision' className='pr-2'>
                  Exchange commision:
                </label>
                <div className='flex items-center'>
                  <input
                    type='number'
                    id='exchangecommision'
                    name='exchangecommision'
                    placeholder='5'
                    onChange={handleBetData}
                    className='p-1'
                  />
                  <span className='pl-2 font-semibold'>%</span>
                </div>
              </div>
            </section>
          </section>
          {/* Results */}
          <section className='py-1 px-4 grid items-center bg-[#008080] h-fit'>
            <article className='grid grid-cols-2 items-center h-fit w-full p-1'>
              <div>
                <p className='flex'>
                  Set your lay stake to:{' '}
                  <span className='bg-white px-2 w-[100px] ml-2'>£{layStake}</span>
                </p>
              </div>
              <div>
                <p className='flex'>
                  Your liability will be{' '}
                  <span className='bg-white px-2 w-[100px] ml-2'>£{liability}</span>
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

        <section className='p-1 h-min grid grid-cols-2 bg-red-300'>
          <section>
            <table className='text-sm'>
              <thead>
                <tr className=''>
                  <th className=''></th>
                  <th style={{ backgroundColor: 'lightBlue' }} className='p-1'>
                    Bookie
                  </th>
                  <th style={{ backgroundColor: '#e24343' }} className='p-1'>
                    Exchange
                  </th>
                  <th style={{ backgroundColor: 'pink' }} className='p-1'>
                    Total Profit
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className=''>
                  <td style={{ backgroundColor: 'lightBlue' }} className='p-1'>
                    Bookie Wins
                  </td>
                  <td style={{ backgroundColor: 'lightBlue' }} className='p-1'>
                    {' '}
                    {bookieResults.bookieResults}
                  </td>
                  <td style={{ backgroundColor: 'lightBlue' }} className='p-1'>
                    {' '}
                    {bookieResults.exchangeResults}
                  </td>
                  <td style={{ backgroundColor: 'pink' }} className='p-1'>
                    {' '}
                    £ {bookieResults.totalProfit}
                  </td>
                </tr>
                <tr className='table__row'>
                  <td style={{ backgroundColor: '#e24343' }} className='p-1'>
                    Exchange Wins
                  </td>
                  <td style={{ backgroundColor: '#e24343' }} className='p-1'>
                    {' '}
                    {exchangeResults.bookieResults}
                  </td>
                  <td style={{ backgroundColor: '#e24343' }} className='p-1'>
                    {' '}
                    {exchangeResults.exchangeResults}
                  </td>
                  <td style={{ backgroundColor: 'pink' }} className='p-1'>
                    {' '}
                    £ {exchangeResults.totalProfit}
                  </td>
                </tr>
              </tbody>
            </table>
          </section>
        </section>
      </main>
    </section>
  );
}

export default SmallCalculator;
