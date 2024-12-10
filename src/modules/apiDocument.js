const dotenv = require("dotenv");
dotenv.config();

const baseURL = process.env.BASE_URL;
const port = process.env.PORT;
const apiDocument = (req, res) => {
  res.json({
    user: `${baseURL}:${port}/user`,
    house: `${baseURL}:${port}/house`,
  });
};

module.exports = apiDocument;
