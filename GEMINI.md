# Gemini のためのプロジェクトドキュメント

## プロジェクト概要

このプロジェクトは、DMMやDLsiteなどの同人サイトから作品情報をスクレイピングし、ダウンロードしたファイル名を作者名と作品名を含む形式に自動でリネームするためのツール群です。`puppeteer` を利用してウェブサイトから情報を取得し、シェルスクリプトやNode.jsスクリプトを組み合わせて一連の処理を自動化します。

## 技術スタック

- **言語:** TypeScript, Shell Script, Ruby
- **実行環境:** Node.js
- **主要ライブラリ:**
    - `puppeteer`: Webサイトのスクレイピングに使用します。
    - `typescript`: プロジェクトの主要な開発言語です。
- **コンテナ技術:** Docker

## プロジェクト構造

```
/
├── bin/ # メインの処理を実行するスクリプト群
│   ├── scrape-dlsite.sh # DLsiteから作品情報をスクレイピングする
│   ├── scrape-dmm.sh # DMMから作品情報をスクレイピングする
│   ├── rename-dlsite.sh # DLsiteの作品をリネームする
│   └── rename-dmm.sh # DMMの作品をリネームする
├── src/ # TypeScriptのソースコード
│   ├── dlsite-scraper.ts # DLsite用のスクレイピングロジック
│   ├── dmm-scraper.ts # DMM用のスクレイピングロジック (想定)
│   └── index.ts # エントリーポイント
├── container/ # Docker関連の設定
│   └── puppeteer/
│       └── Dockerfile # Puppeteer実行用のDockerfile
├── data/ # スクレイピング結果のデータなどを格納
├── dest/ # リネーム後のファイルの出力先
├── downloads/ # リネーム対象のダウンロード済みファイルを格納
├── package.json # Node.jsのプロジェクト設定
└── tsconfig.json # TypeScriptのコンパイラ設定
```

## 開発の始め方

1.  **依存関係のインストール:**
    ```bash
    npm install
    ```

2.  **TypeScriptのコンパイル:**
    ソースコードを変更した場合は、以下のコマンドでJavaScriptにコンパイルします。
    ```bash
    npm run development
    ```

## 実行方法

1.  `downloads/` ディレクトリにリネームしたいファイルを置きます。
2.  以下のスクリプトを実行して、作品情報を取得し、ファイル名を変更します。

    **DMMの場合:**
    ```bash
    # 作品情報をスクレイピング
    bin/scrape-dmm.sh

    # ファイルをリネーム
    bin/rename-dmm.sh
    ```

    **DLsiteの場合:**
    ```bash
    # 作品情報をスクレイピング
    bin/scrape-dlsite.sh

    # ファイルをリネーム
    bin/rename-dlsite.sh
    ```
