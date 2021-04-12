const { Builder, By, Key, until } = require('selenium-webdriver');

const chrome = require('selenium-webdriver/chrome');
let opts = new chrome.Options();
let fs = require('fs');
(async function example() {
  let driver = new Builder().forBrowser('chrome').setChromeOptions(opts.headless()).build();
  await driver.get('测试地址');
  try {
    let base64 = await driver.printPage({ pageRanges: ["1-2"] });
    await fs.writeFileSync('./test2.pdf', base64, 'base64');
  } catch (e) {
    console.log(e)
  }
  await driver.quit();
})()
