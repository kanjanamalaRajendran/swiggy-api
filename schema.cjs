//import the mongoose
const mongoose = require('mongoose')
//defining the schema
const UserName = new mongoose.Schema({
    UserName:{
        type:String
    },
    email:{
        type:String
    },
    password:{
        type:String
    }
})
//model
const Users = mongoose.model('userDetails','userSchema')
//exporting the model
module.exports={Users}