const Koa = require('koa')
const app = new Koa()
const mongoose = require('mongoose')
const {connect , initSchemas} = require('./database/init.js')
//立即执行函数
;(async () =>{
  await connect()
  initSchemas()
  const User = mongoose.model('User')
  let oneUser = new User({userName:'刘俊杰',password:'55555'})
  /*oneUser.save().then(()=>{
    console.log('插入成功')
  })*/
  User.remove({userName:'jiangbo'}).exec()
  let  users = await  User.find({userName:'刘俊杰'},{'userName':1,'password':1}).exec()
  console.log('------------------')
  console.log(users)
  console.log('------------------')
})()
app.use(async(ctx)=>{
  ctx.body = '<h1>hello Koa2</h1>'
})
app.listen(3000,()=>{
  console.log('[Server] starting at port 3000')
})
