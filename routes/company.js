const express = require('express');
const router = express.Router()

const { createCompany, getCompanyById, updateCompany } = require('../controllers/companyController');

router.post('/', async (req, res) => {
    try {
        const companyToSave = await createCompany(req.body)
        res.status(200).json(companyToSave)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})

router.get('/:id', async (req, res) => {
    try {
        const company = await getCompanyById(req.params.id)
        res.json(company)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

router.put('/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const dataToUpdate = req.body;

        const updatedCompany = await updateCompany(id, dataToUpdate)

        res.send(updatedCompany)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
})

module.exports = router;