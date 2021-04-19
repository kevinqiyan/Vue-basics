const { Builder, By, Key, until } = require('selenium-webdriver');
var xlsx = require('node-xlsx');
var fs = require('fs');
var jsdom = require('jsdom');
var JSDOM = jsdom.JSDOM;
var document = new JSDOM().window.document;
const { window } = new JSDOM(`...`);
const { type } = require('os');
var dataExe = [];
var dataArray = [];
let nullArray = [];


// const jsdom = require("jsdom");
// const { JSDOM } = jsdom;
// const dom = new JSDOM(`<!DOCTYPE html><p>Hello world</p>`);
// console.log(dom.window.document.querySelector("p").textContent);

(async function example() {
  let driver = await new Builder().forBrowser('chrome').build();

  // 监听特定元素的DOM结构变化,使用方法未知(待完善)
  // const cdpConnection = await driver.createCDPConnection('page')
  //   await driver.logMutationEvents(cdpConnection, function (event) {
  //       assert.strictEqual(event['attribute_name'], 'style')
  //       assert.strictEqual(event['current_value'], '')
  //       assert.strictEqual(event['old_value'], 'display:none;')
  //   })
  try {
    await driver.manage().setTimeouts({ implicit: 1000 });

    // const cdpConnection = await driver.createCDPConnection('page') // 监听网页DOM结构变化
    // await driver.logMutationEvents(cdpConnection, function (event) {
    //   assert.strictEqual(event['attribute_name'], 'style')
    //   assert.strictEqual(event['current_value'], '')
    //   assert.strictEqual(event['old_value'], 'display:none;')
    // })
    await driver.get('测试网址');
    await driver.findElement(By.css('.custom_input')).sendKeys("4CEBBD3F8A07");
    driver.findElement(By.id('guide_start_btn')).click(); //页面button初始化状态->开始
    driver.findElement(By.css('.tip_option .dropdown-toggle')).click()
    driver.findElement(By.id('filter_str')).click();
    driver.findElement(By.id('filter_str')).sendKeys("MC");
    let btnt = await driver.findElement(By.css('#act_start_btn')).getText()

    console.log(btnt,'文本');
    // setTimeout(() => {

    //   console.log( document.getElementById('act_start_btn'),'document');
    // }, 10000);
    
    // document.getElementById('act_start_btn').addEventListener('click',function(){
    //   console.log('点击切换状态了');
    // })
    // lis.addEventListener('click',function(){
    //   console.log('点击进行切换了');
    // })
    // document.getElementById('#act_start_btn').onclick = function(){
    //   let btnt =  driver.findElement(By.css('#act_start_btn')).getText()
    //   console.log(btnt, '文本');
    // }
    // let set = setInterval(() => {
      // driver.navigate().refresh();
      // let btnTxt = driver.findElement(By.css('#act_start_btn')).getText()
      // let aa = driver.findElements(By.css('#query_result_table tbody tr'));

      // // clearInterval(set)
      // let aac = aa.then((req)=>{
      //   return req
      // })
      // console.log(btnTxt);
      // while (aac&&btnTxt == '开始') {
        
      // clearInterval(set)
      //   getData()
      // }
    // }, 10000);
  } finally {
    console.log('文档执行成功了');
  }
  function getData() {
    
    // driver.findElement(By.id('act_start_btn')).click(); // 更改页面button装填-> 停止
    let abb = driver.findElements(By.css('#query_result_table tbody tr'))

    abb.then((req) => {

      for (const e of req) {
        e.getText().then((res) => {
          dataArray.push(res);

        })

      }
      setTimeout(() => {

        let abcd = dataArray
        for (let index = 0; index < abcd.length; index++) {
          const element = abcd[index];

          nullArray.push(element.split(','))
        }

        fs.writeFileSync('./数据.txt', JSON.stringify(nullArray))
        fs.writeFileSync('./数据--.txt', JSON.stringify(dataArray))
        dataExe = xlsx.build([{ name: '表格', data: nullArray }]);
        fs.writeFileSync('./表格.xlsx', dataExe)

        driver.quit()
      }, 5000)
    })
  }
  //  setTimeout(function () {

  //   driver.findElement(By.id('act_start_btn')).click();
  //   let abb = driver.findElements(By.css('#query_result_table tbody tr'))

  //   abb.then((req) => {

  //     for (const e of req) {
  //       e.getText().then((res) => {
  //         dataArray.push(res);

  //       })

  //     }
  //     setTimeout(() => {

  //       let abcd = dataArray
  //       for (let index = 0; index < abcd.length; index++) {
  //         const element = abcd[index];

  //         nullArray.push(element.split(','))
  //       }

  //       fs.writeFileSync('./数据.txt', JSON.stringify(nullArray))
  //       fs.writeFileSync('./数据--.txt', JSON.stringify(dataArray))
  //       dataExe = xlsx.build([{ name: '表格', data: nullArray }]);
  //       fs.writeFileSync('./表格.xlsx', dataExe)

  //     }, 5000)
  //   })

  // }, 10000);
})();

  

  


