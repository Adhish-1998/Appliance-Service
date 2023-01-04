const mongoose = require("mongoose");

const Work = new mongoose.Schema({
  job_title: {type: String, required: true},
  user: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
  details:{type: String, required: true},
  status:{type:String, enum:['Pending', 'Active', 'Completed'] },
  worker: {type: mongoose.Schema.Types.ObjectId, ref: 'Worker', default : null},
  price: {type: Number, required: true}
}, {timestamps: true});


module.exports = mongoose.model("Work", Work);