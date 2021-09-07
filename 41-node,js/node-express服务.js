const express = require('express')

const app = express()
app.get('/', (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");  // 允许所有路径跨域
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.statusCode = 200;
    res.send('hellow world');
    // res.write('{"id":"123",name:"jack",arg:11111}')
})
app.listen(3000, () => {
    console.log('服务器运行成功');
})