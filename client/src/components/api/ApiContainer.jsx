import React, { useEffect, useState } from 'react';
import client from '../../utils/axios/client';

function ApiContainer() {
  const [allFoundOdds, setAllFoundOdds] = useState([]);

  useEffect(() => {
    client
      .getAPI(
        `https://api.the-odds-api.com/v4/sports/upcoming/odds/?&regions=uk&markets=h2h&apiKey=deacd793ace1d4868aa674bed9b79adb`
      )
      .then((res) => {
        console.log('res', res.data);
        setAllFoundOdds(res.data);
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
        <section className='bg-blue-200 grid h-full w-full'>
          <h6 className='text-center'>Bookie (Various)</h6>
          <ul className='grid gap-0 overflow-y-scroll max-h-[320px] w-full'>
            {allFoundOdds.length &&
              allFoundOdds.map((match, index) => {
                console.log('item found', match);
                return (
                  <li className='w-full flex items-center border-b-2 border-solid border-black h-fit p-1'>
                    <article className='grid w-full justify-between'>
                      <section className='flex justify-between w-full'>
                        <div>{match.home_team}</div>
                        {/* <div>
                          {match.bookmakers[0].markets[0].outcomes[1].price}
                        </div> */}
                      </section>
                      <section>{match.away_team}</section>
                    </article>
                  </li>
                );
              })}
          </ul>
        </section>
        <section className='bg-red-200 grid h-full border-l-2 border-solid border-black'>
          <h6 className='text-center'>Exchgange (Betfair)</h6>
        </section>
      </section>
    </section>
  );
}

export default ApiContainer;
