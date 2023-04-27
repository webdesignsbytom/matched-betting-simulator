const { Prisma } = require('@prisma/client');
const prisma = require('../utils/prisma');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const findAllSportEvents = () =>
  prisma.sportevent.findMany({
    orderBy: {
      createdAt: 'desc',
    },
  });

const findEventByType = (sportType) =>
  prisma.sportevent.findMany({
    where: {
      sportType: sportType,
    },
  });

const createNewEvent = (title, sportType, betTypes, competitors) =>
  prisma.sportevent.create({
    data: {
      title: title,
      sportType: sportType,
      betTypes: betTypes,
      competitors: competitors,
    }
  });

module.exports = {
  findAllSportEvents,
  findEventByType,
  createNewEvent,
};
