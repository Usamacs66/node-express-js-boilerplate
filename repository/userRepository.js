const db  = require("../model/index")
const bcrypt = require('bcryptjs')

const userRepository ={
  
    getByEmail: async (email)=>{
        return await db.user.findOne({ email }).populate("company")
    },

    getById: async (id)=>{
        return await db.user.findOne({ id }).populate("company")
    },

    save: async (user)=>{
 
        encryptedPassword = await bcrypt.hash(user.password, 10);

        const registeredUser = await db.user.create({
          first_name:user.first_name,
          last_name:user.last_name,
          email: user.email.toLowerCase(), // sanitize: convert email to lowercase
          password: encryptedPassword,
          company:user.company
        }).then(x=> db.user.findOne({ email:x.email }).populate("company"))

        //const a = db.user.find({email:registeredUser.email}).populate("company");

        return registeredUser;
    }
}
module.exports = userRepository;