const { Prisma } = require('@prisma/client');
const prisma = require('../utils/prisma');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const findAllLinks = () =>
  prisma.link.findMany({
    orderBy: {
      createdAt: 'desc',
    },
  });

const createLink = (
  company,
  betType,
  qualifyingBet,
  minBet,
  potentialProfit,
  url,
  endDate,
  desc
) => prisma.link.create({
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

module.exports = {
  findAllLinks,
  createLink,
};
