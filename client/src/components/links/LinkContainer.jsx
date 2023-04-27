import React, { useEffect, useState } from 'react';

function LinkContainer({ linkData }) {
  const [allLinks, setAllLinks] = useState('');

  useEffect(() => {
    fetch(`http://localhost:4000/links`)
      .then((res) => res.json())
      .then((data) => {
        setAllLinks(data.data);
      })
      .catch((error) => {
        console.log('error', error);
      });
  }, [linkData]);

  return (
    <section className='grid h-full'>
      {allLinks > 0 ? (
        <ul>
          {allLinks.map((link, index) => {
            return (
              <li>
                Link Item
              </li>
            )
          })}
        </ul>
      ) : (
        <section className='grid items-center justify-center'>
          <h4 className='text-2xl'>Nothing to display</h4>
        </section>
      )}
    </section>
  );
}

export default LinkContainer;
