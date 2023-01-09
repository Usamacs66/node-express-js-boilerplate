const mongoose = require("mongoose");

const companySchema = new mongoose.Schema({
  name: { type: String, default: null,unique:true,required: true },
  logo: { type: String, default: null },
  email: { type: String ,unique:true},
});
module.exports = company = mongoose.model("company", companySchema);