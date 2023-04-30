import React from 'react';
import Calculator from '../../components/calculator/Calculator';

function StageFive() {
  return (
    <section className='outline outline-4 outline-black rounded grid bg-[#008080] my-4'>
      <article className='p-2 pb-10'>
        <div className='grid grid-flow-col gap-4 w-fit mb-2'>
          <h3 className='font-semibold'>Stage Five: </h3>
          <h4>Use the calculator to work out lay stake and liability</h4>
        </div>

        <div className='mt-2 mb-6'>
          <p>
            The lay stake is how much of a bet you need to accept at the
            exchange. The liability is how much you will pay this person if
            their bet wins
          </p>
        </div>

        <section className='outline outline-2 outline-black rounded'>
          <Calculator />
        </section>
      </article>
    </section>
  );
}

export default StageFive;
