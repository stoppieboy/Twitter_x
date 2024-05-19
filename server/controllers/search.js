const User = require('../models/User')
const Tweet = require('../models/Tweet')

module.exports = {
    searchUser: async(req, res) => {
        try{
            const q = req.query.q
            if(q.length>0){
                const result = await User.aggregate([{$match: {username:{$regex:q, $options: "i"}}}, {$limit: 5}])
                // const result = await Tweet.find(
                //     {$text: {$search: req.query.q, $caseSensitive: false}},
                //     {$sort: { score: { $meta: "textScore"}}},
                //     {$limit: 5},
                // )
                if(!result){
                    res.status(500).json({success: false, error: "error in searching user"})
                }else{
                    console.log(result);
                    res.status(200).json({success: true, result})
                }
            }else{
                res.status(200).json({success: true, result:[]})
            }
        }catch(err){
            res.status(500).json({success: false, error: err})
        }
    }
}