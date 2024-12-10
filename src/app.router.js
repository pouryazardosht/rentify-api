const { Router } = require("express");
const apiDocument = require("./modules/apiDocument");
const UserRouter = require("./modules/user/user.router");
const { HouseRouter } = require("./modules/house/house.router");

const mainRouter = Router();

mainRouter.get("/", apiDocument);
mainRouter.use("/user", UserRouter);
mainRouter.use("/house", HouseRouter);

module.exports = mainRouter;
