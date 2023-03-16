const CompanyModel = require('../models/company');

const createCompany = async (data) => {
    const { name, prompt_spec } = data
    const newCompany = new CompanyModel({ name, prompt_spec })

    return await newCompany.save();
}

const getCompanyById = async (id) => {
    return await CompanyModel.findById(id)
}

const updateCompany = async (id, data) => {
    const options = { new: true };
    return await CompanyModel.findByIdAndUpdate(
        id, data, options
    )
}

module.exports = {
    createCompany,
    getCompanyById,
    updateCompany
}