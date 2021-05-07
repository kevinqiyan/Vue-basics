const { Builder, By, Key, until } = require('selenium-webdriver');
var xlsx = require('node-xlsx');
var fs = require('fs');
const { type } = require('os');
var window = window;
var dataExe = [];
var dataArray = [];
let nullArray = [];
let jsonData = {};
(async function example() {
  let driver = await new Builder().forBrowser('chrome').build();
  try {
    await driver.manage().setTimeouts({ implicit: 1000 });
    await driver.get('http://realtime.data.lenovomm.com/bugatti/');
    await driver.findElement(By.css('.custom_input')).sendKeys("4CEBBD3F8A07");
    driver.findElement(By.id('guide_start_btn')).click();
    driver.findElement(By.css('.tip_option .dropdown-toggle')).click()
    // driver.findElement(By.id('filter_appkey')).click();
    // driver.findElement(By.id('filter_appkey')).sendKeys("C9F75135EGPA");
    driver.findElement(By.id('filter_str')).click();
    driver.findElement(By.id('filter_str')).sendKeys("MC");


  }catch{
    console.log(error);
  }
  finally {
    console.log('文档执行成功了');
  }
  setTimeout(function () {

    driver.findElement(By.id('act_start_btn')).click();
    let abb = driver.findElements(By.css('#query_result_table tbody tr'))
    // console.log(typeof abb,abb);
    abb.then((req) => {

      for (const e of req) {
        e.getText().then((res) => {
          
          //js concat拼接g过滤(待完善)

          // res = res.split(' ')[2].concat(' ').concat(res.split(' ')[3]).concat(' ').concat(res.split(' ')[4]).concat(' ').concat(res.split(' ')[6]).concat(' ').concat(res.split(' ')[7]).concat(' ').concat(res.split(' ')[8]).concat(' ').concat(res.split(' ')[9])

          // res = res.split('SlJKUE0yMDEyMTAwMDMxNyNIVUFXRUkjQk9ISy1XQVg5WA==')
          // console.log(typeof res,'查看所有的数据展示',res);
          
          dataArray.push(res);

        })
        // driver.close()
      }
      setTimeout(() => {
        // dataExe = xlsx.build([{name:'表格',data:dataArray}]);
        // JSON.stringify(dataArray)
        // let abcd = JSON.stringify(dataArray)
        let abcd = dataArray
        for (let index = 0; index < abcd.length; index++) {
          let element = abcd[index].replace("SlJKUE0yMDEyMTAwMDMxNyNIVUFXRUkjQk9ISy1XQVg5WA==","");
          // console.log(typeof element,'查看element',element);
          let str = element.split(' ').slice(2,4)
          let str2 = element.split(' ').slice(6)
          element = str.concat(str2)
          element = {...element}
          nullArray.push(element)
          // nullArray.push(JSON.stringify(element).split(',')[0])
        }
        fs.writeFileSync('./数据.txt', JSON.stringify(nullArray))
        // fs.writeFileSync('./数据.txt', JSON.stringify(nullArray))
        // dataExe = xlsx.build([{ name: '表格', data: nullArray}]);
        // fs.writeFileSync('./表格.xlsx', dataExe)
        driver.close()
      }, 5000)
    })

  }, 10000);
})();

// node服务器
const express = require('express')

const app = express()
app.get('/', (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");  // 允许所有路径跨域
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.statusCode = 200;
    res.send(JSON.stringify(nullArray));
    // res.write('{"id":"123",name:"jack",arg:11111}')
})
app.listen(4000, () => {
    console.log('服务器运行成功');
})