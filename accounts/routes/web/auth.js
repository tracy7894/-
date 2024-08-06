var express = require('express');
var router = express.Router();
const md5=require('md5')
const usermodel=require('../../models/userModels')

router.get('/reg',(req,res)=>{
    res.render('auth/reg')
})

router.post('/reg',(req,res)=>{
    usermodel.create({...req.body,password:md5(req.body.password)})
    .then(data=>{
        res.render('success',{msg:'success',url:'/login'})
    })
    .catch(err=>{
        res.status(500).send('error')
    })
})

router.get('/login',(req,res)=>{
    res.render('auth/login')
})
router.post('/login',(req,res)=>{
    let {username,password}=req.body
    usermodel.findOne({username:username,password:md5(password)})
    .then(data=>{
        if(!data){
            res.send('login error')
        }
        else{
            req.session.username=data.username
            req.session._id=data._id
            res.render('success',{msg:'login success',url:'/account'})


        }
    })
    .catch(err=>{
        res.status(500).send('error')
    })
})

router.post('/logout',(req,res)=>{
    req.session.destroy(()=>{
        res.render('success',{msg:'logout success',url:'/login'})
    })
})


module.exports = router;