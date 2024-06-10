const User = require('../models/User')

module.exports = {
    searchUser: async(req, res) => {
        try{
            const {q, user_id} = req.query
            if(q.length>0){
                const result = await User.aggregate([
                    {$match: {$or: [{username:{$regex:q, $options: "i"}}, {name: {$regex: q, $options: "i"}}]}},
                    {$limit: 5},
                    {$project: {username: 1, name: 1, email: 1, followed: {$in: [user_id, "$followers"]}}}
                    // {$project: {followed: {$cond: [ {$eq: ["follower", req.user.id]}, 1, 0]}}},
                    // {$lookup: {
                    //     from: "followers",
                    //     localField: "_id",
                    //     foreignField: "followerID",
                    //     pipeline: [
                    //         {$match: {}},
                    //     ],
                    //     as: "fid"}
                    // },
                    // {$project: {}},
                ])
                // const result = await Tweet.find(
                //     {$text: {$search: req.query.q, $caseSensitive: false}},
                //     {$sort: { score: { $meta: "textScore"}}},
                //     {$limit: 5},
                // )

                // const followResult = await User.find({followerID: })
                if(!result){
                    const error = {
                        msg: "error in searching user"
                    }
                    res.status(500).json({success: false, error})
                }else{
                    console.log(result);
                    res.status(200).json({success: true, result})
                }
            }else{
                res.status(200).json({success: true, result:[]})
            }
        }catch(err){
            console.log(err)
            res.status(500).json({success: false, error: err})
        }
    },
    test: async(req, res) => {
        try {
            const { _id, user_id } = req.body

            // const result = await User.findOne({username: req.query.u}).populate('followers').exec()

            // const result = await User.updateOne(
            //     { _id: _id },
            //     { $push: { following: user_id }}
            // )

            const result = await User.aggregate([
                {$match: {_id: _id}},
                // {$unwind: "$following"},
                {$project: {username: 1, name: 1, email: 1, followed: {$in: [user_id, "$following"]}}}
                // {$addFields: {
                //     "followed": {$in: [user_id, "$following"]}
                // }}
            ])

            console.log(result)
            res.status(200).json({ success: true, result})
        } catch (err) {
            console.log(err);
        }
    }
}