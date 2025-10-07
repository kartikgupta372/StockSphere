const mongoose = require("mongoose");
const { Schema } = mongoose;
const PositionsSchema = new Schema({
  name: String,
  qty: Number,
  avg: Number,
  price: Number,
  net: Number,
  day: Number,
  isLoss: Boolean,
});
const PositionsModel = mongoose.model("Positions", PositionsSchema);
module.exports = PositionsModel;
