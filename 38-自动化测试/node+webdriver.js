const express = require('express');
const app = express();
const { Builder, By, Key, until } = require('selenium-webdriver');
var xlsx = require('node-xlsx');
var fs = require('fs');
const { type } = require('os');
var window = window;
var dataExe = [];
var dataArray = [];
let nullArray = [];
app.get('/',(req,res)=>{
    res.send('请求localhost成功')
    console.log('app路径/');
})
app.listen('3000',()=>{
    console.log('服务器启动成功');
    (async function express(){
        let driver = await new Builder().forBrowser('chrome').build();
        try {
            await driver.manage().setTimeouts({ implicit: 1000 });
            await driver.get('大数据测试网址');
            await driver.findElement(By.css('.custom_input')).sendKeys("4CEBBD3F8A07");
            driver.findElement(By.id('guide_start_btn')).click();
        
        } catch(error){
            console.log('错误',error);
        }
        finally{
            console.log('文档执行成功了');
        }
    })()
})

// setTimeout(() => {
//     console.log('服务器停止运行');
//     process.exit()
// }, 10000);