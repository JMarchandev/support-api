const express = require('express');
const { getResponseSupport } = require('../controllers/askRequest');
const CompanyModel = require('../models/company')
const router = express.Router()

router.get('/', (req, res) => {

})

router.post('/create', async (req, res) => {
    const { name, prompt_spec } = req.body
    const newCompany = new CompanyModel({ name, prompt_spec })

    try {
        const companyToSave = await newCompany.save();
        res.status(200).json(companyToSave)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})

router.put('/', async (req, res) => {
    res.send(await getResponseSupport(req.body.question))
})

module.exports = router;