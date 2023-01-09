const companyManager = require('../manager/companyManager');

exports.register = async (req, res,next) => {
   
   const company = await companyManager.register(req.body);
   res.status(201).json(company);

}