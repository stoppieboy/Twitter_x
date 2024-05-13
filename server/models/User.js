const { v4 : uuidv4 } = require('uuid')
const uniqueValidator = require('mongoose-unique-validator')
const { Schema, default: mongoose } = require("mongoose");

const schema = new Schema({
    _id: {
        type: String,
        default: () => uuidv4().replace(/\-/g, "")
    },
    username:{ type: String, unique: true, required: true},
    email: String,
    password: String
}, {
    timestamps: true,
})

schema.plugin(uniqueValidator)


/**
 * 
 * @param {Object{ username, password }} anonymous
 * @returns {Object} user object
 */
schema.statics.createUser = async function({ username, password}) {
    try{
        const user = await this.create({username, email, password})
        return user;
    }catch(err){
        throw err
    }
}

/**
 * 
 * @param {Object}
 */
schema.statics.getFeed = async function({ username }) {

}

schema.statics.test = async function() {
    try{
        const data = await this.aggregate([

        ])
        return data;
    }catch(err){
        
    }
}

module.exports = mongoose.model("User", schema)