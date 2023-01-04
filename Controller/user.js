const user = require('../Model/uesr')


const signup = async (req, res) => {
    try {
        let userData = await user.create(req.body)
        return res.status(201).send({ status: true, data: userData })
    }
    catch (err) {
        return res.status(500).send({ status: false, message: err.message })
    }
}

const login = async (req, res) => {

    try {
        let userData = await user.find({ email: req.body.email, password: req.body.password })
        return res.send({ status : true, data: userData })
    }
    catch (err) {
        return res.status(500).send({ status: false, message: err.message })
    }

}

const getUsers = async (req,res) =>{
    try {
        let userData = await user.findOne()
        return res.send({ status: false, data: userData })
    }
    catch (err) {
        return res.status(500).send({ status: false, message: err.message })
    }
}

module.exports = {
    signup,
    login,
    getUsers
}