const { auth } = require('../utility/firebase')

module.exports = (req, res, next) => {
    const user = auth.currentUser
    console.log(user)
    if(user){
        console.log('current user is', user)
        req.user = user;
        next();
    }else{
        // login page
        console.log("redirecting")
        res.redirect('http://localhost:5500/client')
    }
}