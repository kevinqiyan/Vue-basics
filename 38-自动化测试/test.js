const { Builder, By, Key, until } = require('selenium-webdriver');

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


    await driver.get('测试网站（大数据）');
    await driver.findElement(By.css('.custom_input')).sendKeys("4CEBBD3F8A07");
    driver.findElement(By.id('guide_start_btn')).click();
    // console.log(driver.findElement(By.id('guide_start_btn')),'11111');
    // let array2 = driver.findElement(By.css('#query_result_table>tbody'))
    // let seach = array2.findElement(By.name('tr'))
    // console.log(seach,'search');
    // var array =[]
    setTimeout(() => {
      let a = driver.findElements(By.css('#query_result_table tbody tr'))
      a.then((req) => {
        // array = req
        console.log('array数组', req);
      })

    }, 10000);

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
})();
