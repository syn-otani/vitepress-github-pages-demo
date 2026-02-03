# 作業場検索（管理者・作業者情報）

## 画面イメージ

![作業場検索（管理者）画面](/images/workplace-manager-search-screenshot.png)

## 概要

作業場ごとの管理者・作業主任者の一覧を表示する画面。

## 検索条件

| 項目 | 種別 | 備考 |
|------|------|------|
| 部門 | セレクトボックス | 作業場所の部門（重複除く）を表示 |

## 検索結果

| No | 表示項目 | 検索条件 | 表示形式 | リンク | 説明 |
|----|----------|----------|----------|--------|------|
| 1 | 部門 | ○ | 文字列 | PDF | PDFファイルがある場合のみリンクを表示 |
| 2 | 作業場 | | 文字列 | | |
| 3 | 化学物質管理者 | | 文字列 | | |
| 4 | 保護具着用管理責任者 | | 文字列 | | |
| 5 | 衛生管理者 | | 文字列 | | |
| 6 | 有機溶剤作業主任者 | | 文字列 | | |
| 7 | 特定化学物質作業主任者 | | 文字列 | | |
| 8 | 鉛作業主任者 | | 文字列 | | |

## PDF保存先

| 項目 | PDF保存先 |
|------|-----------|
| 部門 | `storage/workArea/map/map_[WorkArea!DEPT_NAME].pdf` |

## データベース

| No | 表示項目 | テーブル名（論理） | テーブル名（物理） | カラム名（論理） | カラム名（物理） |
|----|----------|-------------------|-------------------|-----------------|-----------------|
| 1 | 部門 | [作業場所](/data/workarea) | WorkArea | 部門 | DEPT_NAME |
| 2 | 作業場 | [作業場所](/data/workarea) | WorkArea | 作業場所 | WORK_NAME |
| 3 | 化学物質管理者 | [作業場所](/data/workarea) | WorkArea | 化学物質管理者 | CHEMICAL_MANAGER |
| 4 | 保護具着用管理責任者 | [作業場所](/data/workarea) | WorkArea | 保護具着用管理責任者 | PROTECT_MANAGER |
| 5 | 衛生管理者 | [作業場所](/data/workarea) | WorkArea | 衛生管理者 | HYGIENE_MANAGER |
| 6 | 有機溶剤作業主任者 | [作業場所](/data/workarea) | WorkArea | 有機溶剤作業主任者 | OSOLVENT_MANAGER |
| 7 | 特定化学物質作業主任者 | [作業場所](/data/workarea) | WorkArea | 特定化学物質作業主任者 | SPECHEMICAL_MANAGER |
| 8 | 鉛作業主任者 | [作業場所](/data/workarea) | WorkArea | 鉛作業主任者 | LEAD_MANAGER |

## 操作

- 検索ボタン: 検索実行
- クリアボタン: 検索条件クリア
- 特殊健診対象者表示ボタン: 特健_部門.xlsxがあるレコードのみ表示
- 作業記録対象者表示ボタン: 作業記録_部門.xlsxがあるレコードのみ表示
- CSV出力: 検索結果をCSVダウンロード

## EXCEL保存先

| 項目 | EXCEL保存先 |
|------|-------------|
| 特殊健診対象者 | `storage/workArea/特健/特健_[WorkArea!DEPT_NAME].xlsx` |
| 作業記録対象者 | `storage/workArea/作業記録/作業記録_[WorkArea!DEPT_NAME].xlsx` |