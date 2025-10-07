const mongoose = require("mongoose");
const { Schema } = mongoose;
const OrderSchema = new Schema({
  name: String,
  qty: Number,
  mode: String,
  price: Number,
});
const OrderModel = mongoose.model("Order", OrderSchema);
module.exports = OrderModel;
