const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const User = require('../models/User')
const Follow = require('../models/Follow')

// helper function for generating a jwt token for an authenticated user
const generateToken = (uid, name, username) => {
    // console.log(data)
    return jwt.sign({uid, name, username}, process.env.TOKEN_SECRET, { expiresIn: 86400}) // expires in 24 hours
}

module.exports = {
    // Creating a user in the database
    signup: (req, res) => {
        console.log(req.body)
        const { email, name, username, password } = req.body

        bcrypt.hash(password, 12, async (err, hash) => {
            try{
                const result = await User.createUser({username, name, email, password: hash})
                
                // subscribing to one's own tweets
                await Follow.followUser(result._id, result._id)
                await User.followUser(result._id, result._id)
                if(!result){
                    res.status(403).json({success: false, result})
                }else{
                    res.status(200).json({success: true, result})
                }
            }catch(err){
                res.status(500).json({ success: false, error: err})
            }
        })
    },

    // validating user credentials in the database
    login: async (req, res) => {
        console.log("in the login controller:",req.body)
        const { username, password } = req.body
        try{
            // validating if a user exists in the database
            const data = await User.findOne({ username: username})
            if(data){
    
                // validating if the password provided matches the actual user password
                bcrypt.compare(password, data.password, (err, result)=>{
                    if(err){
                        console.log("error in validating user password in login endpoint: ",err)
                    }
                    if(result){
                        const token = generateToken(data._id, data.name, data.username)
                        console.log('token:',token)
                        res.status(200).json(token)
                    }else{
                        res.sendStatus(403)
                    }
                })
            }else{
    
                // user does not exist in the database
                res.status(404).send("user not found")
    
            }
        }catch(err){
            res.status(500).json({ success: false, error: err })
        }
    }
    
}