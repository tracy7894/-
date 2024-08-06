const mongoose=require('mongoose')

let movieSchema=new mongoose.Schema({
    title: String,
    director:String,
    //price:Number
})
const movieModel=mongoose.model('movie',movieSchema)
module.exports=movieModel