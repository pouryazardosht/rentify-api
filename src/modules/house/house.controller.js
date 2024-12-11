const HouseModel = require("./house.model");

const getHouse = async (req, res) => {
  const houses = await HouseModel.find();
  res.send({
    statusCode: 200,
    documentCount: houses.length,
    houses,
  });
};

const createHouse = async (req, res) => {
  try {
    const { id, title, kind, mortgageAmount, rentAmount, address } = req.body;
    const newHouse = await HouseModel.create({
      id,
      title,
      kind,
      mortgageAmount,
      rentAmount,
      address,
    });
    res.send(newHouse);
  } catch (error) {
    res.json({
      message: error.message || "server error",
    });
  }
};

const getById = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await HouseModel.findOne({ id });
    res.send(result);
  } catch (error) {
    res.json({
      message: error.message || "server error",
    });
  }
};
module.exports = { getHouse, createHouse, getById };
