import * as puppeteer from 'puppeteer'
import Doujin from './doujin-scraper'
import * as readline from 'readline'

function stdin(): Array<string> {
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

  const doujin = new Doujin(browser)
  
  Promise.all(cids.map(cid => doujin.basename(cid)))
    .then(async bns => {
      bns.forEach(bn => console.log(bn))
      await browser.close()
    })
})()
