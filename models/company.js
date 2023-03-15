const mongoose = require('mongoose');

const companySchema = new mongoose.Schema({
    name: {
        required: true,
        type: String
    },
    prompt_spec: {
        required: true,
        type: Array
    }
})

module.exports = mongoose.model('Company', companySchema)