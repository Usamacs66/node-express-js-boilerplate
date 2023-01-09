const db  = require("../model/index");

const companyRepository ={
    
    getByEmail: async (email)=>{
        return await db.company.findOne({ email }).exec();
    },

    getByName: async (name)=>{
        return await db.company.findOne({ name });
    },

    save: async (company)=>{

        const registeredCompany = await db.company.create({
          name:company.name,
          logo:'',
          email: company.email.toLowerCase(), // sanitize: convert email to lowercase
        });

        return registeredCompany;
    }
}
module.exports = companyRepository;