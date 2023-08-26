# node-web-vscode-sample

Node.js の Web アプリを VSCode で開発する際のベストプラクティスを模索する

# この階層を node プロジェクト化した理由

VSCode で typescript のバージョンを指定するため
各プロジェクトの typescrip バージョンは一致させること

# デバッグ方法

back-end
VSCode の launch.json を用意してあるので F5
ブレークポイント有効

front-end
プロジェクトフォルダに cd して npm run dev
ブレークポイントはブラウザ(Chrome)のデベロッパツールを使用

※どちらも保存で自動リロード有効

# 開発時の CORS エラー対策の設定

vite.config.ts に proxy 設定を行う
https://ja.vitejs.dev/config/server-options.html#server-proxy
