import React from 'react'
import Events from './Events'

function StageSix() {
  return (
    <article className='stage__container'>
      <div className='stage__title__container'>
      <h3>Stage Six: </h3>
        <h4>Make the recomended bets </h4>
      </div>

      <div className='stage__info__container'>
        <p>The lay stake is how much of a bet you need to accept at the exchange. The liability is how much you will pay this person if their bet wins</p>
      </div>

      <section className='stage__example__container'>
        <Events />
      </section>
    </article>
  )
}

export default StageSix