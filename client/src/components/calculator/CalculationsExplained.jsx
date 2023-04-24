import React from 'react';

function CalculationsExplained() {
  return (
    <section className='grid bg-white p-2'>
      {/* Header */}
      <header>
        <article className='grid justify-center bg-green-200 outline outline-2 outline-black rounded p-2 text-center w-full h-fit'>
          <h1 className='font-semibold text-3xl'>Calculation Explained</h1>
          <h2 className='font-semibold text-xl'>
            Learn how to use the calculator for a variety of bet types.
          </h2>
        </article>
      </header>

      {/* Explained */}
      <section className='text-center'>
        <article>
          <p>
            This custom built calculator will take the odds of two bets and
            return to you the correct amounts to lay. Along with a potential
            return for all win/lose situtations that can happen in a bet.
          </p>
          <p>
            We have also include an compilation of common betting terms you
            should learn.
          </p>
          <p>
            To confirm the calculator is correct and to increase your knowledge.
            We have included the formulas the calculator is based on below.
          </p>
        </article>
      </section>

      <section className=''>
        <div className=''>
          <div>
            <p>
              <strong>Lay Stake:</strong> An amount you accept from someone
              online as a bet they are placing with you.
              <span>Liability = Lay Stake * Lay Odds - Lay Stake</span>
            </p>
          </div>
          <div className='pt-2'>
            <p>
              <strong>Liability:</strong> Amount you need in the exchange to
              take a bet
              <span>Liability = Lay Stake * Lay Odds - Lay Stake</span>
              <span>Commision = % / 100 (5% = 0.05)</span>
            </p>
          </div>
        </div>
      </section>

      <article className='calculation__type'>
        <div className='calculation__type__title'>
          <h3>Qualifying Bet Lay Stake</h3>
        </div>
        <div className='calculation__type__formula'>
          Lay Stake = BackBet Odds / (LayBet Odds - commision) * Backbet Stake{' '}
        </div>
        <div className='calculation__type__formula'>
          If back Bet Wins: Profit = (BackBet Odds - 1) * (BackBet Stake - (Lay
          odds - 1) * lay stake
        </div>
        <div className='calculation__type__formula'>
          If back Bet Wins: Profit = lay stake * (1 - commision) - back stake
        </div>
      </article>

      <article className='calculation__type'>
        <div className='calculation__type__title'>
          <h3>Free Bet SNR Lay Stake(StakeNotReturned)</h3>
        </div>
        <div className='calculation__type__formula'>
          Lay Stake = (BackBet Odds - 1) / (LayBet Odds - commision) * Backbet
          Stake{' '}
        </div>
      </article>

      <article className='calculation__type'>
        <div className='calculation__type__title'>
          <h3>Free Bet SR Lay Stake (StakeReturned)</h3>
        </div>
        <div className='calculation__type__formula'>
          Lay Stake = BackBet Odds / (LayBet Odds - commision) * Backbet Stake{' '}
        </div>
      </article>

      <section className='grid h-fit w-full'>
        <article className='grid h-fit p-0'>
          <h4 className='font-semibold'>Notes</h4>
          <ul className='pl-8 h-min grid leading-5 gap-0 list-disc p-2'>
            <li className='h-min p-0 m-0'>
              <p className='h-min p-0 m-0'>
                A draw will count as a loss in football and most other sports.
              </p>
            </li>
            <li>
              <p>
                Odds are constantly changing, more so as the start of an event
                approaches.
              </p>
            </li>
            <li>
              <p>
                Some smaller football games may not have a draw as a result
                option.
              </p>
            </li>
            <li>
              <p>
                Use Ctrl+F to search a page of terms and conditons for key
                words. Such as 'Min bet' and 'Max odds'.
              </p>
            </li>
          </ul>
        </article>
      </section>
    </section>
  );
}

export default CalculationsExplained;
