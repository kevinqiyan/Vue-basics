
let {Builder, By} = require('selenium-webdriver');
driver = new Builder().forBrowser('chrome').build();

(async function test(){

    const cdpConnection = await driver.createCDPConnection('page')
    await driver.logMutationEvents(cdpConnection, function (event) {
        assert.strictEqual(event['attribute_name'], 'style')
        assert.strictEqual(event['current_value'], '')
        assert.strictEqual(event['old_value'], 'display:none;')
    })

    await driver.get("https://www.google.com")

    let element = driver.findElement({ id: 'reveal' })
    await element.click()
    let revealed = driver.findElement({ id: 'revealed' })
    await driver.wait(until.elementIsVisible(revealed), 5000)

})();
  
