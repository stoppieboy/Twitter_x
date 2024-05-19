// MARK: Library requires
const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const helmet = require('helmet')
require('dotenv').config()

// MARK: Custom requires
const apiRouteHandler = require('./routeHandlers/apiRouteHandler')
const authRouteHandler = require('./routeHandlers/authRouteHandler')
const searchRouteHandler = require('./routeHandlers/searchRouteHandler')
const authorize = require('./middlewares/authorize')
const Mongo = require('./utility/database-config')

// MARK: Constants
const PORT = process.env.PORT || 3000
const app = express()

Mongo().catch(console.dir)

// MARK: Middlewares
// app.use(express.urlencoded())
app.use(express.json())
app.use(cors())
app.use(helmet())
app.use(morgan('dev'))

// MARK: Routes
app.use("/auth", authRouteHandler)
app.use("/api", authorize, apiRouteHandler)
app.use("/search", searchRouteHandler)


app.listen(PORT, () => console.log(`server listening on port ${PORT}...`))