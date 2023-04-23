import React, { useContext } from 'react';
import Nav from '../../components/nav/Nav';
import './style.css';
import { UserContext } from '../../context/UserContext';
import HeaderImage from '../../assets/images/football-goal.jpg';

function Home() {
  const { user } = useContext(UserContext);
  console.log('CCC home', user);
  console.log('process.env.REACT_APP_USER_TOKEN', process.env.REACT_APP_USER_TOKEN);

  return (
    <>
      <Nav />
      <header className='home__header__container'>
        <div className='home__header__content'>
          <div className='home__header__tc'>
            <div className='home__header__title'>
              <h1>WELCOME:</h1>
              <h2>To Matched Betting Masters</h2>
            </div>
          </div>

          <div className='home__header__pc'>
            <p className='home__header__paragraph'>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum,
              hic tempora? At eveniet consequuntur temporibus fugit ipsam
              incidunt vitae eaque cupiditate cum, numquam, optio ducimus
              recusandae. Nihil sequi ducimus cumque fuga. Amet molestiae est
              tenetur, voluptates sunt placeat accusamus minus earum dolorum
              assumenda eaque architecto totam quas aut sequi nobis?Nihil sequi
              ducimus cumque fuga. Amet molestiae est tenetur, voluptates sunt
              placeat accusamus minus earum dolorum assumenda eaque architecto
              totam quas aut sequi nobis?
            </p>
          </div>

          <div className='home__header__images'>
            <img src={HeaderImage} alt='goal' className='home__header__image' />
          </div>
        </div>
      </header>

    </>
  );
}

export default Home;
