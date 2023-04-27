import dbClient from '../utils/dbClient.js';

export const findAllUsers = () =>
  dbClient.user.findMany({
    include: {
      profile: true,
    },
  });

export const findUserByEmail = (email) =>
  dbClient.user.findFirst({
    where: {
      email: email,
    },
    include: {
      profile: true,
    },
  });

export const findUserById = (userId) =>
  dbClient.user.findFirst({
    where: {
      id: userId,
    },
    include: {
      profile: true,
    },
  });

export const createUser = (email, password) =>
  dbClient.user.create({
    data: {
      email: email,
      password: password,
      profile: {
        create: {},
      },
    },
    include: {
      profile: true,
    },
  });

export const updateUser = (
  userId,
  email,
  username,
  firstname,
  lastname,
  biography,
  profileImgUrl
) =>
  dbClient.user.update({
    where: {
      id: userId,
    },
    data: {
      email: email,
      username: username,
      profile: {
        update: {
          firstname,
          lastname,
          biography,
          profileImgUrl,
        },
      },
      profile: {
        create: {
          firstname,
          lastname,
          biography,
          profileImgUrl,
        },
      },
    },
    include: {
      profile: true,
    },
  });

export const deleteUserById = (userId) =>
  dbClient.user.delete({
    where: {
      id: userId,
    },
    include: {
      profile: true,
    },
  });

