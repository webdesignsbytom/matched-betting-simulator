import React from "react";
import { Link } from "react-router-dom";

function StageOne() {
  return (
    <article className="p-2">
      <div className="grid grid-flow-col gap-4 w-fit mb-2">
        <h3 className="font-semibold">Stage One: </h3>
        <h4>Find A Free Bet Offer</h4>
      </div>

      <div className="outline-2 outline-black outline p-1 mb-2">
        <p>
          Find a bookie with a free Bet offer, if this is your first time and
          keep it simple with a 'Stake Not Returned' free bet. You can find a
          good bet you can trust by following one of our{" "}
          <span>
            <Link to="/links">
              <span className="text-yellow-400 font-bold">Links</span>
            </Link>
          </span>
        </p>
      </div>

      <section className="">
        <article className="">
          <div>
            <h6 className='font-semibold'>Example Data For A Bet</h6>
          </div>
          <div className='grid md:grid-cols-3'>
            <p>Company: Ladbrokes</p>
            <p>End Date: ? When does the offer End ?</p>
            <p>BetType: SNR/SR/REFUND </p>
            <p>Qualifying Bet: £10</p>
            <p>Minimum Bet: £10</p>
            <p>Potential Profit: £7.70</p>
            <p>Link: https:www.ladbrokes.com </p>
            <p>Description: Sign up, dpotis £5 and get £20 worth of free bets. SNR type bets</p>
          </div>
        </article>
      </section>
    </article>
  );
}

export default StageOne;
