const { v4: uuidv4 } = require('uuid')
// const uniqueValidator = require('mongoose-unique-validator')
const { Schema, default: mongoose } = require('mongoose')

const schema = new Schema({
    _id: {
        type: String,
        default: () => uuidv4().replace(/\-/g, "")
    },
    uid: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    likes: {
        type: Number,
        default: 0,
    },
    reposts: {
        type: Number,
        default: 0,
    }
}, {
    timestamps: true,
})
 
// TODO change the model to accept more user data like name and maybe turn all the user data into an object
schema.statics.postTweet = async function({uid, name, username}, content) {
    try{
        const res = await this.create({uid, name, username, content})
        return res;
    }catch(err){
        throw err
    }
}

schema.statics.deleteTweet = async function(id) {
    try{
        const res = await this.delete({_id: id})
        return res;
    }catch(err){
        throw err
    }
}

schema.statics.updateTweet = async function(id, content){
    try{
        const res = await this.updateOne({_id: id, content: content})
        return res;
    }catch(err){
        throw err
    }
}

module.exports = mongoose.model("Tweet", schema)