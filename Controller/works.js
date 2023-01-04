const works = require('../Model/work')

const createWork = async (req, res) => {
    try {
        let workData = await works.create(req.body)
        return res.status(201).send({ status: true, data: workData })
    }
    catch (err) {
        return res.status(500).send({ status: false, message: err.message })
    }
}

const getWorks = async(req,res) =>{
    try{
        let worksList = await works.find()
        return res.status(200).send({status : true, data : worksList})
    }
    catch(err){
        return res.status(500).send({ status: false, message: err.message })
    }
}

module.exports ={
    createWork,
    getWorks
} 