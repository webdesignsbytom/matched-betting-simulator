import React from 'react';
import { Link } from 'react-router-dom';
// Components
import Calculator from '../../components/calculator/Calculator';
import Navbar from '../../components/nav/Navbar';
import CalculationsExplained from './CalculationsExplained';

function CalculatorPage() {
  return (
    <div className='bg-white dark:bg-black grid grid-rows-reg min-h-screen'>
      <Navbar />

      <section className='grid grid-rows-rev bg-red-500 p-4'>
        {/* Calculator */}
        <main className='grid lg:grid-flow-col bg-blue-400'>
          <section className='grid bg-blue-400 p-2'>
            <Calculator />
          </section>

          {/* Explained */}
          <section className='grid bg-green-400'>
            <CalculationsExplained />
          </section>
        </main>

        <section className='bg-yellow-400 p-4'>
          <article>
            Learn to use the calculator in the{' '}
            <Link to='/simulator'>
              <span className='text-blue-500 font-semibold'>Bet Simulator</span>
            </Link>{' '}
            by clicking the{' '}
            <Link to='/simulator'>
              <span className='text-blue-500 font-semibold'>Link here!</span>
            </Link>
          </article>
        </section>
      </section>
    </div>
  );
}

export default CalculatorPage;
