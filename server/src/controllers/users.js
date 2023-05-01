import bcrypt from 'bcrypt';
import {
  findAllUsers,
  findUserByEmail,
  findUserById,
  createUser,
  updateUser,
  deleteUserById,
} from '../domain/users.js';
import {
  EVENT_MESSAGES,
  sendDataResponse,
  sendMessageResponse,
} from '../utils/responses.js';
import {
  BadRequestEvent,
  CreateEventError,
  MissingFieldEvent,
} from '../event/utils/errorUtils.js';
import { myEmitterErrors } from '../event/errorEvents.js';
import { myEmitterUsers } from '../event/userEvents.js';

const hashRate = 8;

export const getAllUsers = async (req, res) => {
  console.log('user', req.user);
  try {
    //
    const foundUsers = await findAllUsers();

    if (!foundUsers) {
      return res.status(404).json({ message: `No users found`, code: `404` });
    }

    return res.status(201).json({
      message: `Found ${foundUsers.length} users`,
      code: `201`,
      data: foundUsers,
    });
    //
  } catch (error) {
    //
    return res.status(500).json({
      error: error.message,
      message: `Internal server error`,
      code: `500`,
    });
  }
};

export const createNewUser = async (req, res) => {
  const { email, password } = req.body;
  const lowercaseEmail = email.toLowerCase();

  try {
    if (!lowercaseEmail || !password) {
      //
      const missingField = new MissingFieldEvent(
        null,
        'Registration: Missing Field/s event'
      );
      myEmitterErrors.emit('error', missingField);
      return sendMessageResponse(res, missingField.code, missingField.message);
    }

    const foundUser = await findUserByEmail(lowercaseEmail);

    if (foundUser) {
      return sendDataResponse(res, 400, { email: EVENT_MESSAGES.emailInUse });
    }

    const hashedPassword = await bcrypt.hash(password, hashRate);

    const createdUser = await createUser(lowercaseEmail, hashedPassword);

    if (!createdUser) {
      const notCreated = new BadRequestEvent(
        'visitor',
        EVENT_MESSAGES.badRequest,
        EVENT_MESSAGES.createUserFail
      );
      myEmitterErrors.emit('error', notCreated);
      return sendMessageResponse(res, notCreated.code, notCreated.message);
    }

    delete createdUser.password;

    myEmitterUsers.emit('register', createdUser);
    return sendDataResponse(res, 201, { user: createdUser });
    //
  } catch (err) {
    //
    const error = new CreateEventError('visitor', 'register user');
    myEmitterErrors.emit('error', error);
    throw err;
  }
};

export const updateUserById = async (req, res) => {
  console.log('updateUserById');
  let { email, username, firstname, lastname, biography, profileImgUrl } =
    req.body;
  const userId = Number(req.params.id);

  // TODO: all these need to actually care what auth checks
  try {
    //
    const foundUser = await findUserById(userId);

    if (!foundUser) {
      return res.status(404).json({
        message: `No user found with id: ${userId}`,
        code: `404`,
      });
    }

    if (
      email === '' ||
      username === '' ||
      firstname === '' ||
      lastname === '' ||
      biography === '' ||
      profileImgUrl === ''
    ) {
      email = foundUser.email;
      username = foundUser.username;
      firstname = foundUser.firstname;
      lastname = foundUser.lastname;
      biography = foundUser.biography;
      profileImgUrl = foundUser.profileImgUrl;
    }

    const updatedUser = await updateUser(
      userId,
      email,
      username,
      firstname,
      lastname,
      biography,
      profileImgUrl
    );

    console.log('updaed', updatedUser);

    return res.status(201).json({
      message: `User ${updatedUser.email} updated successfully`,
      code: `201`,
      data: updatedUser,
    });

    //
  } catch (error) {
    //
    return res.status(500).json({
      error: error.message,
      message: `Internal server error`,
      code: `500`,
    });
  }
};

export const deleteUser = async (req, res) => {
  console.log('delete user');
  const userId = Number(req.params.id);

  try {
    if (req.user.role !== `ADMIN`) {
      return res.status(409).json({
        error: `Missing Authorization to perform request`,
        code: `409`,
      });
    }

    const deletedUser = await deleteUserById(userId);

    return res.status(201).json({
      message: `User ${deletedUser.email} deleted successfully`,
      code: `200`,
      data: deletedUser,
    });
  } catch (error) {
    return res.status(500).json({
      error: error.message,
      message: `Internal server error`,
      code: `500`,
    });
  }
};

export const getUserById = async (req, res) => {
  console.log('getting by id');
  const userId = Number(req.params.id);

  try {
    //
    const foundUser = await findUserById(userId);
    console.log('found user: ', foundUser);

    if (!foundUser) {
      return res.status(404).json({
        error: `User with id: ${userId} not found`,
        code: `409`,
      });
    }

    return res.status(201).json({
      message: `User ${foundUser.username} found successfully`,
      code: `200`,
      data: foundUser,
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
