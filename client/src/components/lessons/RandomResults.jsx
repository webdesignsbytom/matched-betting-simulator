import React from 'react';

function RandomResults() {
  return (
    <article className='stage__container'>
      <div className='stage__title__container'>
        <h3>Stage Seven: </h3>
        <h4>See what the results are</h4>
      </div>

      <div className='stage__info__container'>
        <p>Press the button to get a new random result</p>
      </div>

      <button>SEE RESULTS</button>
      <p>TEAM WON</p>
    </article>
  );
}

export default RandomResults;
