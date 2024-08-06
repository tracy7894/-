const express=require('express')
const app=express()
app.use(express.static(__dirname+'/109'))
app.listen(3000,()=>{
    console.log('hi')
})