const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

function SwaggerDocument(app) {
    const options = {
        definition: {
            openapi: "3.1.0",
            info: {
                title: "Rentify Api",
                version: "0.1.0",
                description:
                    "Platform for Renting Houses",
            },
            contact: {
                name: "Pourya Zardosht",
                email: "pooriyazardosht.812@gmail.com",
                url: "https://rentify.liara.run/"
            },
            servers: [
                {
                    url: "http://localhost:8009",
                },
            ],
        },
        apis: [process.cwd() + "/src/modules/**/*.swagger.js"]
    };
    const specs = swaggerJsDoc(options);
    app.use(
        "/api-docs",
        swaggerUi.serve,
        swaggerUi.setup(specs, {explorer: true})
    );

}

module.exports = SwaggerDocument
