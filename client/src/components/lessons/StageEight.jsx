import React from 'react'
import BankingBar from './BankingBar'

function StageEight() {
  return (
    <article className='stage__container'>
      <div className='stage__title__container'>
      <h3>Stage Eight: </h3>
        <h4>See what the other outcomes would have done for you bank</h4>
      </div>

      <div className='stage__info__container'>
        <p>We have been tracking 3 banks this whole time</p>
      </div>

      <section className='stage__example__container'>
        <BankingBar />
      </section>
    </article>
  )
}

export default StageEight