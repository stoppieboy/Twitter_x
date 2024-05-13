const User = require('../models/User')
const Tweet = require('../models/Tweet')

module.exports = {
    postTweet: async (req, res) => {
        // post a tweet
        // body contents: content
        try{

            const result = Tweet.postTweet(req.user.uid, req.body.content)
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

    },
    unfollow: async(req, res) => {},
    data: async (req, res) => {
        // Feed data
        try{
            const user = await User.findOne({ username: req.user.username })
            console.log("user:",user);
            // const tweets = await Tweet.find({ uid: req.user.uid })
            // MARK: needs work
            // Need to modify this query to fetch tweets from all the followed users; currently it fetches tweets from the logged in user only.
            const tweets = await Tweet.aggregate([
                {$match: { uid: req.user.uid }},
                {$lookup: {from: "users", localField: "uid", foreignField: "_id", as: "user"}},
                {$unwind: "$user"},
                {$project: {_id:1, content:1, username: "$user.username", createdAt:1}},
                {$sort: { createdAt: -1}},
            ])
            console.log("tweet:",...tweets);
            if(!user && !tweet){
                res.status(404).json({ success: false, error: "user not found"})
            }else{
                setTimeout(()=>{},2000)
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