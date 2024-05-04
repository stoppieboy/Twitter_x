const authRouter = require('express').Router()
const auth = require('../controllers/auth')

authRouter
    .post("/", auth.signup)
    .post("/login", auth.login)

module.exports = authRouter