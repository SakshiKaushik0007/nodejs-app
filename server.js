
const express = require('express')
const app = express()

app.get('/home', (req,res)=>{
res.send('Welcome to World Rest API')

})

app.listen(9090, ()=>console.log('Server Started'))
