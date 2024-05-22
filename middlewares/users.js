const users = require("../models/users");

const findAllusers = async (req, res, next) => {
    req.usersArray = await users.find({});
    next();
};

module.exports = findAllusers;