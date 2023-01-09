const userManager = require('../manager/userManager');

exports.getById = async (req,res,next)=>{
    let id = req.query.id;
    res.status(200).json(await userManager.getById(id));
}