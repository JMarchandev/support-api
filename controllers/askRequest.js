const { runCompletion } = require("../src/gpt-3")

const headerContext = `Je souhaite realiser un support chat, pour ce faire je vais te donner des information support et je voudrais que tu me repondes en fonction de la question posé.`
const footerContext = `Je vais te poser des questions. Tu ne dois repondre aux question uniquement si tu connais la reponse. Tu ne dois pas inventer de reponder. Si tu ne connais pas la reponse dit simplement "je ne peux pas repondre a cette question"`
const bodyContext = [
    "Je vend un produit. c'est un téléphone qui n'est pas traduit dans les langues suivante: chinois, japonais et coréen.",
    "Les different colories sont blanc, noir et vert.",
    "Il n'y a pas de 5G.",
    "Ce téléphone est tactile"
]

const getContext = (body) => {
    return `${headerContext}\n\n${body.map(context => `- ${context}\n`).join('')}\n${footerContext}`
}

const getResponseSupport = async (question) => {
    const context = getContext(bodyContext)
    const prompt = `${context}\n\n${question}`
    return await runCompletion(prompt)
}

module.exports = {
    getResponseSupport
}