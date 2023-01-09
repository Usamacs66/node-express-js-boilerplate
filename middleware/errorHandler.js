const httpError = require('./error');

const ErrorHandler ={
  apiErrorHandler: (error,req,res,next)=>{
    if(res.headerSent){
        return  next(error);
      }
      res.status(error.code || 500);
      res.json({message:error.message || "general exception",error:error.code || 500});
  },

  pathNotFound:(req,res,next)=>{
    next(httpError.pathNotFound("path is not deifend"));
  }
  
}
module.exports = ErrorHandler;



// what "res.headerSent" do is explaind in given example 

// app.get('/', function (req, res) {
//   console.log(res.headersSent); // false
//   res.send('OK');
//   console.log(res.headersSent); // true
// });