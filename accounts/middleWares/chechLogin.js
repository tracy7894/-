module.exports=checkLoginMiddleWare=(req,res,next)=>{
    if(!req.session.username){
      res.redirect('/login')
    }
    next()
  }