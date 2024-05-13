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
 
schema.statics.postTweet = async function(uid, content) {
    try{
        const res = await this.create({uid, content})
        return res;
    }catch(err){
        throw err
    }
}

module.exports = mongoose.model("Tweet", schema)