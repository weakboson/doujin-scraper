# doujin-scraper

## Usage

```shell
# ダウンロード済みファイルからサークルと名前のリストを作成
bin/scrape-dmm.sh
# リストを元にリネーム
bin/rename-dmm.sh
```

## FANZA 同人の構造

### url

```js
`https://www.dmm.co.jp/dc/doujin/-/detail/=/cid=${cid}`
```

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

## DLsite maniax の構造

### url

```js
`https://www.dlsite.com/maniax/work/=/product_id/${productId}.html`
```

### title

```js
const title = document.querySelector('#work_name').textContent
```

### circle

```js
const circle = document.querySelector('.maker_name').textContent
```
