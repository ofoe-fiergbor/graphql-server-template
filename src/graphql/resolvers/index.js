const registerResolver = require("./users/register");
const loginResolver = require("./users/login");
const getUserResolver = require("./users/getUser");

module.exports = {
  Mutation: {
    ...registerResolver.Mutation,
    ...loginResolver.Mutation
  },
  Query: {
    ...getUserResolver.Query,
  },
};
