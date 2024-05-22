const sendAllusers = require("../controllers/users");
const findAllusers = require("../middlewares/users");


const usersRouter = require("express").Router();

usersRouter.get("/users", findAllusers, sendAllusers);

module.exports = usersRouter;