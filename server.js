let http = require('http');
let users = [
    {id:1,name:'zhufeng1'},
    {id:2,name:'zhufeng2'},
    {id:3,name:'zhufeng3'},
]
let server = http.createServer(function(req,res){
    res.setHeader('Access-Control-Allow-Origin','*');
    if(req.url ==='/api/users'){
        res.end(JSON.stringify(users));
    }
    else{
        res.end('Not found')
    }
});
server.listen(3000,()=>{
    console.log('后端API接口服务器已经启动在 3000端口！')
})