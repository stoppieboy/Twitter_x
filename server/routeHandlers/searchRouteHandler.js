const router = require('express').Router()
const search = require("../controllers/search")

router
    .get("/user", search.searchUser)
    .get("/test", search.test)

module.exports = router