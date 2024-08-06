const mongoose=require('mongoose')

let bookSchema=new mongoose.Schema({
    name: String,
    author:String,
    price:Number
})
let bookmodel=mongoose.model('books',bookSchema)
module.exports=bookmodel