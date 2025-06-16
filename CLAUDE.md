# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## コマンド

### ビルドと開発
- `npm run development` - TypeScriptファイルをコンパイル
- `bin/build.sh` - Dockerコンテナをビルドし、TypeScriptをコンパイル

### スクレイピング操作
- `bin/scrape-dmm.sh` - FANZA/DMMからダウンロードしたファイルのメタデータを抽出
- `bin/scrape-dlsite.sh` - DLsiteからダウンロードしたファイルのメタデータを抽出
- `bin/rename-dmm.sh` - スクレイピングしたメタデータを使ってFANZA/DMMファイルをリネーム
- `bin/rename-dlsite.sh` - スクレイピングしたメタデータを使ってDLsiteファイルをリネーム

### Docker
- `docker-compose up puppeteer` - コンテナ内でスクレイピング操作を実行
- `docker-compose up ruby` - コンテナ内でファイルリネーム操作を実行

## アーキテクチャ

### 主要コンポーネント
- **DoujinScraper** (`src/doujin-scraper.ts`) - FANZA/DMMスクレイパークラス
- **DlsiteScraper** (`src/dlsite-scraper.ts`) - DLsiteスクレイパークラス
- **エントリーポイント**: `src/index.ts` (DMM), `src/dlsite.ts` (DLsite)

### データフロー
1. 商品ID/CIDを標準入力から読み取り
2. Puppeteerで商品ページに移動
3. CSSセレクターでタイトルとサークル/作者を抽出
4. 年齢確認画面を自動処理
5. 出力形式: `{商品ID}\t{整形された名前}`
6. Rubyスクリプトが出力を使って実際のファイルをリネーム

### ファイル命名規則
- 形式: `[サークル/作者]タイトル`
- ファイルシステム互換のため特殊文字を変換 (例: `/` → `⁄`)
- 期待される入力パターン: DMM `d_*.zip`, DLsite `?J*.zip`

### 環境設定
- `BASEDIR` 環境変数でダウンロードディレクトリを定義
- デフォルト: `/mnt/chromeos/MyFiles/Downloads/同人`
- PuppeteerはDocker互換のため `--no-sandbox` で実行
- ページ読み込みタイムアウト: 10分
