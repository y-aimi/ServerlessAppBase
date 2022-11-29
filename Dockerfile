### 環境設定
# アプリの格納場所
ARG APPPATH="/var/app"

### ローカル用イメージ
FROM node:18-slim

# Node動作環境
RUN apt-get update && \
    apt-get install -y git && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/*

# Nodeの必要モジュールを導入
WORKDIR ${APPPATH}
COPY ./package*.json .
RUN npm install -g npm && \
    npm ci && \
    npm cache clean --force

# ソースコード類をコピー
COPY . .

# アプリ起動
CMD ["npm", "run", "start"]