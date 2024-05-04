// library requires
const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const helmet = require('helmet')
require('dotenv').config

// custom requires
const apiRouteHandler = require('./routeHandlers/apiRouteHandler')

// Constants
const PORT = process.env.PORT || 3000
const app = express()

// middlewares
app.use(cors())
app.use(helmet())
app.use(morgan('dev'))
// app.use(authorize)

// routes
app.get('/api', (req, res) => res.send('hi'))
// app.use("/api", apiRouteHandler)


app.listen(PORT, () => console.log(`server listening on port ${PORT}...`))