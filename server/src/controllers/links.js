
import { findAllLinks, createLink } from '../domain/links.js'
import { myEmitterErrors } from '../event/errorEvents.js';
import { NotFoundEvent, ServerErrorEvent } from '../event/utils/errorUtils.js';
import { EVENT_MESSAGES, sendMessageResponse } from '../utils/responses.js';

export const getAllLinks = async (req, res) => {
  console.log('getAllLinks');

  try {
    const foundLink = await findAllLinks();

    if (!foundLink) {
      const notFound = new NotFoundEvent(
        'visitor',
        EVENT_MESSAGES.notFound,
        EVENT_MESSAGES.linkNotFound
      );
      myEmitterErrors.emit('error', notFound);
      return sendMessageResponse(res, notFound.code, notFound.message);
    }

    // myEmitterUsers.emit('get-all-sport-events', req.user);
    return sendDataResponse(res, 200, { allLinks: foundLink });
  } catch (err) {
    // Error
    const serverError = new ServerErrorEvent(req.user, `Get all links`);
    myEmitterErrors.emit('error', serverError);
    sendMessageResponse(res, serverError.code, serverError.message);
    throw err;
  }
};

export const createNewLink = async (req, res) => {
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

