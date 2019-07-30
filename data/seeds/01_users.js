/* eslint-disable func-names */
const generatePassword = require("../../api/middleware/generatePassword");

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("users")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("users").insert([
        {
          id: 1,
          email: "jj@gmail.com",
          password: generatePassword("password")
        },
        {
          id: 2,
          email: "tb@gmail.com",
          password: generatePassword("password")
        },
        {
          id: 3,
          email: "hj@gmail.com",
          password: generatePassword("password")
        }
      ]);
    });
};
