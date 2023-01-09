const companyRepository = require('../repository/companyRepository');
const httpError = require('../middleware/error');

const companyManager ={
     
    register: async (company)=>{
       
        if (!(company && company.email && company.name)) {
            throw httpError.badRequestError("All inputs are required");
        }
        
        const email = await companyRepository.getByEmail(company.email);
        const name = await companyRepository.getByName(company.name);

        if (email || name) {
          throw httpError.conflict("Company Already Exist. Please Try another one");
        }
       
        company = await companyRepository.save(company);
        return company;
    }
}
module.exports = companyManager;