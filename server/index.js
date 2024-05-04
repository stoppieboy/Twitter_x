// library requires
const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const helmet = require('helmet')
require('dotenv').config()

// custom requires
const apiRouteHandler = require('./routeHandlers/apiRouteHandler')
const authRouteHandler = require('./routeHandlers/authRouteHandler')
const authorize = require('./middlewares/authorize')

// Constants
const PORT = process.env.PORT || 3000
const app = express()

// middlewares
// app.use(express.urlencoded())
app.use(express.json())
app.use(cors())
app.use(helmet())
app.use(morgan('dev'))
app.use("/api", authorize)

// routes
app.use("/auth", authRouteHandler)
app.get('/api', (req, res) => res.send('hi'))
// app.use("/api", apiRouteHandler)


app.listen(PORT, () => console.log(`server listening on port ${PORT}...`))