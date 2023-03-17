const { runCompletion } = require("../src/gpt-3")
const { getCompanyPromptSpec } = require("./companyController")

const headerContext = `Je souhaite realiser un support chat, pour ce faire je vais te donner des information support et je voudrais que tu me repondes en fonction de la question posé.`
const footerContext = `Je vais te poser des questions. Tu ne dois repondre aux question uniquement si tu connais la reponse. Tu ne dois pas inventer de reponder. Si tu ne connais pas la reponse dit simplement "je ne peux pas repondre a cette question"`


const getFullPrompt = (promptSpecs) => {
    return `${headerContext}\n\n${promptSpecs.map(promptSpec => `- ${promptSpec}\n`).join('')}\n${footerContext}`
}

const getResponseSupport = async (companyId, question) => {
    const companyPromptSpec = await getCompanyPromptSpec(companyId)

    const fullPrompt = getFullPrompt(companyPromptSpec)
    const fullPromptWithQuestion = `${fullPrompt}\n\n${question}`

    return await runCompletion(fullPromptWithQuestion)
}

module.exports = {
    getResponseSupport
}