var express = require('express');
var router = express.Router();
const md5=require('md5')
const usermodel=require('../../models/userModels')
const jwt=require('jsonwebtoken')

router.post('/login', async (req, res) => {
    try {
      const { username, password } = req.body;
      const hashedPassword = md5(password); // Assuming md5 is used for hashing
  
      const user = await usermodel.findOne({ username, password: hashedPassword });
  
      if (!user) {
        return res.json({ code: '2002', msg: 'Invalid username or password', data: null });
      }
  
      const token = jwt.sign({ username: user.username, _id: user._id }, 'mugi', {
        expiresIn: 60 * 60 * 24 * 7, // One week
      });
  
      res.json({ code: '0000', msg: 'Login successful', data: token });
    } catch (err) {
      console.error(err);
      res.json({ code: '2001', msg: 'Login error', data: null });
    }
  });

router.post('/logout',(req,res)=>{
    req.session.destroy(()=>{
        res.render('success',{msg:'logout success',url:'/login'})
    })
})


module.exports = router;