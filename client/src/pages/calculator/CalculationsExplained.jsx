import React from 'react';

function CalculationsExplained() {
  return (
    <section className='calculations__container'>
      <div className='calculations__title'>
        <h3>
          Calculations explained
          <span>Commision = % / 100 (5% = 0.05)</span>
        </h3>
      </div>
      <article className='terms__explained'>
        <div className='betting__info'>
          <div>
            <p>
              <strong>Lay Stake:</strong> An amount you accept from someone
              online as a bet they are placing with you.
              <span>Liability = Lay Stake * Lay Odds - Lay Stake</span>
            </p>
          </div>
          <div>
            <p>
              <strong>Liability:</strong> Amount you need in the exchange to
              take a bet
              <span>Liability = Lay Stake * Lay Odds - Lay Stake</span>
            </p>
          </div>
        </div>
      </article>
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
    </section>
  );
}

export default CalculationsExplained;
