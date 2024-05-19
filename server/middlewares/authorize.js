const jwt = require('jsonwebtoken')

module.exports = (req, res, next) => {

    console.log('in the authorization middleware...')
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]

    if(token == null){
        console.log("token is null");
        return res.sendStatus(401);
    }

    jwt.verify(token, process.env.TOKEN_SECRET, (err, user) => {
        console.log("auth token payload:",user)
        if(err) {
            console.log("error in authorization middleware",err)
            return res.sendStatus(403);
        }
        req.user = user
        next()
    })
}