import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
// Context
import { UserContext } from '../../context/UserContext';
// Components
import Navbar from '../../components/nav/Navbar';

function Home() {
  const { user } = useContext(UserContext);
  console.log('CCC home', user);
  console.log(
    'process.env.REACT_APP_USER_TOKEN',
    process.env.REACT_APP_USER_TOKEN
  );

  return (
    <div className='grid h-screen grid-rows-reg overflow-hidden max-h-screen bg-yellow-400'>
      <Navbar />
      {/* Main */}
      <main className='grid h-full font-poppins'>
        <section className='grid md:grid-cols-2'>
          <section className='grid bg-[#ffa500] w-full ite'>
            <div className='grid items-center px-4'>
              <article className='outline outline-black outline-4 text-center rounded'>
                <section className='py-4'>
                  <h1 className='text-5xl font-semibold pb-2'>WELCOME TO!</h1>
                  <h2 className='text-3xl font-semibold'>
                    Matched Betting Simulator
                  </h2>
                </section>

                <section className='pb-6 text-xl'>
                  <p className='px-2'>
                    Learn how to take advantage of{' '}
                    <span className='italic'>free bets</span> offered by bookies
                    as part of their promotions. Using a simple maths formula,
                    that the specially made{' '}
                    <Link to='/calculator'>
                      <span className='text-hyperlink-blue'>
                        Betting Calculator
                      </span>
                    </Link>{' '}
                    to do the maths for you!
                  </p>
                  <p className='px-2 pt-2'>
                    We also boast interactive training tools and sandbox modes
                    where you can bet fake money against realtime bookie and
                    exchange odds! Practice and see your money grow before you
                    try out this perfectly legal money making scheme!f
                  </p>
                </section>
              </article>
            </div>

            <section className='grid grid-cols-4 mx-auto w-full px-10 text-center gap-6'>
              <article className='outline outline-black outline-4 rounded h-fit p-4'><Link to='/calculator'>CALCULATOR</Link></article>
              <article className='outline outline-black outline-4 rounded h-fit p-4'><Link to='/lessons'>LESSONS</Link></article>
              <article className='outline outline-black outline-4 rounded h-fit p-4'><Link to='/simulator'>SIMULATOR</Link></article>
              <article className='outline outline-black outline-4 rounded h-fit p-4'><Link to='/forum'>FORUM</Link></article>
            </section>
          </section>

          <section className='bg-main-bg bg-no-repeat w-full bg-cover'>
            <div className=''></div>
          </section>
        </section>
      </main>
    </div>
  );
}

export default Home;
