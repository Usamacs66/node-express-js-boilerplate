const authenticationManager = require('../manager/authenticationManager');
const companyManager = require('../manager/companyManager')

exports.register = async (req, res,next) => {
   const company = await companyManager.register(req.body.company);
   const user = await authenticationManager.register(req.body.user,company._id);
   res.status(201).json(user);

}

exports.login = async (req, res,next) => {

      const { email, password } = req.body;
      const user = await authenticationManager.signin(email,password);
      res.status(200).json(user);

  }