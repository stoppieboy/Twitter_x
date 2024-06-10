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
        // prevents duplicate records(i.e prevent a user from following a user more than once)
        const duplicate = await this.findOne({ followerID: followerID, followeeID: followeeID });
        if(!duplicate){
            const result = await this.create({followerID: followerID, followeeID: followeeID})
            return result;
        }else{
            throw new Error("user already followed")
        }
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