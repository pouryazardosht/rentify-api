const express = require("express");
const dotenv = require("dotenv");
const mainRouter = require("./src/app.router");
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;
const baseURL = process.env.BASE_URL;
app.use(express.json());
app.use(express.urlencoded({extended: true}));
require("./src/config/mongoose.config")
app.use(mainRouter);
app.listen(port, () => {
    console.log(`server: ${baseURL}:${port}`);
});
