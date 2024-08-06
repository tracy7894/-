
const mongoose=require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/mugi')
mongoose.connection.once('open',()=>{
    let bookSchema=new mongoose.Schema({
        name: String,
        author:String,
        price:Number
    })

    let bookmodel=mongoose.model('books',bookSchema)
    // bookmodel.find({price:{$lt:200}})//小於
    // .then(data=>{
    //     console.log(data)
    // })
    // .catch(err=>{
    //     console.log('error',err)
    // })
    // bookmodel.find({$or:[{author:'popo'},{author:'mugi'}]})
    // .then(data=>{
    //     console.log(data)
    // })
    // .catch(err=>{
    //     console.log('error',err)
    // })
    // bookmodel.find({$and:[{price:{$gt:100}},{price:{$lt:200}}]})
    // .then(data=>{
    //     console.log(data)
    // })
    // .catch(err=>{
    //     console.log('error',err)
    // })

    // bookmodel.find({name:/po/})//正規表示式
    // .then(data=>{
    //     console.log(data)
    // })
    // .catch(err=>{
    //     console.log('error',err)
    // })

    bookmodel.find({name:new RegExp('po')})//正規表示式
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