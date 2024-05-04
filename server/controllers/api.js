
module.exports = {
    authenticate: async (req, res) => {
        // console.log(auth.currentUser)
        // const {email, password} = req.query;
        // signInWithEmailAndPassword(auth, email, password).then((user) => console.log(user)).then((user) => {
        //     console.log(user);
        //     console.log('authenticated')
        //     res.send('authenticated')
        // })
        // console.log(auth.currentUser)
    },
    test: (req, res) => {
        console.log(auth.currentUser)
        res.send('testing') 
    }
}