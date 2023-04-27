import dbClient from '../utils/dbClient.js';

export const findAllLinks = () =>
  dbClient.link.findMany({
    orderBy: {
      createdAt: 'desc',
    },
  });

export const createLink = (
  company,
  betType,
  qualifyingBet,
  minBet,
  potentialProfit,
  url,
  endDate,
  desc
) => dbClient.link.create({
  data: {
    company: company,
    betType: betType,
    qualifyingBet: qualifyingBet,
    minBet: minBet,
    potentialProfit: potentialProfit,
    url: url,
    endDate: endDate,
    desc: desc,
  }
});
