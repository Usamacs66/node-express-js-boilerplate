const userRepository = require('../repository/userRepository');
const httpError = require('../middleware/error');

const userManager = {
    getById:async(id) => {
          if(!id){
            throw httpError.badRequestError("please enter valid id");
          }

          return await userRepository.getById(id);
    }
}
module.exports = userManager;