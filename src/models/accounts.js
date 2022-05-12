const { model, Schema } = require("mongoose");

const accountsSchema = new Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  type: { type: String, required: true },
});

module.exports = model("accounts", accountsSchema);