const { model } = require("mongoose");
const { PositionsSchema } = require("../schema/PositionsSchema");
const PositionsModel = new model("Positions", PositionsSchema);

module.exports = PositionsModel;
