import React from 'react';
import { Link } from 'react-router-dom';
import LinkItem from '../../../components/links/LinkItem';
import '../../forum/style.css'

function StageOne() {
  return (
    <article className='stage__container'>
      <div className='stage__title__container'>
        <h3>Stage One: </h3>
        <h4>Find A Free Bet Offer</h4>
      </div>

      <div className='stage__info__container'>
        <p>Find a bookie with a free Bet offer, if this is your first time and keep it simple with a 'Stake Not Returned' free bet. You can find a good bet you can trust by following one of our link.
          <span>
            <Link to='/links'>Links</Link>
          </span>
        </p>
      </div>

      <section className='stage__example__container'>
      <article className='link__list__item'>
      <div className='list__item__header'>
        <h3>Company: </h3>
        <span>End Date: </span>
      </div>

      <div className='list__item__main'>
        <p>BetType: </p>
        <p>Qualifying Bet: £ </p>
        <p>Minimum Bet: £</p>
        <p>Potential Profit: £ </p>
        <p>Link: </p>
      </div>

      <div>
        <p>Description: </p>
      </div>
    </article>
      </section>
    </article>
  );
}

export default StageOne;
