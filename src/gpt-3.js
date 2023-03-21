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
        max_tokens: 2000
    }
}

async function runCompletion(prompt) {
    try {
        const completion = await openai.createCompletion(getCompletionStructure(prompt))
        return completion.data.choices[0]
    } catch (error) {
        throw error
    }
}

module.exports = {
    runCompletion
}
