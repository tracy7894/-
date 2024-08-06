const mongoose=require('mongoose')

let userSchema=new mongoose.Schema({

    username:String,
    password:String
})
let usermodel=mongoose.model('users',userSchema)
module.exports=usermodel