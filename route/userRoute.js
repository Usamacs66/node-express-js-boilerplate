const express = require('express');
const verifyToken = require("../middleware/auth");
const router = express.Router();
const userController = require("../controller/userController");
const { asyncHandler } = require('../middleware/services');
// const asyncHandler = fn => (req, res, next) => {
//     return Promise
//         .resolve(fn(req, res, next))
//         .catch(next);
//   };
router.get("/getById",asyncHandler(userController.getById));

module.exports = router;