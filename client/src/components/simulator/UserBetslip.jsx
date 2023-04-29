import React from "react";

function UserBetslip() {
  return (
    <section className="p-2 grid h-full">
      <div className="p-2 grid h-full bg-white rounded">
        <article>
          <form action="">
            <div className='my-2'>
              <h3>Place your bets!</h3>
            </div>
            <div className='grid'>
              <table className="outline outline-2 outline-black w-full">
                <thead className='p-1'>
                  <tr>
                    <th className='p-1'>Team</th>
                    <th>Type</th>
                    <th>Odds</th>
                    <th>Bet Amount</th>
                    <th>Return</th>
                    <th>Event Time</th>
                  </tr>
                </thead>
                <tbody className='p-1'>
                  <tr>
                    <td className='p-1'>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
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
