var express = require('express');
var router = express.Router();

const moment=require('moment');
const accountmodel = require('../../models/accountModels');
let checkLoginMiddleWare=require('../../middleWares/chechLogin')

router.get('/',(req,res)=>{
  res.redirect('/account')
})
/* GET home page. */
router.get('/account', checkLoginMiddleWare,function(req, res, next) {
  

  accountmodel.find().sort({time:-1})
  .then(data=>{
    console.log('sort success')
    res.render('list',{accounts:data})
  })
  .catch(err=>{
    console.log('sort error')
    return
  })
});
router.get('/account/create',checkLoginMiddleWare, function(req, res, next) {
  res.render('create')
});
router.post('/account',checkLoginMiddleWare,(req,res)=>{
  accountmodel.create({
    ...req.body,
   // time:moment(req.body.time).toDate()
  })
  .then(data => {
    console.log('success');
    res.render('success',{msg:'新增成功',url:'/account'})
})
   .catch(err=>{
     res.status(500).send('create error')
   })
  
})
router.get('/account/:id',checkLoginMiddleWare,(req,res)=>{
  let id=req.params.id
  accountmodel.deleteOne({_id:id})
  .then(data => {
    console.log('delate success');
    res.render('success',{msg:'刪除成功',url:'/account'})
})
   .catch(err=>{
     res.status(500).send('delate error')
   })
})

module.exports = router;
