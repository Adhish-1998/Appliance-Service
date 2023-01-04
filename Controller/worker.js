const worker = require('../Model/worker')


const signupWorker = async (req, res) => {
    try {
        let workerData = await worker.create(req.body)
        return res.status(201).send({ status: true, data: workerData })
    }
    catch (err) {
        return res.status(500).send({ status: false, message: err.message })
    }
}

const loginWorker = async (req, res) => {

    try {
        let workerData = await worker.findOne({ email: req.body.email, password: req.body.password })
        return res.send({ data: workerData })
    }
    catch (err) {
        return res.status(500).send({ status: false, message: err.message })
    }

}


const getWorkers = async(req,res) =>{
    try {
        let workerData = await worker.findOne()
        return res.send({ data: workerData })
    }
    catch (err) {
        return res.status(500).send({ status: false, message: err.message })
    }
}


module.exports = {
    signupWorker,
    loginWorker,
    getWorkers
}