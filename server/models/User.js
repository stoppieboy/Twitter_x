const { v4 : uuidv4 } = require('uuid')
const uniqueValidator = require('mongoose-unique-validator')
const { Schema, default: mongoose } = require("mongoose");
const Tweet = require('./Tweet')

const schema = new Schema({

    _id: {
        type: String,
        default: () => uuidv4().replace(/\-/g, "")
    },

    username:{ 
        type: String,
        unique: true,
        required: true
    },

    email: {
        type: String,
        required: true,
    },

    password: {
        type: String,
        required: true,
    },

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
schema.statics.getFeed = async function( uid ) {
    try{
        const tweets = await Tweet.aggregate([
            {$match: { uid: uid }},
            {$lookup: {from: "users", localField: "uid", foreignField: "_id", as: "user"}},
            {$unwind: "$user"},
            {$project: {_id:1, content:1, username: "$user.username", createdAt:1}},
            {$sort: { createdAt: -1}},
        ])
        return tweets
    }catch(err){
        throw err
    }
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