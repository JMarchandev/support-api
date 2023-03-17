const express = require('express');
const { getResponseSupport } = require('../controllers/askRequest');

const router = express.Router()

router.post('/use/ask-request/:companyId', async (req, res) => {
    res.send(await getResponseSupport(req.params.companyId, req.body.question))
})

module.exports = router;