const Users = require('../models/usersModel.js');

module.exports = function validateUser(req, res, next) {
    Users.getAll()
        .then(allUsers => {
            req.allUsers = allUsers;
            next()
        })
        .catch(err => {
            console.log(err);
        });
};
