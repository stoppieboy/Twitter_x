const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const User = require('../models/User')

// helper function for generating a jwt token for an authenticated user
const generateToken = (uid, username) => {
    // console.log(data)
    return jwt.sign({uid, username}, process.env.TOKEN_SECRET, { expiresIn: 86400}) // expires in 24 hours
}

module.exports = {
    // Creating a user in the database
    signup: (req, res) => {
        console.log(req.body)
        const { email, username, password } = req.body

        bcrypt.hash(password, 12, async (err, hash) => {
            try{
                const result = await User.create({username: username, email: email, password: hash})
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

        // validating if a user exists in the database
        const data = await User.findOne({ username: username})
        if(data){

            // validating if the password provided matches the actual user password
            bcrypt.compare(password, data.password, (err, result)=>{
                if(err){
                    console.log("error in validating user password in login endpoint: ",err)
                }
                if(result){
                    const token = generateToken(data._id, data.username)
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
    }
    
}