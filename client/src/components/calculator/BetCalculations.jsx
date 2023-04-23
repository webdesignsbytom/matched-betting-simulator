export const calculateQualifyingBetStake = (betData) => {
  console.log('QUALIFYING BET');
  let x = betData.backBetOdds;
  let y = betData.layBetOdds - betData.exchangecommision / 100;
  let z = betData.backBetStake;
  console.log('X', x);
  console.log('y', y);
  console.log('z', z);
  let layBetData = (x / y) * z;
  let liabilityRequired = (layBetData * betData.layBetOdds) - layBetData
  return { layBetData, liabilityRequired };
};

export const calculateFreeSnrBetStake = (betData) => {
  console.log('FREE BET');
  let x = betData.backBetOdds - 1;
  let y = betData.layBetOdds - betData.exchangecommision / 100;
  let z = betData.backBetStake;
  console.log('X', x);
  console.log('y', y);
  console.log('z', z);
  let layBetData = (x / y) * z;
  let liabilityRequired = (layBetData * betData.layBetOdds) - layBetData
  return { layBetData, liabilityRequired };
};

export const calculateFreeSrBetStake = (betData) => {
  console.log('FREE BET SR');
  let x = betData.backBetOdds;
  let y = betData.layBetOdds - betData.exchangecommision / 100;
  let z = betData.backBetStake;
  console.log('X', x);
  console.log('y', y);
  console.log('z', z);
  let layBetData = (x / y) * z;
  console.log('LAYBETDATA', layBetData);
  let liabilityRequired = (layBetData * betData.layBetOdds) - layBetData
  return { layBetData, liabilityRequired };
};

export const calculateRefundBetStake = (betData) => {
    console.log('REFUND');
};


// RESULTS TABLE QUALIFYING BET
export const bookieQualifyingResultData = (betData, layStake, liability) => {
  console.log('bookieResult', betData);
  console.log('Liability', liability);
  // Bookie Returns
  let totalReturn = (betData.backBetOdds * betData.backBetStake);
  let bookieResults = totalReturn - betData.backBetStake
  // Exchange Returns
  let exchangeResults = -Number(liability)
  // Profit
  let x = (betData.backBetOdds - 1)
  console.log('x', x);
  let y = betData.backBetStake 
  let z = (betData.layBetOdds - 1) * layStake
  console.log('z', z);
  let totalProfit = x * y - z
  return { bookieResults, exchangeResults, totalProfit }
}

export const exchangeQualifyingResultData = (betData, layStake, liability) => {
  console.log('exchangeResult', betData);
  // Bookie Returns
  let bookieResults = -betData.backBetStake
  console.log('bookieResults', bookieResults);
  // Exchange Returns
  let exchangeResults = layStake / 100 * (100 - betData.exchangecommision)
   // Profit
   let x = (betData.backBetOdds - 1)
   console.log('x', x);
   let y = betData.backBetStake 
   let z = (betData.layBetOdds - 1) * layStake
   console.log('z', z);
   let totalProfit = x * y - z
   return {bookieResults, exchangeResults, totalProfit}
}


// FREE BET SNR
//  BOOKIE
export const bookieSnrResultData = (betData, layStake, liability) => {
  console.log('bookieResult', betData);
  // Bookie Returns
  let totalReturn = (betData.backBetOdds * betData.backBetStake);
  let bookieResults = totalReturn - betData.backBetStake
  // Exchange Returns
  let exchangeResults = -liability
  // Profit
  let x = (betData.backBetOdds - 1)
  console.log('x', x);
  let y = betData.backBetStake 
  let z = (betData.layBetOdds - 1) * layStake
  console.log('z', z);
  let totalProfit = x * y - z
  return {bookieResults, exchangeResults, totalProfit}
}
// EXCHANGE
export const exchangeSnrResultData = (betData, layStake) => {
  console.log('exchangeResult', betData);
  // Bookie Returns
   let bookieResults = 0
   console.log('bookieResults', bookieResults);
  // Exchange Returns
  let exchangeResults = layStake / 100 * (100 - betData.exchangecommision)
   // Profit
   let x = (betData.backBetOdds - 1)
   console.log('x', x);
   let y = betData.backBetStake 
   let z = (betData.layBetOdds - 1) * layStake
   console.log('z', z);
   let totalProfit = x * y - z
   return {bookieResults, exchangeResults, totalProfit}
}


// FREE BET SR STAKE RETURNED
//  BOOKIE
export const bookieStakeReturnedResultData = (betData, layStake, liability) => {
  console.log('bookieResult', betData);
  // Bookie Returns
  let bookieResults = (betData.backBetOdds * betData.backBetStake)
  // Exchange Returns
  let exchangeResults = -liability
  // Profit
  let totalProfit = bookieResults + exchangeResults
  return { bookieResults, exchangeResults, totalProfit }
}

// EXCHANGE
export const exchangeStakeReturnedResultData = (betData, layStake) => {
  console.log('exchangeResult', betData);
  // Bookie Returns
   let bookieResults = 0
  // Exchange Returns
  let exchangeResults = layStake / 100 * (100 - betData.exchangecommision)
   // Profit
   let x = (betData.backBetOdds - 1)
   console.log('x', x);
   let y = betData.backBetStake 
   let z = (betData.layBetOdds - 1) * layStake
   console.log('z', z);
   let totalProfit = exchangeResults
   return {bookieResults, exchangeResults, totalProfit}
}