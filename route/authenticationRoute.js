const express = require('express');
const verifyToken = require("../middleware/auth");
const router = express.Router();
const authenticationController = require("../controller/authenticationController");
const { asyncHandler } = require('../middleware/services');

// const asyncHandler = fn => (req, res, next) => {
//     return Promise
//         .resolve(fn(req, res, next))
//         .catch(next);
//   };
router.post("/register",asyncHandler(authenticationController.register));
router.post("/login",[verifyToken],asyncHandler(authenticationController.login));

module.exports = router;