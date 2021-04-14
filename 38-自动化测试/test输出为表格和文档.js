const { Builder, By, Key, until } = require('selenium-webdriver');
var xlsx = require('node-xlsx');
var fs = require('fs');
const { type } = require('os');
var window = window;
var dataExe = [];
var dataArray = [];
let nullArray = [];
(async function example() {
  let driver = await new Builder().forBrowser('chrome').build();
  try {
    await driver.manage().setTimeouts({ implicit: 1000 });

    // const cdpConnection = await driver.createCDPConnection('page') // 监听网页DOM结构变化
    // await driver.logMutationEvents(cdpConnection, function (event) {
    //   assert.strictEqual(event['attribute_name'], 'style')
    //   assert.strictEqual(event['current_value'], '')
    //   assert.strictEqual(event['old_value'], 'display:none;')
    // })


    await driver.get('大数据测试网站');
    await driver.findElement(By.css('.custom_input')).sendKeys("4CEBBD3F8A07");
    driver.findElement(By.id('guide_start_btn')).click();

    // console.log(driver.findElement(By.id('guide_start_btn')),'11111');
    // let array2 = driver.findElement(By.css('#query_result_table>tbody'))
    // let seach = array2.findElement(By.name('tr'))
    // console.log(seach,'search');
    // var array =[]
    // await driver.wait(until.elementLocated(By.css('#query_result_table tbody tr')),10000)
    // await driver.manage().setTimeouts({ implicit: 10000 });
    // let abb = driver.findElements(By.css('#query_result_table tbody tr'))
    // let this_ = this.driver
    // for (const e of abb) {
    //   assert.strictEqual(await e.getText())
    //   console.log( await e.getText());
    // }

    // array.then((res)=>{
    //   console.log(res,'成功');
    // }).catch((error)=>{
    //   console.log(error,'失败');
    // })
    // console.log(array);
    // for (let index = 0; index < array.length; index++) {
    //   const element = array[index];
    //   console.log(element);
    // }
    // let firstResult = await driver.wait(until.elementLocated(By.css('query_result_table>tbody>tr')), 10000);
    // console.log(firstResult);
    // driver.findElements(By.css('query_result_table>tbody>tr'))
    // await driver.findElement(By.id('guide_start_btn')).click();
    // await driver.wait(until.titleIs('webdriver - Google Search'), 1000);
  } finally {
    console.log('文档执行成功了');
  }
  setTimeout(function () {

    driver.findElement(By.id('act_start_btn')).click();
    let abb = driver.findElements(By.css('#query_result_table tbody tr'))
    // console.log(typeof abb,abb);
    abb.then((req) => {

      for (const e of req) {
        e.getText().then((res) => {
          dataArray.push(res);

        })

      }
      setTimeout(() => {
        // dataExe = xlsx.build([{name:'表格',data:dataArray}]);
        // JSON.stringify(dataArray)
        // let abcd = JSON.stringify(dataArray)
        let abcd = dataArray
        for (let index = 0; index < abcd.length; index++) {
          const element = abcd[index];
          //  nullArray.push(element)
          nullArray.push(element.split(','))
        }
        // console.log(nullArray);
        fs.writeFileSync('./数据.txt', JSON.stringify(nullArray))
        fs.writeFileSync('./数据--.txt', JSON.stringify(dataArray))
        dataExe = xlsx.build([{ name: '表格', data: nullArray}]);
        fs.writeFileSync('./表格.xlsx', dataExe)
        // fs.writeFileSync('./数据.txt',abcd)
        // console.log(dataArray.split(','));
        // let abc = dataArray.split(',');
        // for (let index = 0; index < abc.length; index++) {
        //   const element = abc[index];
        //   dataExe.push(element)
        // }
        // console.log(dataExe);
        // dataExe = xlsx.build([{name:'表格',data:dataArray}]);
        // fs.writeFileSync('./表格.xlsx',dataExe)
      }, 5000)
    })
    // console.log(dataExe);

    // 输出为exel文件
    // dataExe = xlsx.build([{name:'表格',data:dataArray}]);
    // fs.writeFileSync('./表格.xlsx',dataExe,'binary')

  }, 5000);
})();
