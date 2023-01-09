const express = require('express');
const router = express.Router();
const companyController = require("../controller/companyController");
const { asyncHandler } = require('../middleware/services');
// const asyncHandler = fn => (req, res, next) => {
//     return Promise
//         .resolve(fn(req, res, next))
//         .catch(next);
//   };

  router.post("/register",asyncHandler(companyController.register));

module.exports = router;