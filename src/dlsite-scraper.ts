import * as puppeteer from 'puppeteer'

class DlsiteScraper {
  private browser: puppeteer.Browser
  productId: string
  circle: string
  title: string

  constructor(browser: puppeteer.Browser, productId: string) {
    this.browser = browser
    this.productId = productId
  }

  async fetch(): Promise<DlsiteScraper> {
    const page = await this.browser.newPage()
    await page.goto(`https://www.dlsite.com/maniax/work/=/product_id/${this.productId}.html`, { timeout: 60 * 10 * 1000 })
  
    this.circle = await page.$eval('.maker_name', el => el.textContent.trim())
    this.title = await page.$eval('#work_name', el => el.textContent.trim())

    await page.screenshot({ path: `./ss/${this.basename}.png` })
    await page.close()
  
    return new Promise(resolve => resolve(this))
  }

  get basename(): string {
    return `[${this.circle}]${this.title}`
  }

  get cid(): string {
    return this.productId
  }
}

export default DlsiteScraper
