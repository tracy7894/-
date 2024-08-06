const cookieParser = require('cookie-parser')
const express=require('express')
const app=express()
app.use(cookieParser())

const session=require('express-session')
const MongoStore=require('connect-mongo')

app.use(session({
    name:'sid',
    secret:'123',
    saveUninitialized:false,
    resave:true,
    store:MongoStore.create({
        mongoUrl:'mongodb://127.0.0.1:27017/project'
    }),
    cookie:{
        httpOnly:true,
        maxAge:3000000
    }
}))
app.get('/login',(req,res)=>{
    if(req.query.username==='admin' && req.query.password==='admin'){
        req.session.username='admin'
        res.send('success')
    }
    else{
        res.send('error')
    }
})
app.get('/cart',(req,res)=>{
    if(req.session.username){
        res.send('car howdy')
    }
    else{
        res.send('not login')
    }
})
app.get('/logout',(req,res)=>{
    req.session.destroy(()=>{
        res.send('logout')
    })
  
})
// app.get('/set-cookie',(req,res)=>{
//     res.cookie('name','mugi',{maxAge:600000})
//     res.cookie('theme','blue')
//     res.send('home')

// })
// app.get('/remove-cookie',(req,res)=>{
//     res.clearCookie('name')
//     res.send('success')
// })
// app.get('/get-cookie',(req,res)=>{
//     console.log(req.cookies)
//     res.send('get cookie')
// })
app.listen(3000,()=>{
        
})