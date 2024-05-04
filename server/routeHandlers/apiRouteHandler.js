const router = require('express').Router()
const api = require('../controllers/api')

router
    .get('/', api.authenticate)
    .get('/test', api.test)
    .post('/testing', (req, res) => res.send('hi'))

module.exports = router