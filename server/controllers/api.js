
module.exports = {
    data: (req, res) => {
        res.send(`all data of ${req.user.username}`)
    },
    test: (req, res) => {
        console.log(auth.currentUser)
        res.send('testing') 
    }
}