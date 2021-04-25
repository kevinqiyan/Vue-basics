const express = require('express')

const app = express()
app.get('/',(req,res)=>{
    res.send('hellow world')
})
app.listen(3000,()=>{
    console.log('服务器运行成功');
})