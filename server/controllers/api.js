const { auth } = require('../utility/firebase')
const { signInWithEmailAndPassword, createUserWithEmailAndPassword } = require('firebase/auth')

module.exports = {
    authenticate: async (req, res) => {
        console.log(auth.currentUser)
        const {email, password} = req.query;
        signInWithEmailAndPassword(auth, email, password).then((user) => console.log(user)).then((user) => {
            console.log(user);
            console.log('authenticated')
            res.send('authenticated')
        })
        console.log(auth.currentUser)
    },

    signUp: async(req, res) => {
        const {email, password} = req.query;
        console.log('here')
        createUserWithEmailAndPassword(auth, email, password).then((user) => console.log('signup successful',user)).then((user) => {
        })
        res.send('signed up');
    },
    test: (req, res) => {
        console.log(auth.currentUser)
        res.send('testing') 
    }
}