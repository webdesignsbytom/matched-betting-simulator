import React from 'react'
import Calculator from '../../../components/calculator/Calculator'

function StageFive() {
  return (
    <article className='stage__container'>
      <div className='stage__title__container'>
      <h3>Stage Five: </h3>
        <h4>Use the calculator to work out lay stake and liability</h4>
      </div>

      <div className='stage__info__container'>
        <p>The lay stake is how much of a bet you need to accept at the exchange. The liability is how much you will pay this person if their bet wins</p>
      </div>

      <section className='stage__example__container'>
        <Calculator />
      </section>
    </article>
  )
}

export default StageFive