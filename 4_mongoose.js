
const mongoose=require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/mugi')
mongoose.connection.once('open',()=>{
    let bookSchema=new mongoose.Schema({
        name: {
            type:String,
            required:true,
            unique:true
        },
        author:{
            type:String,
            default:'no'
        },
        style:{
            type:String,
            enum:['bunny','cat']
        },
        price:Number
    })

    let bookmodel=mongoose.model('books',bookSchema)
    bookmodel.create({
        name:'mugi',
        author:'mimi',
        style:'cat',
        price:121
    })
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