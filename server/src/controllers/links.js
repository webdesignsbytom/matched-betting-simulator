const { Prisma } = require('@prisma/client');
const prisma = require('../utils/prisma');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const { findAllLinks, createLink } = require('../domain/links');

const getAllLinks = async (req, res) => {
  console.log('getAllLinks');

  try {
    const allLinks = await findAllLinks();
    console.log('allLinks', allLinks);

    if (!allLinks) {
      return res
        .status(404)
        .json({ error: error.message, message: `No links found` });
    }
    //
    return res.status(201).json({
      message: `Found ${allLinks.length} links`,
      code: `201`,
      data: allLinks,
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

const createNewLink = async (req, res) => {
  console.log('gettingallLinks');

  const {
    company,
    betType,
    qualifyingBet,
    minBet,
    potentialProfit,
    url,
    endDate,
    desc,
  } = req.body;

  if (
    !company ||
    !betType ||
    !qualifyingBet ||
    !minBet ||
    !potentialProfit ||
    !url ||
    !endDate ||
    !desc
  ) {
    return res
      .status(404)
      .json({
        message: `Missing fields in request body`,
        error: error.message,
      });
  }

  try {
    //
    const newLink = await createLink(
      company,
      betType,
      qualifyingBet,
      minBet,
      potentialProfit,
      url,
      endDate,
      desc
    );

    console.log('newLink', newLink);

    if (!newLink) {
      return res
      .status(404)
      .json({
        message: `Failed to create new link`,
        error: error.message,
      });
    }

    return res.status(201).json({
      message: `Link created successfully`,
      code: `201`,
      data: newLink,
    });

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
  getAllLinks,
  createNewLink,
};
