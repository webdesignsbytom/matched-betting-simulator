import React from 'react';
import Events from './Events';

function StageSix() {
  return (
    <section className='outline outline-4 outline-black rounded grid bg-[#008080] my-4'>
      <article className='p-2 pb-10'>
        <div className='grid grid-flow-col gap-4 w-fit mb-2'>
          <h3 className='font-semibold'>Stage Six: </h3>
          <h4>Make the recomended bets </h4>
        </div>

        <div className='my-2'>
          <p>
            The lay stake is how much of a bet you need to accept at the
            exchange. The liability is how much you will pay this person if
            their bet wins
          </p>
        </div>

        <section className='my-2'>
          <Events />
        </section>
      </article>
    </section>
  );
}

export default StageSix;
