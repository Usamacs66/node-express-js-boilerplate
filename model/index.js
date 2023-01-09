const mongoose = require("mongoose");
const db = {};
db.mongoose = mongoose;

db.user = require("./user");
db.company = require("./company");

module.exports = db; 