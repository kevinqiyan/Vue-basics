const express = require('express')
const cors = require('cors')
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

app.listen(3000, () => {
    console.log('服务器运行成功');
})

