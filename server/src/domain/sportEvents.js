import dbClient from '../utils/dbClient.js';

export const findAllSportEvents = () =>
  dbClient.sportevent.findMany({
    orderBy: {
      createdAt: 'desc',
    },
  });

export const findSportEventByType = (sportType) =>
  dbClient.sportevent.findMany({
    where: {
      sportType: sportType,
    },
  });

export const createNewSportEvent = (title, sportType, betTypes, competitors) =>
  dbClient.sportevent.create({
    data: {
      title: title,
      sportType: sportType,
      betTypes: betTypes,
      competitors: competitors,
    }
  });

