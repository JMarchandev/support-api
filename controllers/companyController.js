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

const getCompanyPromptSpec = async (companyId) => {
    const { prompt_spec } = await getCompanyById(companyId)
    return prompt_spec
}

const headerContext = `Je souhaite realiser un support chat, pour ce faire je vais te donner des information support et je voudrais que tu me repondes en fonction de la question posé.`
const footerContext = `Je vais te poser des questions. Tu ne dois repondre aux question uniquement si tu connais la reponse. Tu ne dois pas inventer de reponder. Si tu ne connais pas la reponse dit simplement "je ne peux pas repondre a cette question"`

const getCompanyFullPrompt = async (companyId) => {
    const promptSpecs = await getCompanyPromptSpec(companyId)
    return `${headerContext}\n\n${promptSpecs.map(promptSpec => `- ${promptSpec}\n`).join('')}\n${footerContext}`
}

module.exports = {
    createCompany,
    getCompanyById,
    updateCompany,
    getCompanyPromptSpec,
    getCompanyFullPrompt
}