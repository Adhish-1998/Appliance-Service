const mongoose = require("mongoose");

const Feedback = new mongoose.Schema({
  user: {type: mongoose.Schema.Types.ObjectId, ref:'User', required: true},
  review: {type: String,required: true},
  worker: {type: mongoose.Schema.Types.ObjectId, ref:'Worker', required: true}
}, {timestamps: true});


module.exports = mongoose.model("Feedback", Feedback);