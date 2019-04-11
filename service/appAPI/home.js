const Router =require('koa-router')
let router = new Router()


router.get('/',async(ctx)=>{
  ctx.body='用户首页'
})

router.get('/register',async(ctx)=>{
  ctx.body='注册页'
})


module.exports=router
