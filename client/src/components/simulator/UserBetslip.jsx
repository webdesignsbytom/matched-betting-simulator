import React from 'react';

function UserBetslip() {
  return (
    <section className='p-2 grid h-full'>
      <div className='grid h-full bg-white rounded'>
        <article>
          <form action=''>
            <div className='grid'>
              <table className='outline outline-2 outline-black w-full'>
                <thead className='border-b-2 border-solid border-black'>
                  <tr>
                    <th className=''>Team Name</th>
                    <th>Type</th>
                    <th>Odds</th>
                    <th>Bet £</th>
                    <th>Return £</th>
                  </tr>
                </thead>
                <tbody className='p-1'>
                  <tr>
                    <td className='border-r-2 border-solid border-black'>0</td>
                    <td className='border-r-2 border-solid border-black'>0</td>
                    <td className='border-r-2 border-solid border-black'>0</td>
                    <td className='border-r-2 border-solid border-black'>0</td>
                    <td>0</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </form>
        </article>
      </div>
    </section>
  );
}

export default UserBetslip;
