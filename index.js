require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000


app.get('/',(req,res)=>{
    res.send("Hello Backend Developer")
})

app.get('/shubh',(req,res)=>{
    res.send("Hello Shubh Gupta Ji")
})

app.get('/chay',(req,res)=>{
    res.send(`<h1> Chay piyo aur Code Karo, DSA se upar utho </h1>`)
})

app.listen(process.env.PORT,()=>{
    console.log(`App is listening n the port ${process.env.PORT}`)
})
