import React, { useContext } from 'react';
// Context
import { UserContext } from '../../context/UserContext';
import { SimulatorContext } from '../../context/SimulatorContext';
import UserBetslip from './UserBetslip';

function UserBetArea() {
  const { user, setUser } = useContext(UserContext);
  const { toggleBetslipOpen, setToggleBetslipOpen } =
    useContext(SimulatorContext);

  const openUserBetslip = () => {
    console.log('open userBet data');
    setToggleBetslipOpen(!toggleBetslipOpen);
  };

  return (
    <section className='grid grid-rows-reg h-full'>
      <div className='text-center grid gap-0 grid-flow-col justify-between px-2 py-1 border-b-2 border-black border-solid'>
        <h3>User area</h3>
        <button
          onClick={openUserBetslip}
          className='outline outline-2 outline-black rounded px-2 bg-red-200'
        >
          <h4>Open Betslip</h4>
        </button>
      </div>

      <section>
        {toggleBetslipOpen ? (
          <UserBetslip />
        ) : (
          <section>User info and lessons</section>
        )}
      </section>
    </section>
  );
}

export default UserBetArea;
