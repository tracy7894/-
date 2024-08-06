const db=require('./db/db')
const mongoose=require('mongoose')
const bookmodel=require('./models/bookModel')
db(()=>{
    

    bookmodel.find().select({name:1,price:1}).sort({price:-1}).skip(3).limit(3)
    .then(data => {
        console.log(data);
        mongoose.disconnect()
    })
})
