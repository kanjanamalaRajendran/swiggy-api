const bodyparser=require('body-parser') //importing body-porser package
const express =require('express') //importing express package
const mongoose = require('mongoose')
const app = express()
const {Users} = require('./schema.cjs')
app.use(bodyparser.json()) 
function connectToDb(){
    try{
    mongoose.connect('mongodb+srv://Kanjanamala_Rajendran:Mydadisno01@cluster0.pl1pitf.mongodb.net/UserDetails?retryWrites=true&w=majority')
    console.log('connection established')
    const port=4000
    app.listen(port,function(){
        console.log(`listening on port ${port}`)
    })
}catch(error){
   console.log('error')
   console.log('connection not established')
}
}
connectToDb()
app.post('/create-new-user',async function(request,responce){
    try{
        Users.create({
            "UserName":request.body.username,
            "email":request.body.email,
            "password":request.body.password
        })
        responce.status(201).json({
            "status":"success"
        })
    }catch{
         responce.status(500).json({
            "status":"user not create"
        })
    }
})
