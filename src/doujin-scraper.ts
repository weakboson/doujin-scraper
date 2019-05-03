import * as puppeteer from 'puppeteer'

class DoujinScraper {
  private browser: puppeteer.Browser
  cid: string
  circle: string
  title: string

  constructor(browser: puppeteer.Browser, cid: string) {
    this.browser = browser
    this.cid = cid
  }

  async fetch(): Promise<DoujinScraper> {
    const page = await this.browser.newPage()
    await page.goto(`https://www.dmm.co.jp/dc/doujin/-/detail/=/cid=${this.cid}`)
  
    this.circle = await page.$eval('.circleName__txt', el => el.textContent)
  
    this.title = await page.$eval('.productTitle__txt', title => {
      const sales = title.querySelectorAll('span')
      sales.forEach((node) => title.removeChild(node))
      return title.textContent.trim()
    })
  
    return new Promise(resolve => resolve(this))
  }

  get basename(): string {
    return `[${this.circle}]${this.title}`
  }
}

export default DoujinScraper
