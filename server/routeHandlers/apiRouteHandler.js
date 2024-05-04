const router = require('express').Router()
const api = require('../controllers/api')

router
    .get('/data', api.data)
    .get('/test', api.test)
    .post('/testing', (req, res) => res.send('hi'))

module.exports = router