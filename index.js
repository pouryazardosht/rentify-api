const express = require("express");
const dotenv = require("dotenv");
const mainRouter = require("./src/app.router");
const cors = require("cors");
const SwaggerDocument = require("./src/config/swagger.config")

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;
const baseURL = process.env.BASE_URL;
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(
    cors({
        origin: "*",
        methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    })
);
require("./src/config/mongoose.config");
SwaggerDocument(app)

app.use(mainRouter);
app.listen(port, () => {
    console.log(`server: ${baseURL}:${port}`);
});
