const { model, Schema } = require("mongoose");

const patientsSchema = new Schema({
  fname: { type: String, required: true },
  lname: { type: String, required: true },
  sex: { type: String, required: true },
  phone: { type: String, required: true },
  address: { type: String, required: true },
  zip: { type: Number, required: true },
  dob: { type: Date, required: true },
});

module.exports = model("patients", patientsSchema);