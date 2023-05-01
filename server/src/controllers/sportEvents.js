import {
  findAllSportEvents,
  findSportEventByType,
} from '../domain/sportEvents.js';
import { myEmitterErrors } from '../event/errorEvents.js';
import { BadRequestEvent, NotFoundEvent, ServerErrorEvent } from '../event/utils/errorUtils.js';
import {
  EVENT_MESSAGES,
  sendDataResponse,
  sendMessageResponse,
} from '../utils/responses.js';

export const getAllSportEvents = async (req, res) => {
  try {
    //
    const foundEvents = await findAllSportEvents();

    if (!foundEvents) {
      const notFound = new NotFoundEvent(
        req.user,
        EVENT_MESSAGES.notFound,
        EVENT_MESSAGES.notFoundSportEvent
      );
      myEmitterErrors.emit('error', notFound);
      return sendMessageResponse(res, notFound.code, notFound.message);
    }

    // myEmitterUsers.emit('get-all-sport-events', req.user);
    return sendDataResponse(res, 200, { sportEvents: foundEvents });
  } catch (err) {
    // Error
    const serverError = new ServerErrorEvent(req.user, `Get all sport events`);
    myEmitterErrors.emit('error', serverError);
    sendMessageResponse(res, serverError.code, serverError.message);
    throw err;
  }
};

export const getSportEventsByType = async (req, res) => {
  console.log('getting all sports');

  const { sportType } = req.query;
  console.log('sportType', sportType);

  try {
    const foundEvents = await findSportEventByType();

    if (!foundEvents) {
      const notFound = new NotFoundEvent(
        req.user,
        EVENT_MESSAGES.notFound,
        EVENT_MESSAGES.notFoundSportEvent
      );
      myEmitterErrors.emit('error', notFound);
      return sendMessageResponse(res, notFound.code, notFound.message);
    }

    // myEmitterUsers.emit('get-all-sport-events', req.user);
    return sendDataResponse(res, 200, { sportEvents: foundEvents });
    //
  } catch (error) {
    // Error
    const serverError = new ServerErrorEvent(
      req.user,
      `Get sport events by type`
    );
    myEmitterErrors.emit('error', serverError);
    sendMessageResponse(res, serverError.code, serverError.message);
    throw err;
  }
};

export const createNewSportEvent = async (req, res) => {
  console.log('creating new sport event');
  const { title, sportType, betTypes, competitors } = req.body;
  console.log('title', title, sportType, betTypes, competitors);

  try {
    //
    if (!title || !sportType || !betTypes || !competitors) {
      return res
        .status(404)
        .json({ error: error.message, message: `Missing fields in bod` });
    }

    const createdEvent = await createNewSportEvent(
      title,
      sportType,
      betTypes,
      competitors
    );

    if (!createdEvent) {
      const notCreated = new BadRequestEvent(
        req.user,
        EVENT_MESSAGES.badRequest,
        EVENT_MESSAGES.createSportEventFail
      );
      myEmitterErrors.emit('error', notCreated);
      return sendMessageResponse(res, notCreated.code, notCreated.message);
    }

    // myEmitterUsers.emit('create-new-sport-events', req.user);
    return sendDataResponse(res, 200, { newEvent: createdEvent });
    //
  } catch (error) {
    // Error
    const serverError = new ServerErrorEvent(
      req.user,
      `Create new sport event`
    );
    myEmitterErrors.emit('error', serverError);
    sendMessageResponse(res, serverError.code, serverError.message);
    throw err;
  }
};
