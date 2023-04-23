import React from 'react';
import Calculator from '../../components/calculator/Calculator';
import Navbar from '../../components/nav/Navbar';
import CalculationsExplained from './CalculationsExplained';
import './style.css';

function CalculatorPage() {
  return (
    <>
      <Navbar />

      <header className='header__container'>
        <h2>Calulator</h2>
      </header>

      <main className='main__calculator__container'>
        <Calculator />

        <CalculationsExplained />
      </main>
    </>
  );
}

export default CalculatorPage;
