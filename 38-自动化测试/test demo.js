const { Builder, By, Key, until } = require('selenium-webdriver');

(async function example() {
  let driver = await new Builder().forBrowser('chrome').build();
  try {
    await driver.manage().setTimeouts({ implicit: 1000 });
    await driver.get('file:///D:/%E7%9F%A5%E8%AF%86%E7%BB%83%E4%B9%A0/VueTest/38-%E8%87%AA%E5%8A%A8%E5%8C%96%E6%B5%8B%E8%AF%95/%E5%85%A5%E9%97%A8.html');
    let a = (await driver.findElement(By.id('test')))
    // let b = await driver.findElements(By.css('#tr td'))
    let b = await driver.findElements(By.css('#tr'))
    console.log('查看b的信息是什么',b);
    for (const e of b) {
      console.log(await e.getText());
    }
    // for (let index = 0; index < b.length; index++) {
    //   const element = b[index];
    //   console.log('是什么',element.get_attribute('textContent'));
      
    // }
    // console.log('333',b);
    // console.log('222',b);
    // b.then((req)=>{
    //   let bcd = req
    //   console.log('查看',bcd);
    // })
  } finally {
    console.log('文档执行成功了');
  }
})();
