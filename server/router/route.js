const express = require("express");
const controller = require("../controller/userController.js")
const route = express.Router();

route.post("/createUser", controller.createUser);
route.get("/getAllUsers", controller.getAllUsers);
route.get("/getOneUser/:id", controller.getOneUser);

route.put("/updateUser/:id",controller.updateUser);
route.delete("/deleteUser/:id",controller.deleteUser);
module.exports = route;
