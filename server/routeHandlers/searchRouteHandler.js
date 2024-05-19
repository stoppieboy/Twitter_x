const router = require('express').Router()
const search = require("../controllers/search")

router
    .get("/user", search.searchUser)


module.exports = router