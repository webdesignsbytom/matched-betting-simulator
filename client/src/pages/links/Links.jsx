import React, { useState } from 'react';
import LinkContainer from '../../components/links/LinkContainer';
import Nav from '../../components/nav/Nav';
import './style.css';
// TODO: add links to database
function Links() {
  const [isCreatingLink, setIsCreatingLink] = useState(false);
  const [linkData, setLinkData] = useState('');
// TODO: add fraction conversion chart
  const toggleAdd = () => {
    setIsCreatingLink(!isCreatingLink);
  };

  const handleChange = (event) => {
    const { name, value } = event.target
    console.log('name', name, 'value', value);

    setLinkData({
      ...linkData,
      [name]: value,
    })
    console.log('linkData', linkData);

  }

  const handleSubmit = async (event) => {
    console.log('submitting');

    const token = localStorage.getItem('token');
    console.log('MY BIG TOKEN', token);

    const res = await fetch('http://localhost:4000/links', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',        
        // 'authorization': `Bearer ${token}`
      },
      body: JSON.stringify(linkData),
    });
    console.log('res', res);
    const newLinkData = await res.json();
    console.log('newLinkData', newLinkData);

    setIsCreatingLink(!isCreatingLink)
  }

  return (
    <>
      <Nav />
      <div className='links__container'>

        <header className='links__header'>

          <h2>Links</h2>
          <span>
            Here we have some long standing sign up offers from a wealth of
            bookies. Some links will be for temporary offers.
          </span>
          <span>Feel free to find and add links to help our members</span>
        </header>

        <main className='link__ul__container'>

          <button onClick={toggleAdd} className='link__cta'>
            Add Link
          </button>

          {isCreatingLink && (
            <div className='link__list__item add__list__item'>
              <div className='list__item__header'>
                <h3>Company: <input type='text' name='company' placeholder='company' onChange={handleChange}/></h3>
                <span>End Date: <input type='date' name='endDate' onChange={handleChange}/></span>
              </div>

              <div className='list__item__main'>
                <p>BetType: <input type='text' name='betType' onChange={handleChange}/> </p>
                <p>Qualifying Bet: £ <input type='number' name='qualifyingBet' onChange={handleChange}/></p>
                <p>Minimum Bet: £<input type='number' name='minBet' onChange={handleChange}/></p>
                <p>Potential Profit: £ <input type='number' name='potentialProfit' onChange={handleChange}/></p>
                <p>Link: <input type='text' name='url' onChange={handleChange}/></p>
              </div>

              <div className='list__item__footer'>
                <p>Description:<input type='text' name='desc' onChange={handleChange}/></p>
                <button onClick={handleSubmit}>Submit</button>
              </div>
            </div>
          )}
          <LinkContainer linkData={linkData}/>
        </main>
      </div>
    </>
  );
}

export default Links;
