
const mongoose=require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/mugi')
mongoose.connection.once('open',()=>{
    let bookSchema=new mongoose.Schema({
        name: String,
        author:String,
        price:Number
    })

    let bookmodel=mongoose.model('books',bookSchema)
    
    // bookmodel.insertMany([{

    // }])
    bookmodel.deleteMany({price:121})
        .then(result=>{
            console.log(result)
        })
        .catch(err=>{
            console.log('errrrrr',err)
        })

})
mongoose.connection.on('error',()=>{
    console.log('error')
})
mongoose.connection.on('close',()=>{
    console.log('close')
})