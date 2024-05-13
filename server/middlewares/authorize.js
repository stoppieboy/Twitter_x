const jwt = require('jsonwebtoken')

module.exports = (req, res, next) => {
    // const user = auth.currentUser
    // console.log(user)
    // if(user){
    //     console.log('current user is', user)
    //     req.user = user;
    //     next();
    // }else{
    //     // login page
    //     console.log("redirecting")
    //     res.redirect('http://localhost:5500/client')
    // }

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