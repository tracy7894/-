const db=require('./db/db')
const movieModel = require('./models/movieModel')
const moviemodel=require('./models/movieModel')
db(()=>{
    movieModel.create({title:123,director:'mugiii'})
    .then(data=>{
        console.log(data)
    })
    .catch(err=>{
        console.log('error')
    })
    
})