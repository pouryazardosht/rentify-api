const { AuthRouter } = require("./modules/auth/auth.routes");
const { Router } = require("express");
const mainRouter = Router();

mainRouter.use("/auth", AuthRouter);

module.exports = mainRouter;
