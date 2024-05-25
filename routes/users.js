const { sendAllUsers, sendUserById, sendUserCreated, sendUserUpdated, sendUserDeleted } = require("../controllers/users");
const { checkAuth } = require("../middlewares/auth");
const { findAllUsers, findUserById, createUser, updateUser, deleteUser, hashPassword } = require("../middlewares/users");

const usersRouter = require("express").Router();

usersRouter.get("/users", findAllUsers, sendAllUsers);
usersRouter.get("/users/:id", findUserById, sendUserById);
usersRouter.post(
    "/users",
    findAllUsers,
    hashPassword,
    checkAuth,
    createUser,
    sendUserCreated
  ); 

  usersRouter.put(
    "/users/:id",
    updateUser,
    checkAuth,
    sendUserUpdated
  ); 

  usersRouter.delete(
    "/users/:id", 
    deleteUser,
    sendUserDeleted
  ); 

module.exports = usersRouter;
