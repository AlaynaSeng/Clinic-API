const { model, Schema } = require("mongoose");

const doctorsSchema = new Schema({
  fname: { type: String, required: true },
  lname: { type: String, required: true },
  phone: { type: String, required: true },
  specialty: { type: String, required: true },
});

module.exports = model("doctors", doctorsSchema);