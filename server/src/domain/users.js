const { Prisma } = require('@prisma/client');
const prisma = require('../utils/prisma');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const findAllUsers = () =>
  prisma.user.findMany({
    include: {
      profile: true,
    },
  });

const findUserByEmail = (email) =>
  prisma.user.findFirst({
    where: {
      email: email,
    },
    include: {
      profile: true,
    },
  });

const findUserById = (userId) =>
  prisma.user.findFirst({
    where: {
      id: userId,
    },
    include: {
      profile: true,
    },
  });

const createUser = (email, password) =>
  prisma.user.create({
    data: {
      email: email,
      password: password,
      profile: {
        create: {
        }
      }
    },
    include: {
      profile: true,
    },
  });

// TODO: will need to add passwird
const updateUser = (
  userId,
  email,
  username,
  firstname,
  lastname,
  biography,
  profileImgUrl
) =>
  prisma.user.update({
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

const deleteUserById = (userId) =>
  prisma.user.delete({
    where: {
      id: userId,
    },
    include: {
      profile: true,
    },
  });

module.exports = {
  findAllUsers,
  findUserByEmail,
  findUserById,
  createUser,
  updateUser,
  deleteUserById,
};
