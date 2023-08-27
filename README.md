# node-web-vscode-sample

Node.js の Web アプリを VSCode で開発する際のベストプラクティスを模索する

# この階層を node プロジェクト化した理由

VSCode で typescript のバージョンを指定するため
各プロジェクトの typescrip バージョンは一致させること

# プロジェクト作成

## front-end

npm create vue@latest
上記コマンドでプロジェクトテンプレート作成(.vscode は不要)
https://vuejs.org/guide/quick-start.html#creating-a-vue-application
@types/node @tsconfig/node18 については nodejs バージョンと合わせる

以下例 node -v -> v20.5.1
npm i @types/node@20 -D
npm i @tsconfig/node20 -D
npm r @tsconfig/node18
tsconfig.node.json の以下修正
"extends": "@tsconfig/node18/tsconfig.json" -> "extends": "@tsconfig/node20/tsconfig.json"

## back-end

フォルダ作成して npm init -y
以下のコマンドでパッケージ install (適宜バージョン指定)
npm i express cors helmet
npm i -D @types/node@20 @types/express @types/cors @types/helmet typescript@~5.0.4 ts-node-dev

# 開発準備

まずこの階層で npm i
.env.develop コピーして .env を作成する
原則 .env 自体は git 管理しない

それそれのプロジェクトの階層まで cd してから npm i

# デバッグ方法

back-end
F5 でデバッグ開始
ブレークポイント有効

devcontainer.json で vscode -> settings -> launch で設定している(launch.json と同様)
設定を多少触る必要あり

front-end
プロジェクトフォルダに cd して npm run dev
ブレークポイントはブラウザ(Chrome)のデベロッパツールを使用

※どちらも保存で自動リロード有効

# 開発時の CORS エラー対策の設定

vite.config.ts に proxy 設定を行う
https://ja.vitejs.dev/config/server-options.html#server-proxy
