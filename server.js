const express = require('express')
const path = require('path')
const app = express()
const sayhi = require('./sayhi')
const { parse } = require('path')
const students = require('./routes/students')


app.use(express.static(path.join(__dirname,'public')))
app.use(sayhi)
app.use('/api',students)





app.listen(5000,(err) => {
    if(err){
        throw err
    }else{
        console.log('SERVER IS RUNNING...')
    }
})