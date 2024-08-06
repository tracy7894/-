var express = require('express');
var router = express.Router();
const jwt=require('jsonwebtoken')
const moment=require('moment');
const accountmodel = require('../../models/accountModels');

let checkLoginMiddleWare=require('../../middleWares/checkToken')
/* GET home page. */
router.get('/account', checkLoginMiddleWare,function(req, res, next) {
    accountmodel.find().sort({time:-1})
    .then(data=>{

        res.json({
            code:'0000',
            msg:'success',
            data:data
        })
      })
      .catch(err=>{
        res.json({
            code:'1001',
            msg:'error',
            data:null
    
        })
        return
      })
    })
 

router.post('/account',checkLoginMiddleWare,(req,res)=>{
  accountmodel.create({
    ...req.body,
   // time:moment(req.body.time).toDate()
  })
  .then(data => {
    res.json({
        code:'0000',
        msg:'create success',
        data:data

    })
})
   .catch(err=>{
    res.json({
        code:'1002',
        msg:'error',
        data:null

    })
    return
   })
  
})
router.delete('/account/:id',checkLoginMiddleWare,(req,res)=>{
  let id=req.params.id
  accountmodel.deleteOne({_id:id})
  .then(data => {
    res.json({
        code:'0000',
        msg:'dalete success',
        data:{}

    })
})
   .catch(err=>{
    res.json({
        code:'1003',
        msg:'deletee error',
        data:null

    })
    return
   })
})
router.get('/account/:id',checkLoginMiddleWare,(req,res)=>{
    let id=req.params.id
    accountmodel.findById(id)
    .then(data => {
        res.json({
            code:'0000',
            msg:'find success',
            data:data
    
        })
    })
       .catch(err=>{
        res.json({
            code:'1004',
            msg:'find error',
            data:null
    
        })
        return
       })
})
router.patch('/account/:id', checkLoginMiddleWare,async (req, res) => {
    const id = req.params.id;

    try {
        await accountmodel.updateOne({ _id: id }, req.body);
        const data = await accountmodel.findById(id);
        res.json({ 
            code: '0000', 
            msg: 'update success',
            data
        });
    } catch (err) {
        res.json({ code: '1005', msg: 'update error', data: null });
    }
});
module.exports = router;
