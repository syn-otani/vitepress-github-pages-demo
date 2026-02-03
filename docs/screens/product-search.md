# 製品検索

## 画面イメージ

![製品検索画面](/images/product-search-screenshot.png)

## 概要

化学物質製品を検索し、一覧表示する画面。

## 検索条件

| 項目 | 種別 | 備考 |
|------|------|------|
| 製品名称 | テキスト | 部分一致検索 |
| SDS発行・更新日 | セレクトボックス（From〜To） | 年指定 |

## 入力チェック

| 項目 | チェック内容 | エラーメッセージ |
|------|--------------|------------------|
| SDS発行・更新日 | FromがToより大きい場合エラー | ToはFromより大きい年を設定して下さい。 |

## 検索結果

| No | 表示項目 | 表示形式 | リンク | 説明 |
|----|----------|----------|--------|------|
| 1 | 製品名称 | 文字列 | PDF | |
| 2 | 製造会社 | 文字列 | | |
| 3 | SDS発行・更新日 | YYYY年MM月DD日 | | |
| 4 | ラベル | 有 or 空白 | PDF | PDFファイルがある場合は有 |
| 5 | リスクアセスメント対象物 | ○ or 空白 | ポップアップ | NULL以外は○　○クリックでデータをポップアップ表示 |
| 6 | 濃度基準値設定物質 | ○ or 空白 | ポップアップ | NULL以外は○　○クリックでデータをポップアップ表示 |
| 7 | 皮膚など障害化学物質/皮膚 | ○ or 空白 | ポップアップ | NULL以外は○　○クリックでデータをポップアップ表示 |
| 8 | 皮膚など障害化学物質/眼 | ○ or 空白 | ポップアップ | NULL以外は○　○クリックでデータをポップアップ表示 |
| 9 | 作業記録 | ○ or 空白 | ポップアップ | NULL以外は○　○クリックでデータをポップアップ表示 |
| 10 | 特殊検診 | ○ or 空白 | ポップアップ | NULL以外は○　○クリックでデータをポップアップ表示 |
| 11 | 作業環境測定 | ○ or 空白 | ポップアップ | NULL以外は○　○クリックでデータをポップアップ表示 |
| 12 | 使用部門 | 文字列 | PDF | 作業場所のSDS_NAME_001〜020で製品名称をリンクし部門を取得。スペース区切りで表示 |

## PDF保存先

| 項目 | PDF保存先 |
|------|-----------|
| 製品名称 | `storage/sds/sds/[SDS_data!SDS_NAME]_[SDS_data!SDS_CoNAME]_[SDS_data!SDS_DATE].pdf` |
| ラベル | `storage/sds/Label/LB_[SDS_data!SDS_NAME]_[SDS_data!SDS_CoNAME]_[SDS_data!SDS_DATE].pdf` |
| 使用部門 | `storage/workArea/map/map_[WorkArea!DEPT_NAME].pdf` |

## データベース

| No | 表示項目 | テーブル名（論理） | テーブル名（物理） | カラム名（論理） | カラム名（物理） |
|----|----------|-------------------|-------------------|-----------------|-----------------|
| 1 | 製品名称 | [SDS情報](/data/sds-data) | SDS_data | 製品名称 | SDS_NAME |
| 2 | 製造会社 | [SDS情報](/data/sds-data) | SDS_data | 製造会社 | SDS_CoNAME |
| 3 | SDS発行・更新日 | [SDS情報](/data/sds-data) | SDS_data | SDS発行・更新日 | SDS_DATE |
| 5 | リスクアセスメント対象物 | [SDS情報](/data/sds-data) | SDS_data | リスクアセスメント対象物 | RISK_ASSESSMENT |
| 6 | 濃度基準値設定物質 | [SDS情報](/data/sds-data) | SDS_data | 濃度基準値設定物質 | CONCENT_SUBSTANCE |
| 7 | 皮膚など障害化学物質（皮膚） | [SDS情報](/data/sds-data) | SDS_data | 皮膚など障害化学物質 | SKIN_SUBSTANCE |
| 8 | 皮膚など障害化学物質（眼） | [SDS情報](/data/sds-data) | SDS_data | 皮膚など障害化学物質（眼） | EYE_SUBSTANCE |
| 9 | 作業記録 | [SDS情報](/data/sds-data) | SDS_data | 作業記録 | WORKLOG_SUBSTANCE |
| 10 | 特殊検診 | [SDS情報](/data/sds-data) | SDS_data | 特殊健診 | MEDICAL_SUBSTANCE |
| 11 | 作業環境測定 | [SDS情報](/data/sds-data) | SDS_data | 作業環境測定 | WORKENV_SUBSTANCE |
| 12 | 使用部門 | [作業場所](/data/workarea) | WorkArea | 部門 | DEPT_NAME |

## 操作

- 初期表示： 何もしない
- 検索ボタン: 検索実行
- クリアボタン: 初期表示に戻す
- CSV出力: 検索結果をCSVダウンロード
