const userRepository = require('../repository/userRepository');
const httpError = require('../middleware/error');
const jwt = require("jsonwebtoken");
const bcrypt = require('bcryptjs');
const companyRepository = require('../repository/companyRepository');

const authenticationManager ={
     
    register: async (user,companyId)=>{
       
        if (!(user && user.email && user.password && user.first_name && user.last_name)) {
            throw httpError.badRequestError("All inputs are required");
        }
        
        if(!companyId){
          throw httpError.badRequestError("company id is not found");
        }

        const oldUser = await userRepository.getByEmail(user.email);

        if (oldUser) {
          throw httpError.conflict("User Already Exist. Please Login");
        }

        user.company = companyId;
        user = await userRepository.save(user);
        const token = await authenticationManager.generateToken(user);
        user.token = token;
        return user;
    },

    signin : async (email,password)=>{
        if (!(email && password)) {
            throw httpError.badRequestError("email or password is missing");
          }

          const user = await userRepository.getByEmail(email);

          if (!(user && (await bcrypt.compare(password, user.password)))) {
              throw httpError.badRequestError("Invalid Credentials");
          }
        const token = await authenticationManager.generateToken(user);
        user.token = token;
        return user;
    },

    generateToken: async (user)=>{
         const token = jwt.sign(
            { user_id: user._id, email:user.email },
            process.env.TOKEN_KEY,
            {
              expiresIn: "2h",
            }
          );
          return token;
    }
}
module.exports = authenticationManager;