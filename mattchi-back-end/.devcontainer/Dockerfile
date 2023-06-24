# debian
FROM node:18.13.0-slim

#インストール可能なパッケージの「一覧」を更新
RUN apt-get update

#lsofインストール
#プロセスIDの確認して、プロセスを消すため
#TODO：F5デバックを切った後、自動でプロセスを消す対応をする
RUN apt-get install lsof

# gitインストール
#git管理するため
RUN apt-get install git -y