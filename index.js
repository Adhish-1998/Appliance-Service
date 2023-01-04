const express = require('express')
const mongoose = require('mongoose')
const route = require('./Routes/routes')
var passport= require("passport")
require('dotenv').config()

const app = express();

app.use(express.json())
app.use('/', route)
app.use(passport.initialize())


mongoose.connect(process.env.CONNECTION_STRING, { useNewUrlParser: true })
.then(() => console.log("mongoDB is connected"))
.catch((err) => console.log(err));


app.listen(process.env.PORT || 5000, function () {
    console.log("app is running on the port", process.env.PORT || 5000)
});


