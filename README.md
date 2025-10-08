# Gooty Frontend

Next.jsフロントエンドアプリケーションです。

## 必要な環境

- Docker
- Docker Compose

## セットアップ

### Dockerコンテナの起動

```bash
# コンテナのビルドと起動
docker compose up --build

# バックグラウンドで起動
docker compose up -d --build
```

## 開発作業

### 開発サーバーの起動

```bash
# Dockerコンテナ内で開発サーバーを起動
docker compose exec front npm run dev

# または、コンテナ起動時に自動で開発サーバーが起動します
```

### その他の便利なコマンド

```bash
# アプリケーションのビルド
docker compose exec front npm run build

# プロダクション用サーバーの起動
docker compose exec front npm run start

# ESLintによるコードチェック
docker compose exec front npm run lint

# Node.jsコンテナ内でシェルを起動
docker compose exec front sh

# ログの確認
docker compose logs front

# コンテナの停止
docker compose down
```

## アクセス情報

- フロントエンド: http://localhost:3001

## 技術スタック

- **フレームワーク**: Next.js 15.5.4
- **UI ライブラリ**: React 19.1.0
- **言語**: TypeScript ^5
- **スタイリング**: Tailwind CSS ^4
- **リンター**: ESLint ^9
- **パッケージマネージャー**: npm
- **開発サーバー**: Turbopack（高速ビルド）

## 開発時の注意事項

- ホットリロードが有効になっているため、ファイルを編集すると自動的にブラウザが更新されます
- `node_modules`はボリュームマウントから除外されているため、依存関係の変更時はコンテナを再ビルドしてください
