require('dotenv').config()
const { Configuration, OpenAIApi } = require('openai')


const getConfig = () => {
    return new Configuration({
        apiKey: process.env.OPENAI_KEY,
    })
}

const openai = new OpenAIApi(getConfig())

const getCompletionStructure = (prompt) => {
    return {
        model: "text-davinci-003",
        prompt,
    }
}

async function runCompletion(prompt) {
    const completion = await openai.createCompletion(getCompletionStructure(prompt))
    return completion.data.choices[0]
}

module.exports = {
    runCompletion
}
