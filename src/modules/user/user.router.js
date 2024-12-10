const { Router } = require("express");
const { whoami } = require("./user.controller");
const dotenv = require("dotenv");
const UserController = require("./user.controller");
dotenv.config();
const baseURL = process.env.BASE_URL;
const port = process.env.PORT;
const UserRouter = Router();

UserRouter.get("/", (req, res) => {
  res.json({
    whoami: `${baseURL}:${port}/user/whoami`,
  });
});

UserRouter.get("/whoami", whoami);

module.exports = UserRouter;
