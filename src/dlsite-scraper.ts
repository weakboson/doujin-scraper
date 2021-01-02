import * as puppeteer from 'puppeteer'

class DlsiteScraper {
  private browser: puppeteer.Browser
  productId: string
  circle: string
  title: string
  artist: string

  constructor(browser: puppeteer.Browser, productId: string) {
    this.browser = browser
    this.productId = productId
  }

  async fetch(): Promise<DlsiteScraper> {
    const page = await this.browser.newPage()
    await page.goto(`https://www.dlsite.com/maniax/work/=/product_id/${this.productId}.html`, { timeout: 60 * 10 * 1000 })

    this.circle = await page.$eval('.maker_name', el => el.textContent.trim())
    this.title = await page.$eval('#work_name', el => el.textContent.trim())
    this.artist = await page.evaluate((selector) => {
      const list = Array.from(document.querySelectorAll(selector))
      const e = list.find((el) => { if (el.textContent == '作者') { return el } })
      if (e) {
        return e.nextElementSibling.textContent.trim()
      } else {
        return null
      }
    }, '#work_outline th')

    // await page.screenshot({ path: `./ss/${this.basename}.png` })
    await page.close()

    return new Promise(resolve => resolve(this))
  }

  get basename(): string {
    return `[${this.artist || this.circle}]${this.title}`
  }

  get cid(): string {
    return this.productId
  }
}

export default DlsiteScraper
