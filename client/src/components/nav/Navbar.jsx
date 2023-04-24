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

  return (
    <header className='flex bg-green-700 justify-between items-center p-4 border-b-4 border-black border-solid'>
      <div className='pl-2'>
        <Link to='/'>
          <img src={Logo} className='w-8 h-8' alt='Matched Betting' />
        </Link>
      </div>

      <nav className='flex pr-2'>
        <section className=''>
          <ul className='flex gap-6'>
            <li>
              <Link to='/'>
                <span className='font-semibold text-black hover:text-gray-600 text-xl'>
                  Home
                </span>
              </Link>
            </li>
            <li>
              <Link to='/calculator'>
                <span className='font-semibold text-black hover:text-gray-600 text-xl'>
                  Calculator
                </span>
              </Link>
            </li>
            <li>
              <Link to='/lessons'>
                <span className='font-semibold text-black hover:text-gray-600 text-xl'>
                  Lessons
                </span>
              </Link>
            </li>
            <li>
              <Link to='/simulator'>
                <span className='font-semibold text-black hover:text-gray-600 text-xl'>
                  Simulator
                </span>
              </Link>
            </li>
            <li>
              <Link to='/forum'>
                <span className='font-semibold text-black hover:text-gray-600 text-xl'>
                  Forum
                </span>
              </Link>
            </li>
            <li>
              <Link to='/faq'>
                <span className='font-semibold text-black hover:text-gray-600 text-xl'>
                  FAQ
                </span>
              </Link>
            </li>
            <li>
              <Link to='/links'>
                <span className='font-semibold text-black hover:text-gray-600 text-xl'>
                  Links
                </span>
              </Link>
            </li>
            <li onClick={signOut}>
              <Link to='/'>
                <span className='font-semibold text-black hover:text-gray-600 text-xl'>
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
