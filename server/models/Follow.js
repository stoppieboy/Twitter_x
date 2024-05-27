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


// FIXME prevent duplicate records(i.e prevent a user from following a user more than once)
schema.statics.followUser = async function(followerID, followeeID) {
    try{
        const duplicate = await this.findOne({ followerID: followerID, followeeID: followeeID });
        if(!duplicate){
            const result = await this.create({followerID: followerID, followeeID: followeeID})
            return result;
        }
        return;
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