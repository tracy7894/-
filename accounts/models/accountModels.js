const mongoose=require('mongoose')

let accountSchema=new mongoose.Schema({
    title: {type:String,
        required:true
    },
    time:String,
    type:{
        type:Number,
        default:-1,
    },
    account:{
        type:Number,
        required:true,
    },
    remarks:String,
})
let accountmodel=mongoose.model('accounts',accountSchema)
module.exports=accountmodel