
const mongoose=require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/mugi')
mongoose.connection.once('open',()=>{
    let bookSchema=new mongoose.Schema({
        name: String,
        author:String,
        price:Number
    })

    let bookmodel=mongoose.model('books',bookSchema)
    // bookmodel.find().select({name:1,price:1})
    // .then(data => {
    //     console.log(data);
    //     mongoose.disconnect()
    // })
    // .catch(err => {
    //     console.log('error', err);
    // });

    // bookmodel.find().select({name:1,price:1}).sort({name:1})
    // .then(data => {
    //     console.log(data);
    //     mongoose.disconnect()
    // })
    // .catch(err => {
    //     console.log('error', err);
    // });

    bookmodel.find().select({name:1,price:1}).sort({price:-1}).skip(3).limit(3)
    .then(data => {
        console.log(data);
        mongoose.disconnect()
    })
    .catch(err => {
        console.log('error', err);
    });
})
mongoose.connection.on('error',()=>{
    console.log('error')
})
mongoose.connection.on('close',()=>{
    console.log('close')
})