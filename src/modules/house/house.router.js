const { Router } = require("express");
const dotenv = require("dotenv");
const { getHouse, createHouse, getById } = require("./house.controller");
dotenv.config();
const baseURL = process.env.BASE_URL;
const port = process.env.PORT;
const router = Router();

router.get("/", (req, res) => {
  res.json({
    "get house": `${baseURL}:${port}/house/list`,
    "get house by id": `${baseURL}:${port}/house/list/id`,
    "create house": `${baseURL}:${port}/house/create`,
  });
});

router.get("/list", getHouse);
router.get("/list/:id", getById);
router.post("/create", createHouse);

module.exports = {
  HouseRouter: router,
};
