import React, { useContext } from "react";
import { GameContext } from "../../context/GameContext";

function StageTwo() {
  const {
    stage,
    betFairBank,
    setBetFairBank,
    bookieBetzBank,
    setBookieBetzBank,
    bookieDepositData,
    setBookieDepositData,
    exchangeDepositData,
    setExchangeDepositData,
    playerBank,
    setPlayerBank,
    bankToggle,
    setBankToggle,
  } = useContext(GameContext);

  const handleBookieChange = (event) => {
    console.log("handleChange", event.target.value);
    console.log("handleChange", event.target.name);
    const { name, value } = event.target;

    setBookieDepositData(Number(value));
  };
  console.log("bookieDepositData", bookieDepositData);

  const submitBookieDeposit = (event) => {
    event.preventDefault();
    console.log("submit");

    if (bookieDepositData > playerBank) {
      return alert("Sorry not enough funds to continue");
    }
    setPlayerBank((current) => current - bookieDepositData);
    setBookieBetzBank((current) => current + bookieDepositData);
  };

  return (
    <section>
      <article className="p-2 pb-10 border-b-2 border-yellow-400 border-solid">
        <div className="grid grid-flow-col gap-4 w-fit mb-2">
          <h3 className="font-semibold">Stage One: </h3>
          <h4>Join the bookie</h4>
        </div>

        <div className="my-2">
          <p>
            So you have found a free bet offer. BookieBetz are offering bet £10
            and get a £10 free bet. Sign up being sure to check the rules,
            terms, countries, and withdrawal limits/minimums. Check any boxes
            required. Lets deposit £10 and move on the next step for now.{" "}
          </p>
          <p>
            Our examples will be based on{" "}
            <a
              href="https:www.williamhill.com"
              target="_blank"
              rel="noreferrer"
            >
              <span>williamhill.com</span>
            </a>{" "}
            which always has a decent offer and easy to understand terms and
            conditions.
          </p>
        </div>

        <section className='grid md:grid-cols-2'>
          <article>
            <h6>OFFER</h6>
            <p>Welcome to William Hill</p>
            <p>Sign Up and deposit and bet £10 to get £30 in free bets!</p>
            <p>Free bets come in 3 times £10 bets</p>
          </article>
          <article>
            <h6>WHAT TO NOTE</h6>
            <p>We must deposit and bet £10 from our bank and bet it.</p>
            <p>Its always best to stick to football and horse racing.</p>
            <p>After we have bet £10 (and the game has finished and been called) you will get 3x £10 free bets. That can be found on your bet slip when you come to place a bet.</p>
            <p>Always check the T&C's for a min and max bet on your free and qaulifying bet.</p>
            <p>Always find your odds in decimal form</p>
            <p>Observe how we track your funds across all accounts</p>
          </article>
        </section>

        <section className="grid">
          <div className="grid grid-flow-col w-fit">
            <input
              type="number"
              name="bookieDeposit"
              id="bookieDeposit"
              className="max-w-[150px p-1"
              onChange={handleBookieChange}
              placeholder='£10'
            />
            <div>
              <button
                className="outline-black outline outline-2 bg-orange-400 p-1"
                onClick={submitBookieDeposit}
              >
                DEPOSIT
              </button>
            </div>
          </div>
        </section>
      </article>
    </section>
  );
}

export default StageTwo;
