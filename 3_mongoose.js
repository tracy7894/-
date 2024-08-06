
const mongoose=require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/mugi')
mongoose.connection.once('open',()=>{
    let bookSchema=new mongoose.Schema({
        name: String,
        author:String,
        price:Number,
        is_hot:Boolean,
        tags:Array,
        time:Date,
        test:mongoose.Schema.Types.Mixed
    })

    let bookmodel=mongoose.model('novel',bookSchema)

    bookmodel.create({
        name:'mugi',
        author:'mimi',
        price:121,
        is_hot:true,
        tags:['bunny','drawf'],
        time:new Date(),
        test:'aaa'
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