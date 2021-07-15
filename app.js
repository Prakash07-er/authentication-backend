require("dotenv").config();
const express = require('express')
const mongoose = require('mongoose')
const user = require('./routes/UserRoute')
const reset = require('./routes/ResetRoute')

const app = express()

app.use(express.json())

const PORT = process.env.PORT  || 5000;

//MongoDB Connection
const URI = process.env.MONGO_URL
mongoose.connect(URI, {
    useCreateIndex:true,
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true
}, err => {
    if(err) throw err ;
    console.log("::: Successfully Connected to MongoDB Server :::")
})


app.use('/' , user)
app.use('/' , reset)


app.listen(PORT, () => console.log("::: Your server is running in port ::: ", PORT))    
