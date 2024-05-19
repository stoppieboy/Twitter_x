const User = require('../models/User')
const Tweet = require('../models/Tweet')
const Follow = require('../models/Follow')

module.exports = {

    postTweet: async (req, res) => {
        // post a tweet
        // body contents: content
        try{

            const result = await Tweet.postTweet(req.user.uid, req.body.content)
            if(!result){
                res.status(500).json({success: false, error: "some error in posting the tweet"})
            }else{
                res.status(200).json({success: true, result})
            }
        }catch(err){
            res.status(500).json({ success: false, error: err})
        }
    },

    follow: async(req, res) => {
        try{
            const result = await Follow.followUser(req.user.uid, req.body.followeeID)
            console.log({result})
            if(!result){
                res.status(500).json({success: false, error: "some error in following the user"})
            }else{
                res.status(200).json({success: true, result})
            }
        }catch(err){
            res.status(500).json({ success: false, error: err })
        }
    },

    unfollow: async(req, res) => {
        try{
            const result = await Follow.unfollowUser(req.user.uid, req.body.followeeID)
            if(!result){
                res.status(500).json({success: false, error: "some error in following the user"})
            }else{
                res.status(200).json({success: true, result})
            }
        }catch(err){
            res.status(500).json({ success: false, error: err })
        }
    },

    data: async (req, res) => {
        // Feed data
        try{
            const user = await User.findOne({ username: req.user.username })
            if(!user){
                res.status(404).json({ success: false, error: "user not found"})
            }else{
                // MARK: needs work
                // Need to modify this query to fetch tweets from all the followed users; currently it fetches tweets from the logged in user only.
                const tweets = await User.getFeed(req.user.uid)
                console.log("tweet:",...tweets);
                res.status(200).json({ success: true, result: {user, tweets}})
            }
        }catch(err){
            res.status(500).json({ success: false, error: err})
        }
    },

    test: async (req, res) => {
        try{
            const result = await User.test();
            res.status(200).json({ success: true, result})
        }catch(err){
            res.status(500).json({ success: false, error: err})
        }
    }
    
}