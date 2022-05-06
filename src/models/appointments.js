const { model, Schema } = require("mongoose");

const groupSchema = new Schema({
  status: { type: String, required: true },
  location: { type: String, required: true },
  doctor: { type: String, required: true },
  patient: { type: String, required: true },
  date: { type: Date, required: true },
  time: { type: String, required: true },
});

module.exports = model("group", groupSchema);