const express = require('express');
const { getResponseSupport } = require('../controllers/askRequest');
const CompanyModel = require('../models/company')
const router = express.Router()

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

router.get('/:id', async (req, res) => {
    try {
        const company = await CompanyModel.findById(req.params.id)
        res.json(company)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

router.put('/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const updatedData = req.body;
        const options = { new: true };

        const result = await CompanyModel.findByIdAndUpdate(
            id, updatedData, options
        )

        res.send(result)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
})

module.exports = router;