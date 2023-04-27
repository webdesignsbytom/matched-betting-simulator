import React from 'react';
// Components
import SmallCalculator from '../../components/calculator/SmallCalculator';
import Navbar from '../../components/nav/Navbar';
import ApiContainer from '../../components/api/ApiContainer';
import UserBetArea from '../../components/simulator/UserBetArea';

function SimulatorPage() {
  return (
    <div className='h-screen max-h-screen overflow-hidden grid grid-rows-reg bg-yellow-400'>
      <Navbar />
      <main className='grid h-full grid-rows-reg'>
        {/* TITLES */}
        <section className='pl-2'>
          <article className='text-left px-4 pt-4 pb-1'>
            <h1 className='text-3xl font-bruno font-semibold mb-1'>Betting Simulator</h1>
            <h2 className=''>
              Use real sports in our simulator with our Odds API!
            </h2>
          </article>
        </section>

        <section className='grid grid-cols-2 h-full max-h-full overflow-hidden px-6 py-1 gap-2'>
          {/* LEFT SECTION */}
          <section className='grid grid-rows-rev outline outline-2 outline-black rounded gap-2 p-1 overflow-hidden bg-yellow-500'>
            {/* API */}
            <section className='outline outline-2 outline-black rounded bg-yellow-400'>
              <ApiContainer />
            </section>
            {/* Calculator */}
            <section className='outline outline-2 outline-black rounded'>
              <SmallCalculator />
            </section>
          </section>

          {/* RIGHT SIMULATOR */}
          <section className='grid grid-rows-rev outline outline-2 outline-black rounded gap-2 overflow-hidden p-1 bg-yellow-500'>
            <section className='outline outline-2 outline-black rounded bg-yellow-400'>
              <UserBetArea />
            </section>
          </section>
        </section>
      </main>
    </div>
  );
}

export default SimulatorPage;
