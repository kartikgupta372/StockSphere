const { model } = require("mongoose");
const { HoldingsSchema } = require("../schema/HoldingsSchema");
const HoldingsModel = new model("Holdings", HoldingsSchema);

module.exports = HoldingsModel;
