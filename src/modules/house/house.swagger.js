/**
 * @swagger
 * tags:
 *  name: House
 *  description: House management
 */

/**
 * @swagger
 * components:
 *  schemas:
 *      House:
 *          type : object
 *          required:
 *              -id
 *              -title
 *              -tag
 *              -kind
 *              -mortgageAmount
 *              -rentAmount
 *              -address
 *          properties:
 *              id:
 *                  type: number
 *                  description: id of house
 *              title:
 *                  type: string
 *              tag:
 *                  type: string
 *              kind:
 *                  type: string
 *              mortgageAmount:
 *                  type: string
 *              rentAmount:
 *                  type: string
 *              address:
 *                  type: string
 *          example:
 *              id: 1
 *              title: house name
 *              tag: villa
 *              kind: kind of house
 *              mortgageAmount: 000
 *              rentAmount: 000
 *              address: house address
 *
 *
 *
 */

/**
 * @swagger
 * /house/list:
 *  get:
 *      summary: Get list of all houses
 *      tags: [House]
 *      parameters:
 *          - in: query
 *            name: tag
 *            type: string
 *      responses:
 *          200:
 *              description: The list of the houses
 *
 * /house/list/{id}:
 *  get:
 *      summary: Get list of specific house
 *      tags: [House]
 *      parameters:
 *          - in: path
 *            name : id
 *            type: string
 *      responses:
 *          200:
 *              description: Get house by id

 *          404:
 *              description: House not found
 */

/**
 * @swagger
 * /house/create:
 *  post:
 *      summary: Create new house
 *      tags: [House]
 *      requestBody:
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/House'
 *              application/x-www-form-urlencoded:
 *                  schema:
 *                      $ref: '#/components/schemas/House'
 *      responses:
 *          201:
 *              description: House Created
 *          500:
 *              description: Some server error
 */