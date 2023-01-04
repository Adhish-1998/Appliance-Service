const express = require('express')
const router = express.Router()

// var passport = require('passport')
// require("../Auth/auth")(passport)

const {signup, login, getUsers} = require('../Controller/user')
const {signupWorker, loginWorker, getWorkers} = require('../Controller/worker')
const {feedbackRegister} = require('../Controller/feedback')
const {createWork,getWorks} = require('../Controller/works')



//-------------For USER------------------//
router.post("/user/signup", signup )
router.post("/user/login", login )
router.get("/user", getUsers )


// //-------------For Worker------------------//
router.post("/worker/signup", signupWorker )
router.post("/worker/login", loginWorker )
router.post("/worker", getWorkers )


// //-------------For Feedback-------------//
router.post("/feedbacks", feedbackRegister)
router.get("/feedbacks", feedbackRegister)



//-------For Works----------//
router.post('/works', getWorks)
router.get('/works', createWork) 



router.all("/*", function (req, res) {
    res.status(404).send({
        status: false,
        message: "Make Sure Your URL is Correct !!!"
    })
})

module.exports = router