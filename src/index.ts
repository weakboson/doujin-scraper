import * as puppeteer from 'puppeteer'
import Doujin from './doujin-scraper'
import * as readline from 'readline'

function stdin(): string[] {
  const reader = readline.createInterface({
    input: process.stdin
  })
  
  const buf = []
  
  reader.on('line', (line) => buf.push(line.trim()))

  return buf
}

(async () => {
  const cids = stdin()

  const browser = await puppeteer.launch({
    args: [
      '--no-sandbox',
      '--disable-setuid-sandbox'
    ]
  })

  Promise.all(cids.map(cid => (new Doujin(browser, cid).fetch())))
    .then(async doujins => {
      doujins.forEach(doujin => console.log(`${doujin.cid}\t${doujin.basename}`))
      await browser.close()
    })
})()
