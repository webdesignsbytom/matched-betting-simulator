import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
// Context
import { UserContext } from '../../context/UserContext';
// Images
import Logo from '../../assets/images/logo.png';
// Utils
import { userSampleData } from '../../utils/data/UserData';

function Navbar() {
  const { user, setUser } = useContext(UserContext);

  const navigate = useNavigate();

  const signOut = (event) => {
    event.preventDefault();

    setUser(userSampleData);
    localStorage.removeItem(process.env.REACT_APP_USER_TOKEN);
    navigate('../', { replace: true });
  };

  const toggleNavbar = () => {};

  return (
    <header className='flex bg-green-700 justify-between items-center p-4 border-b-4 border-black border-solid w-full'>
      <div className='pl-2'>
        <Link to='/'>
          <img src={Logo} className='w-8 h-8' alt='Matched Betting' />
        </Link>
      </div>

      <nav
        onClick={() => {
          toggleNavbar();
        }}
        className='md:hidden no__highlights pr-4'
      >
        <span className='cursor-pointer text-white hover:text-hover-grey'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth='1.5'
            stroke='currentColor'
            className='w-8 h-8 transition no__highlights duration-200 ease-in-out select-none no__highlights focus:scale-125 active:scale-125'
            data-te-animation-init
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'
            />
          </svg>
        </span>
      </nav>

      <nav className='hidden md:flex pr-2'>
        <section className=''>
          <ul className='flex gap-6'>
            <li>
              <Link to='/'>
                <span className='font-medium text-black hover:text-gray-600'>
                  Home
                </span>
              </Link>
            </li>
            <li>
              <Link to='/calculator'>
                <span className='font-medium text-black hover:text-gray-600'>
                  Calculator
                </span>
              </Link>
            </li>
            <li>
              <Link to='/lessons'>
                <span className='font-medium text-black hover:text-gray-600'>
                  Lessons
                </span>
              </Link>
            </li>
            <li>
              <Link to='/simulator'>
                <span className='font-medium text-black hover:text-gray-600'>
                  Simulator
                </span>
              </Link>
            </li>
            <li>
              <Link to='/forum'>
                <span className='font-medium text-black hover:text-gray-600'>
                  Forum
                </span>
              </Link>
            </li>
            <li>
              <Link to='/links'>
                <span className='font-medium text-black hover:text-gray-600'>
                  Links
                </span>
              </Link>
            </li>
            <li onClick={signOut}>
              <Link to='/'>
                <span className='font-medium text-black hover:text-gray-600'>
                  Sign Out
                </span>
              </Link>
            </li>
          </ul>
        </section>
      </nav>
    </header>
  );
}

export default Navbar;
