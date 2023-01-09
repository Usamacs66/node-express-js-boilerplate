const express = require("express");
const session = require('express-session');
const authRoute = require('./route/authenticationRoute');
const userRoute = require('./route/userRoute');
const companyRoute = require('./route/companyRoute');
require("dotenv").config();
require("./config/database").connect();
const ErrorHandler = require('./middleware/errorHandler')

const app = express();

app.use(session({
  secret: '090078601',
  saveUninitialized: false,
  resave: false
}));

app.use(express.json());
app.use(function(req, res, next) {
    //console.log(res)
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
app.use("/api/auth",authRoute);
app.use("/api/user",userRoute);
app.use("/api/company",companyRoute);

app.use(ErrorHandler.pathNotFound);
app.use(ErrorHandler.apiErrorHandler);

module.exports = app;