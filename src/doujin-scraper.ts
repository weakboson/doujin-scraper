import * as puppeteer from 'puppeteer'

class DoujinScraper {
  private browser: puppeteer.Browser

  constructor(browser: puppeteer.Browser) {
    this.browser = browser
  }

  async basename(cid: string): Promise<string> {
    const page = await this.browser.newPage()
    await page.goto(`https://www.dmm.co.jp/dc/doujin/-/detail/=/cid=${cid}`)
  
    const circleText = await page.$eval('.circleName__txt', el => el.textContent)
  
    const titleText = await page.$eval('.productTitle__txt', title => {
      const sales = title.querySelectorAll('span')
      sales.forEach((node) => title.removeChild(node))
      return title.textContent.trim()
    })
  
    return new Promise(resolve => {
      resolve(`[${circleText}]${titleText}`)
    })
  }
}

export default DoujinScraper
