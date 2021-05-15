const {Builder, By, Key, util, WebDriver} = require('selenium-webdriver')




const open = () =>{
    let driver = new Builder().forBrowser('chrome').build();
    driver.get(`https://www.instagram.com/`)
}


module.exports.open = open