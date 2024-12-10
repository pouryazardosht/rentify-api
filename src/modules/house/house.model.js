const { Schema, model } = require("mongoose");

const HouseSchema = new Schema(
  {
    id: { type: Number, required: true, unique: true },
    title: { type: String, required: true },
    kind: { type: String, required: true },
    mortgageAmount: { type: Number, required: true },
    rentAmount: { type: Number, required: true },
  },
  { timestamps: true }
);

const HouseModel = model("house", HouseSchema);

module.exports = HouseModel;
