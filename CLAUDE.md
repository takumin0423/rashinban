# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## プロジェクト概要

Rashinban（羅針盤）は、技術学習の羅針盤となるようなサービスです。Next.js 15をベースに、Cloudflare Workersへのデプロイを前提として構築されています。

## 技術スタック

- **フレームワーク**: Next.js 15.3.5（App Router）
- **言語**: TypeScript 5（strict mode有効）
- **スタイリング**: Tailwind CSS v4
- **UIコンポーネント**: shadcn/ui（Radix UI）
- **デプロイ**: Cloudflare Workers（@opennextjs/cloudflare）
- **データベース**: Supabase
- **パッケージマネージャー**: pnpm 10.13.1
- **コード品質**: Biome 2.1.2（フォーマット・リント）

## 重要な注意事項

1. **コード品質チェックは`pnpm run precommit`で実行**（コード変更を行ったタスク完了前に必須）
2. **UIコンポーネントはshadcn/uiベースで構築**
3. **npxを使わず、pnpm dlxを使う**
4. **page.tsxやlayout.tsxはRSCのまま、イベントハンドラやReact Hooksが必要な部分だけクライアントコンポーネントとして切り出す**
5. **データ取得はRSCで行い、必要に応じてクライアントコンポーネントとして切り出した子コンポーネントのPropsに渡す**

## 開発コマンド

```bash
# 開発サーバー起動（Turbopack使用）
pnpm run dev

# ビルド
pnpm run build

# コード品質チェック
pnpm run check

# コード品質チェック（自動修正）
pnpm run check:fix

# コミット前に実行するコマンド
pnpm run precommit

# Cloudflareへデプロイ
pnpm run deploy

# Cloudflareプレビュー環境にデプロイ
pnpm run preview

# Cloudflare型定義生成
pnpm run cf-typegen
```

## プロジェクト構造

```
src/
├── app/           # Next.js App Router
│   ├── layout.tsx # ルートレイアウト（日本語設定）
│   └── page.tsx   # ホームページ
├── components/    # UIコンポーネント
│   └── ui/        # shadcn/uiコンポーネント
└── lib/           # ユーティリティ関数
    └── utils.ts   # 共通ユーティリティ

supabase/          # Supabase設定
└── config.toml    # Supabase設定ファイル
```

## 開発規約

### TypeScript
- `strict: true`が有効
- ライブラリ（npmパッケージ）はパッケージ名のみでimportし、プロジェクト内部のコードは必ず相対パス（`./`, `../`）でimportすること（例：`import { useState } from "react"`、`import { Button } from "../../components/ui/button"`）
- Cloudflare環境の型定義は`cloudflare-env.d.ts`に記述

### フォーマット・リント
- Biomeを使用（ESLint/Prettierの代替）
- インデント: タブ
- クォート: ダブルクォート
- import文の自動整理有効

### スタイリング
- Tailwind CSS v4を使用
- `globals.css`でグローバルスタイルを定義
- フォント: Geist Sans（本文）、Geist Mono（等幅）

### Cloudflare統合
- `getCloudflareContext()`が開発環境でも利用可能
- `open-next.config.ts`でCloudflare固有の設定を管理
- R2キャッシュ機能（コメントアウト状態）

## アーキテクチャ概要

### フロントエンド構成
- **レイアウト**: `layout.tsx`でHeader/Footer共通レイアウト、日本語設定（`lang="ja"`）
- **ページ構成**: セクション型コンポーネント（Hero, CoreFeatures, HowItWorks）で構成
- **コンポーネント設計**:
  - `src/app/_components/`: ページ固有のセクションコンポーネント
  - `src/components/layout/`: 共通レイアウトコンポーネント（header, footer）
  - `src/components/ui/`: shadcn/uiベースの再利用可能UIコンポーネント

### 設定ファイル
- **TypeScript**: `tsconfig.json`でstrict mode有効、`@/*`パスエイリアス設定
- **Biome**: `biome.json`でフォーマット・リント設定（タブインデント、ダブルクォート）
- **Cloudflare**: `cloudflare-env.d.ts`で環境変数型定義（自動生成）
- **Next.js**: `next.config.ts`でCloudflare開発環境統合

### データベース設定
- **Supabase**: `supabase/config.toml`で設定（API/Studio/Auth等は初期状態で無効）
- **ローカル開発**: Studio（:54323）のみ有効、その他サービスは無効化

## 重要な開発パターン

### インポート規約
```typescript
// 外部ライブラリ（パッケージ名のみ）
import { useState } from "react"
import { clsx } from "clsx"

// 内部コード（相対パス必須）
import { Button } from "../../components/ui/button"
import { cn } from "../lib/utils"
```

### shadcn/uiコンポーネント追加
```bash
# shadcn/uiコンポーネント追加
pnpm dlx shadcn@latest add button card

# 既存コンポーネント確認
ls src/components/ui/
```
