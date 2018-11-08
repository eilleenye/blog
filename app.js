var express=require('express')
var path=require('path')

var app=express()


/*处理静态资源*/
app.use('/public',express.static(path.join(__dirname,'./public/')))
app.use('/node_modules',express.static(path.join(__dirname,'./node_modules/')))

app.engine('html',require('express-art-template'))
app.set('views',path.join(__dirname,'./views/'))
app.get('/',function(req,res){
    res.end('hello')
})

app.listen(3000,function () {
   console.log('服务已启动....')
})
