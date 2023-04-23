const { Prisma } = require('@prisma/client');
const prisma = require('../utils/prisma');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const { findAllSportEvents, findEventByType, createNewEvent } = require('../domain/events');

const getAllSportEvents = async (req, res) => {
  console.log('getting all sports');

  const { sportType } = req.query;
  console.log('sportType', sportType);

  try {
    if (sportType) {
      //
      console.log('sportType', sportType);
      const foundSportType = await findEventByType(sportType);
      console.log('found sportType', foundSportType);

      if (!foundSportType) {
        return res.status(404).json({
          error: error.message,
          message: `No events found for the sport ${sportType}`,
        });
      }

      return res.status(201).json({
        message: `Found ${foundSportType.length} ${sportType} events`,
        code: `201`,
        data: foundSportType,
      });
    }

    const foundSports = await findAllSportEvents();
    console.log('found:', foundSports);

    if (!foundSports) {
      return res
        .status(404)
        .json({ error: error.message, message: `No events found` });
    }

    
    return res.status(201).json({
      message: `Found ${foundSports.length} events`,
      code: `201`,
      data: foundSports,
    });
    //
  } catch (error) {
    //
    return res.status(500).json({
      message: `Internal server error`,
      code: `500`,
      error: error.message,
    });
  }
};

const createNewSportEvent = async (req, res) => {
  console.log('creating new sport event');
  const { title, sportType, betTypes, competitors } = req.body;
  console.log('title', title, sportType, betTypes, competitors);
  try {
    if (!title || !sportType || !betTypes || !competitors) {
      return res
        .status(404)
        .json({ error: error.message, message: `Missing fields in bod` });
    }

    const createdEvent = await createNewEvent(
      title,
      sportType,
      betTypes,
      competitors
    );

    if (!createdEvent) {
      return res
        .status(404)
        .json({ error: error.message, message: `Failed to create event ${title}` });
    }

    return res.status(201).json({
      message: `Event ${createdEvent.title} created successfully`,
      code: `201`,
      data: createdEvent,
    });
    //
  } catch (error) {
    //
    return res.status(500).json({
      message: `Internal server error`,
      code: `500`,
      error: error.message,
    });
  }
};

module.exports = {
  getAllSportEvents,
  createNewSportEvent,
};
