import * as puppeteer from 'puppeteer'

(async() => {
    const browser = await puppeteer.launch({
        args: [
          '--no-sandbox',
          '--disable-setuid-sandbox'
        ]
    });
    const page = await browser.newPage()
    await page.goto('https://www.dmm.co.jp/dc/doujin/-/detail/=/cid=d_153800')

    const circleText = await page.$eval('.circleName__txt', el => el.textContent)
    console.log(`circleText: ${circleText}`)

    const titleText = await page.$eval('.productTitle__txt', title => {
      const sale = title.querySelector('span')
      title.removeChild(sale)
      return title.textContent.trim()
    })
    console.log(`titleText: ${titleText}`)
    
    browser.close()
})();
