const router = require('express').Router()
const api = require('../controllers/api')

router
    .get('/data', api.data)
    .get('/test', api.test)
    .post('/testing', (req, res) => res.send('hi'))
    .post('/tweet', api.postTweet)
    .post('/follow', api.follow)
    .post('/unfollow', api.unfollow)

module.exports = router