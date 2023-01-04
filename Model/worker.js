const mongoose = require("mongoose");

const Worker = new mongoose.Schema({
  job_title: {type: String,required: true},  
  name: {type: String,required: true},
  phone: {type: Number,required: true,unique: true},
  email: {type: String,required: true,unique: true},
  address: {type: String,required: true},
  password: {type: String,required: true},
  skills:{type: [String], required: true},
  work_experience:{type: String,required: true},
  hourly_rates: {type: Number, required: true},
  works:{type: [mongoose.Schema.Types.ObjectId], ref:'Work', defaulf: null},
  feedback:{type: [mongoose.Schema.Types.ObjectId], ref:'Feedback', defaulf: null}
}, {timestamps: true});


module.exports = mongoose.model("Worker", Worker);