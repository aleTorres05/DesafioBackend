const createError = require("http-errors");
const Users = require("../models/users.model");
const encrypt = require("../lib/encrypt");

async function create(userData) {
  const userFound = await Users.findOne({ email: userData.email });

  if (userFound) {
    throw createError(409, "Email already in use");
  }

  userData.password = await encrypt.encrypt(userData.password);

  const newUser = await Users.create(userData);

  return newUser;
}

async function getAll() {
  const allUsers = await Users.find();
  return allUsers;
}

async function getById(id) {
  return await Users.findById(id);
}

async function deleteById(id) {
  return Users.findByIdAndDelete(id);
}

async function updateById(id, newUserData) {
  const userUpdated = await Users.findOneAndUpdate(id, newUserData);
  return userUpdated;
}

module.exports = {
  create,
  getAll,
  getById,
  deleteById,
  updateById,
};
