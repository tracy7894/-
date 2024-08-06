const jwt=require('jsonwebtoken')

// let token=jwt.sign({
//     username:'mugi'
// },'qwe',
// {
//     expiresIn:60,
// })
// console.log(token)
let t='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Im11Z2kiLCJpYXQiOjE3MjI4NzAzNjMsImV4cCI6MTcyMjg3MDQyM30.-kYpW2KxPHYYA9J9QGJCphnPPjo1thHwZCpZk4A3x0Y'
jwt.verify(t,'qwe',(err,data)=>{
    if(err){
        console.log('error')
        return
    }
    console.log(data)
})
