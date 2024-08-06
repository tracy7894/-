const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
 
const adapter = new FileSync('db.json')
const db = low(adapter)
//初始化
db.defaults({ posts: [], user: {} })
  .write()
// db.get('posts').push({id:1,title:'小北我愛你'}).write()
// db.get('posts').unshift({id:2,title:'小北我愛你'}).write()

//console.log(db.get('posts').value())
db.get('posts').remove({id:1}).write()

let res=db.get('posts').find({id:2}).assign({title:'hokke我愛你'}).write()