const express = require('express');
const dotenv = require('dotenv')
const connectDB = require('./server/database/connection')
const app = express()

// LOad config files
dotenv.config({path: './config/config.env'})
const PORT = process.env.PORT || 8080

// connect database
connectDB()

// app.set template engine
app.set('view engine', 'ejs')


// load body Parser
app.use(express.urlencoded({extended: false}))

app.get('/', (req, res)=>{
    res.render('home')
})


app.listen(PORT, ()=>{
    console.log(`Server Started on http://localhost:${PORT}`)
})