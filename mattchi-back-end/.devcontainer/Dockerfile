# debian
FROM node:18.13.0-slim

#インストール可能なパッケージの「一覧」を更新
RUN apt-get update

#lsofインストール
#プロセスIDの確認のため
RUN apt-get install lsof

# gitインストール
#git管理するため
RUN apt-get install git -y