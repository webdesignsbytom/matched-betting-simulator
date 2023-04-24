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
    <section className='grid bg-[#008080]'>
      <main className='grid lg:grid-rows-a1a'>
        <section className='h-fit'>
          <article className='p-2 grid md:flex grid-flow-col items-center justify-between'>
            <h2 className='font-semibold text-xl pl-2'>Select Bet Type:</h2>
            <div>
              <p className='grid pr-2'>
                Selected Bet Type: <strong>{betType}</strong>
              </p>
            </div>
          </article>
          <form className='p-4 grid grid-cols-2 md:grid-cols-4 bg-[#ffa500]'>
            <label htmlFor='qualifyingBet'>
              Qualifying Bet
              <input
                className='ml-4'
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
                className='ml-4'
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
                className='ml-4'
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
                className='ml-4'
                type='radio'
                name='betType'
                value='Refund Bet'
                id='refundBet'
                checked={betType === 'refundBet'}
                onChange={handleBetOptionChange}
              />
            </label>
          </form>

          <article className='p-2 md:p-4 h-fit'>
            <p>
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
        <section className='grid h-fit bg-[#ffa500] pt-1 md:py-4'>
          <section className='mb-4'>
            <div className='pl-3'>
              <h4 className='text-xl font-semibold'>Bookie Bets</h4>
            </div>

            <section className='grid gap-2 md:grid-flow-col'>
              <div className='flex h-fit'>
                <label htmlFor='backBetStake' className='text-xl pr-2'>
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

              <div className='flex h-fit'>
                <label htmlFor='backBetOdds' className='text-xl pr-2'>
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

              <div className='flex h-fit items-center'>
                <label htmlFor='bookiecommision' className='text-xl pr-2'>
                  Bookie commision:
                </label>
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
            </section>
          </section>

          <section className='grid h-fit'>
            <div className='pl-3'>
              <h4 className='text-xl font-semibold'>Exchange Bets</h4>
            </div>
            <section className='grid md:grid-flow-col'>
              <div className='flex h-fit'>
                <label htmlFor='layBetOdds' className='text-xl pr-2'>
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
              <div className='flex h-fit items-center'>
                <label htmlFor='exchangecommision' className='text-xl pr-2'>
                  Exchange commision:
                </label>
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
            </section>
          </section>
          {/* Results */}
          <section className='p-4 my-6 grid md:grid-cols-2 bg-[#008080] h-fit md:h-full'>
            <article className='text-xl grid items-center h-fit'>
              <div className='mb-2'>
                <h3>
                  Set your lay stake to:{' '}
                  <span className='bg-white px-2'>£{layStake}</span>
                </h3>
              </div>
              <div>
                <p>
                  Your liability will be{' '}
                  <span className='bg-white px-2'>£{liability}</span>
                </p>
              </div>
            </article>

            {/* Bet Types */}
            <section className='hidden md:flex text-center mx-auto'>
              <div className='mb-2'>
                <h5>Bet Types</h5>
              </div>
              <ul className='grid h-fit gap-0 list-disc w-fit justify-center'>
                <li>
                  <p>Qualifying Bet</p>
                </li>
                <li>
                  <p>Free Bet (SNR)</p>
                </li>
                <li>
                  <p>Free Bet (SR)</p>
                </li>
                <li>
                  <p>Refund Bet</p>
                </li>
              </ul>
            </section>
          </section>
        </section>

        {/* results table
          [
            [ ] [ B ] [ E ] [ P ]
            [BW] [B+] [L-] [£P]
            [EW] [B-] [L+] [£P]
          ]
        */}

        <section className='p-4 mb-10 h-fit grid md:grid-cols-2 bg-red-300'>
          <section>
            <table className='text-xl'>
              <thead>
                <tr className=''>
                  <th className=''></th>
                  <th style={{ backgroundColor: 'lightBlue' }} className='p-2'>
                    Bookie
                  </th>
                  <th style={{ backgroundColor: '#e24343' }} className='p-2'>
                    Exchange
                  </th>
                  <th style={{ backgroundColor: 'pink' }} className='p-2'>
                    Total Profit
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className=''>
                  <td style={{ backgroundColor: 'lightBlue' }} className='p-2'>
                    Bookie Wins
                  </td>
                  <td style={{ backgroundColor: 'lightBlue' }} className='p-2'>
                    {' '}
                    {bookieResults.bookieResults}
                  </td>
                  <td style={{ backgroundColor: 'lightBlue' }} className='p-2'>
                    {' '}
                    {bookieResults.exchangeResults}
                  </td>
                  <td style={{ backgroundColor: 'pink' }} className='p-2'>
                    {' '}
                    £ {bookieResults.totalProfit}
                  </td>
                </tr>
                <tr className='table__row'>
                  <td style={{ backgroundColor: '#e24343' }} className='p-2'>
                    Exchange Wins
                  </td>
                  <td style={{ backgroundColor: '#e24343' }} className='p-2'>
                    {' '}
                    {exchangeResults.bookieResults}
                  </td>
                  <td style={{ backgroundColor: '#e24343' }} className='p-2'>
                    {' '}
                    {exchangeResults.exchangeResults}
                  </td>
                  <td style={{ backgroundColor: 'pink' }} className='p-2'>
                    {' '}
                    £ {exchangeResults.totalProfit}
                  </td>
                </tr>
              </tbody>
            </table>
          </section>

          {/* Explained more */}
          <section>
            <p>
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
