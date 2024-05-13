const mongoose = require('mongoose')

const Mongo = async() => {
    await mongoose.connect(process.env.DB_CONNECTION_STRING)
    await mongoose.connection.db.admin().command({ ping: 1 });
    console.log('database connected successfully')
}

module.exports = Mongo;