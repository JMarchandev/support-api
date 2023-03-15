const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const { getResponseSupport } = require('./controllers/askRequest');
const uri = process.env.MONGO_DB_URI
const mongoose = require('mongoose');

mongoose.connect(uri);
const database = mongoose.connection

database.on('error', (error) => {
    console.log(error)
})

database.once('connected', () => {
    console.log('Database Connected');
})
const app = express();

app.use(helmet());
app.use(bodyParser.json());
app.use(cors());
app.use(morgan('dev'));

app.get('/api/v1', (req, res) => {
    res.send('api v1')
})

app.post('/use/ask-request', async (req, res) => {
    res.send(await getResponseSupport(req.body.question))
})

app.listen(3001, async () => {
    console.log('listening on port 3001');
});