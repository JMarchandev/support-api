const express = require('express');
const { getResponseSupport } = require('../controllers/askRequest');

const router = express.Router()

router.post('/use/ask-request/:companyId', async (req, res) => {
    try {
        res.send(await getResponseSupport(req.params.companyId, req.body.question))
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
})

module.exports = router;