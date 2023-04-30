import React from 'react';
import { Link } from 'react-router-dom';
// Components
import Calculator from '../../components/calculator/Calculator';
import Navbar from '../../components/nav/Navbar';
import CalculationsExplained from '../../components/calculator/CalculationsExplained';

function CalculatorPage() {
  return (
    <div className='bg-yellow-400 dark:bg-black grid grid-rows-reg min-h-screen lg:max-h-screen lg:overflow-hidden'>
      <Navbar />
      <section className='grid p-4 gap-2'>
        {/* Calculator */}
        <main className='grid lg:grid-cols-2 gap-2'>
          <section className='grid grid-rows-rev outline outline-2 outline-black rounded'>
            <Calculator />
            <section className='p-4 mt-6 md:mt-0 bg-[#ffa500] outline outline-2 outline-black rounded'>
              <article>
                Learn to use the calculator in the{' '}
                <Link to='/simulator'>
                  <span className='text-blue-500 font-semibold'>
                    Bet Simulator
                  </span>
                </Link>{' '}
                by clicking the{' '}
                <Link to='/simulator'>
                  <span className='text-blue-500 font-semibold'>
                    Link here!
                  </span>
                </Link>
              </article>
            </section>
          </section>

          {/* Explained */}
          <section className='grid outline outline-2 outline-black rounded'>
            <CalculationsExplained />
          </section>
        </main>
      </section>
    </div>
  );
}

export default CalculatorPage;
