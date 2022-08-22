const express = require('express')
const cors = require('cors')
const svgCaptcha = require('svg-captcha')
const app = express()

app.use(cors())
app.use(express.json())

app.get('/test', (req, res) => {
    const body = req.query
    res.send({
        status: 200,
        data: body,
        message: '请求成功'
    })
})

// 获取验证码
app.get('/getInfo', (req, res) => {
    const c = svgCaptcha.create({
        size: 4, // 验证码的长度
        ignoreChars: '0o1i', // 排除字符
        color: true,
        noise: 1, // 干扰线
        background: '#ccc', // 北京颜色
    })
    res.send(c)
})

app.listen(3000, () => {
    console.log('服务器运行成功');
})

