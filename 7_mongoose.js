
const mongoose=require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/mugi')
mongoose.connection.once('open',()=>{
    let bookSchema=new mongoose.Schema({
        name: String,
        author:String,
        price:Number
    })

    let bookmodel=mongoose.model('books',bookSchema)
    bookmodel.findOne({name:'mugi'})
    .then(data=>{
        console.log(data)
    })
    .catch(err=>{
        console.log('error',err)
    })
    bookmodel.findById('66a8ab94f34826e23efe8a1a')
    .then(data=>{
        console.log(data)
    })
    .catch(err=>{
        console.log('error',err)
    })
    bookmodel.find({author:'mimi'})
    .then(data=>{
        console.log(data)
    })
    .catch(err=>{
        console.log('error',err)
    })

})
mongoose.connection.on('error',()=>{
    console.log('error')
})
mongoose.connection.on('close',()=>{
    console.log('close')
})