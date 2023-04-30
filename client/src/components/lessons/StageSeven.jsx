import React from 'react';

function StageSeven() {
  return (
    <section className='outline outline-4 outline-black rounded grid bg-[#008080] my-4'>
      <article className='p-2 pb-10'>
        <div className='grid grid-flow-col gap-4 w-fit mb-2'>
          <h3 className='font-semibold'>Stage Seven: </h3>
          <h4>See what the results are</h4>
        </div>

        <div className='my-2'>
          <p>Press the button to get a new random result</p>
        </div>

        <div>
          <button>SEE RESULTS</button>
          <p>TEAM WON</p>
        </div>
      </article>
    </section>
  );
}

export default StageSeven;
