const { sendAllUsers, sendUserById, sendUserCreated, sendUserUpdated, sendUserDeleted } = require("../controllers/users");
const { findAllUsers, findUserById, createUser, updateUser, deleteUser, hashPassword } = require("../middlewares/users");

const usersRouter = require("express").Router();

usersRouter.get("/users", findAllUsers, sendAllUsers);
usersRouter.get("/users/:id", findUserById, sendUserById);
usersRouter.post(
    "/users",
    findAllUsers,
    hashPassword,
    createUser,
    sendUserCreated
  ); 

  usersRouter.put(
    "/users/:id",
    updateUser,
    sendUserUpdated
  ); 

  usersRouter.delete(
    "/users/:id", 
    deleteUser,
    sendUserDeleted
  ); 

module.exports = usersRouter;
