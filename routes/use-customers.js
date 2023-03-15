const express = require('express');
const { getResponseSupport } = require('../controllers/askRequest');

const router = express.Router()

router.post('/use/ask-request', async (req, res) => {
    res.send(await getResponseSupport(req.body.question))
})

module.exports = router;