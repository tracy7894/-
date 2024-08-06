module.exports=checkTokenMiddleWare=(req,res,next)=>{
    let token=req.get('token')
    if(!token){
        return res.json({
            code:'2003',
            msg:'lose token',
            data:null
        })
    }
    jwt.verify(token,'mugi',(err,data)=>{
        if(err){
            return res.json({
                code:'2004',
                msg:'error',
                data:null
            })
        }

            next()
        });

}