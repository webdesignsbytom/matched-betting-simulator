import React, { useEffect, useState } from 'react';
import client from '../../utils/axios/client';

function ApiContainer() {
  const [allFoundOdds, setAllFoundOdds] = useState([])

  useEffect(() => {
    client
        .getAPI(`https://api.the-odds-api.com/v4/sports/upcoming/odds/?&regions=uk&markets=h2h&apiKey=deacd793ace1d4868aa674bed9b79adb`)
        .then((res) => {
          console.log('res', res.data);
          setAllFoundOdds(res.data);
        })
        .catch((err) => {
          console.error('Unable to retrieve odds', err);
        });
  }, [])

  console.log('all found', allFoundOdds);
  return (
    <section className='grid grid-rows-reg h-full'>
      <div className='text-center grid gap-0 grid-flow-col justify-between px-2 py-1 border-b-2 border-black border-solid'>
        <h3>Sports API</h3>
        <h4>Live sports odds!</h4>
      </div>
      <section className='grid bg-red-500 grid-cols-2 h-full'>
        <section className='bg-blue-200 grid h-full'>
          <h6 className='text-center'>Bookie</h6>
        </section>
        <section className='bg-red-200 grid h-full border-l-2 border-solid border-black'>
          <h6 className='text-center'>Exchgange</h6>
        </section>
      </section>
    </section>
  );
}

export default ApiContainer;
