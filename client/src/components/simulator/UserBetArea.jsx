import React, { useContext, useEffect, useState } from 'react';
// Context
import { ToggleContext } from '../../context/ToggleContext';
import { SimulatorContext } from '../../context/SimulatorContext';
// Components
import UserBetslip from './UserBetslip';
import TeachingInfo from './TeachingInfo';

function UserBetArea() {
  const { betslipSimulatorOpen, toggleSimulatorBetSlip } =
    useContext(ToggleContext);

  const { simulatorPlayerData, submitBookieBet, currentlySelectedBookieBet } =
    useContext(SimulatorContext);

  const [bookieBetAmount, setBookieBetAmount] = useState(0);
  const [potentialBetWinnings, setPotentialBetWinnings] = useState(0);

  useEffect(() => {
    let winnings = bookieBetAmount * currentlySelectedBookieBet.price;
    setPotentialBetWinnings(winnings);
  }, [bookieBetAmount, currentlySelectedBookieBet.price]);

  console.log('bookieBetAmount', bookieBetAmount);

  const handleBookieBetChange = (event) => {
    const { value } = event.target;
    setBookieBetAmount(Number(value));
  };

  return (
    <section className='grid grid-rows-reg h-full'>
      <div className='text-center grid gap-0 grid-flow-col justify-between px-2 py-1 border-b-2 border-black border-solid'>
        <h3>User area</h3>
        <div>
          <span>Bank: £{simulatorPlayerData.bank}</span>
        </div>
        <button
          onClick={toggleSimulatorBetSlip}
          className='outline outline-2 outline-black rounded px-2 bg-red-200'
        >
          <h4>
            {!betslipSimulatorOpen ? (
              <span>Open Betslip</span>
            ) : (
              <span>Close Betslip</span>
            )}
          </h4>
        </button>
      </div>

      <section>
        {betslipSimulatorOpen ? (
          <section className='px-2'>
            <div className='my-2'>
              <h3>Place your bets!</h3>
              <p>Click the odds you want to bet on.</p>
            </div>

            {/* Currently selected */}
            <div className='bg-gray-100 mb-4'>
              <article className='grid grid-flow-col justify-between p-2 text-lg'>
                <div>Team: {currentlySelectedBookieBet.teamName}</div>
                <div>Bet: {currentlySelectedBookieBet.betType}</div>
                <div>Price: {currentlySelectedBookieBet.price}</div>
              </article>
              {currentlySelectedBookieBet.teamName.length > 1 && (
                <div className='p-2 mb-4 gap-2'>
                  <div className='flex gap-6 mb-2'>
                    <div className='flex gap-2'>
                      <label htmlFor='betAmount'>Bet Amount: £</label>
                      <input
                        className='w-20 outline outline-black outline-2'
                        onChange={handleBookieBetChange}
                        type='number'
                        name='betAmount'
                        id='betAmount'
                      />
                    </div>

                    <div>Winnings: £ {potentialBetWinnings}</div>
                  </div>

                  <div className='w-full flex justify-end'>
                    <input
                      type='submit'
                      value='Place Bet'
                      onClick={() =>
                        submitBookieBet({
                          bookieBetAmount,
                          potentialBetWinnings,
                        })
                      }
                      className='outline-black text-gray-100 outline-2 outline rounded p-2 bg-green-600 cursor-pointer active:scale-110 active:bg-yellow-400 hover:bg-green-400'
                    />
                  </div>
                </div>
              )}
            </div>

            <section className='outline outline-2 outline-black rounded-2xl p-1'>
              <h5>Open Bets</h5>
              <UserBetslip />
            </section>
          </section>
        ) : (
          <TeachingInfo />
        )}
      </section>
    </section>
  );
}

export default UserBetArea;
