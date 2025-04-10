# 英語学習サポートアプリ - 要件定義

## 1. 目的
英語学習を進めるうえでネックに感じていた部分を解消できるアプリを開発する。

## 2. ターゲット
- 日本人英語学習者

## 3. 機能要件
**翻訳機能**: 日本語と英語の相互翻訳  
**単語帳機能**: 翻訳結果を保存し、後から確認できる  
**学習機能**: 単語を一覧表示 & クイズ形式で学習可能  

## 4. 非機能要件
- **ユーザー認証**: Next.js Authentication を使用  
- **翻訳 API**: DeepL API（無料プラン）  

## 5. 技術選定
| 項目          | 採用技術 |
|--------------|---------|
| **フロントエンド & バックエンド** | Next.js + TypeScript |
| **データベース** | PostgreSQL (Prisma 経由) |
| **インフラ** | Vercel (開発、デプロイ) / Supabase (Baas) / GitHub (ソースコード管理) |
| **外部 API** | DeepL API (無料プラン) |
