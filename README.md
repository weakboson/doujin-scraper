# dmm-scraper

## dmm doujin の構造

### url

`https://www.dmm.co.jp/dc/doujin/-/detail/=/cid={item_id}`

### title

```js
const title = document.querySelector('.productTitle__txt')
const sale = title.querySelector('span')
title.removeChild(sale)
const titleText = title.textContent.trim()
```

### circle

```js
const circleText = document.querySelector('.circleName__txt').textContent
```

