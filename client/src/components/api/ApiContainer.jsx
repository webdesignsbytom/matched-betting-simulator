import React, { useEffect, useState } from 'react';
import client from '../../utils/axios/client';

function ApiContainer() {
  const [allFoundOdds, setAllFoundOdds] = useState([]);

  useEffect(() => {
    let tempArray = [];

    client
      .getAPI(
        `https://api.the-odds-api.com/v4/sports/upcoming/odds/?&regions=uk&markets=h2h&apiKey=deacd793ace1d4868aa674bed9b79adb`
      )
      .then((res) => {
        console.log('res', res.data);
        res.data.map((sport) => {
          if (sport.bookmakers.length < 0) {
            return sport;
          } else {
            tempArray.push(sport);
          }
          return setAllFoundOdds(tempArray);
        });
      })
      .catch((err) => {
        console.error('Unable to retrieve odds', err);
      });
  }, []);

  console.log('all found', allFoundOdds);
  return (
    <section className='grid grid-rows-reg h-full'>
      <div className='text-center grid gap-0 grid-flow-col justify-between px-2 py-1 border-b-2 border-black border-solid'>
        <h3>Sports API</h3>
        <h4>Live sports odds!</h4>
      </div>
      <section className='grid bg-red-500 grid-cols-2 h-full'>
        <section className='bg-blue-200 grid h-full w-full overflow-hidden'>
          <h6 className='text-center'>Bookie (Various)</h6>
          <section className='grid gap-1 overflow-y-scroll max-h-[320px] w-full'>
            {allFoundOdds.length &&
              allFoundOdds.map((match, index) => {
                console.log('item found', match);
                return (
                  <article
                    key={index}
                    className='bg-green-100 border-b-2 border-solid border-black'
                  >
                    <div className=''>
                      {console.log(
                        match.bookmakers[0].markets[0].outcomes.find(
                          (outcome) => outcome.name === match.home_team
                        ).price
                      )}
                      <section className='flex justify-between'>
                        <div className='overflow-hidden'>
                          {match.home_team}{' '}
                        </div>
                        <div>
                          WIN{' '}
                          {
                            match.bookmakers[0].markets[0].outcomes.find(
                              (outcome) => outcome.name === match.home_team
                            ).price
                          }
                        </div>
                        <div>
                          LOSE{' '}
                          {
                            match.bookmakers[0].markets[0].outcomes.find(
                              (outcome) => outcome.name === match.away_team
                            ).price
                          }
                        </div>
                        <div>
                          DRAW{' '}
                          {match.bookmakers[0].markets[0].outcomes.length >
                          1 ? (
                            <div>
                              {
                                match.bookmakers[0].markets[0].outcomes.find(
                                  (outcome) => outcome.name === 'Draw'
                                ).price
                              }
                            </div>
                          ) : (
                            <div>N/a</div>
                          )}
                        </div>
                      </section>
                      <section>{match.away_team}</section>
                    </div>
                  </article>
                );
              })}
          </section>
        </section>
        <section className='bg-red-200 grid h-full border-l-2 border-solid border-black'>
          <h6 className='text-center'>Exchgange (Betfair)</h6>
        </section>
      </section>
    </section>
  );
}

export default ApiContainer;
