const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

const generateToken = (data) => {
    console.log(data)
    return jwt.sign({username: data.username}, process.env.TOKEN_SECRET, { expiresIn: 1800})
}
const users = {}

module.exports = {
    signup: (req, res) => {
        console.log(req.body)
        const { email, username, password } = req.body
        if(username in users){
            res.sendStatus(403)
        }else{
            bcrypt.hash(password, 12, (err, hash) => {
                users[username] = {email, password: hash}
                res.sendStatus(200)
            })
        }
    },
    login: (req, res) => {
        console.log(req.body)
        const { username, password } = req.body
        if(username in users){
            bcrypt.compare(password, users[username].password, (err, result)=>{
                if(result){
                    const token = generateToken({ username: req.body.username })
                    console.log('token:',token)
                    res.status(200).json(token)
                }else{
                    res.sendStatus(403)
                }
            })
        }else{
            res.sendStatus(404)
        }
    }
}