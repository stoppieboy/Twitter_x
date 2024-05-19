const { Schema, default: mongoose } = require('mongoose')
const { v4: uuidv4 } = require('uuid')

const schema = new Schema({
    _id: {
        type: String,
        default: () => uuidv4().replace(/\-/g, ""),
    },
    followerID: {
        type: String,
        required: true,
    },
    followeeID: {
        type: String,
        required: true,
    },
})

schema.statics.followUser = async function(followerID, followeeID) {
    try{
        const result = await this.create({followerID: followerID, followeeID: followeeID})
        return result;
    }catch(err){
        throw err
    }
}

schema.statics.unfollowUser = async function(followerID, followeeID) {
    try{
        const result = await this.deleteOne({followerID: followerID, followeeID: followeeID})
        return result;
    }catch(err){
        throw err
    }
}

module.exports = mongoose.model("Follow", schema)