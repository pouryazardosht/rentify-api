const { Router } = require("express");
const dotenv = require("dotenv");
const { getHouse, createHouse } = require("./house.controller");
dotenv.config();
const baseURL = process.env.BASE_URL;
const port = process.env.PORT;
const router = Router();

router.get("/", (req, res) => {
  res.json({
    "get house": `${baseURL}:${port}/house/list`,
    "create house": `${baseURL}:${port}/house/create`,

  });
});

router.get("/list", getHouse);
router.post("/create", createHouse);

module.exports = {
  HouseRouter: router,
};
