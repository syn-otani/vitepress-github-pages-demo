# 作業場検索（法律）

## 画面イメージ

![作業場検索（法律）画面](/images/workplace-law-screenshot.png)

## 概要

作業場・製品ごとの法令関連情報を検索・編集する画面。

## 検索条件

| 項目 | 種別 | 備考 |
|------|------|------|
| 部門 | セレクトボックス | 作業場所の部門（重複除く）を表示 |
| 作業場 | セレクトボックス | 部門に紐づく作業場を表示 |
| 製品名 | テキスト | 部分一致検索 |
| リスクアセスメント対象物 | チェックボックス | |
| 濃度基準値設定物質 | チェックボックス | |
| 皮膚など障害化学物質 | チェックボックス | |
| 作業記録 | チェックボックス | |
| 特殊健診 | チェックボックス | |
| 作業環境測定 | チェックボックス | |
| リスクレベル（吸入+経皮） | チェックボックス | Ⅰ〜Ⅳ |
| リスクレベル（爆発火災等） | チェックボックス | Ⅰ〜Ⅳ |
| 濃度基準値判定 | セレクトボックス | |
| ばく露低減措置検討要否 | チェックボックス | 要/否 |

## 検索結果

| No | 表示項目 | 検索条件 | 編集 | 表示形式 | リンク | 説明 |
|----|----------|----------|------|----------|--------|------|
| 1 | 部門 | ○ | | 文字列 | PDF | |
| 2 | 作業場 | ○ | | 文字列 | | |
| 3 | 屋内／屋外 | | | 屋内／屋外 | | |
| 4 | 製品名称 | ○ | | 文字列 | PDF | |
| 5 | 常時／臨時 | | | 常時／臨時 | | |
| 6 | 使用目的 | | | 文字列 | | |
| 7 | リスクアセスメント対象物 | ○ | | ○ or 空白 | ポップアップ | NULL以外は○　○クリックでデータをポップアップ表示 |
| 8 | リスクアセスメント結果 | | | ○ or 空白 | PDF | PDFファイルがある場合：○ |
| 9 | リスクレベル/（吸入＋経皮） | ○ | ○ | Ⅰ/Ⅱ/Ⅲ/Ⅳ | | |
| 10 | リスクレベル/（爆発・火災等） | ○ | ○ | Ⅰ/Ⅱ/Ⅲ/Ⅳ | | |
| 11 | ばく露低減措置検討/要否 | | | 要／否 | | リスクレベルのどちらかがⅢ以上：要、Ⅱ以下：否（自動判定） |
| 12 | ばく露状況報告書 | | ○ | ○ or 空白 | PDF | PDFファイルがある場合：○ |
| 13 | 濃度基準値設定物質 | ○ | | ○ or 空白 | ポップアップ | NULL以外は○　○クリックでデータをポップアップ表示 |
| 14 | 濃度基準値判定 | | ○ | 文字列（※1） | | |
| 15 | 皮膚など障害化学物質/皮膚 | ○ | | ○ or 空白 | ポップアップ | NULL以外は○　○クリックでデータをポップアップ表示 |
| 16 | 皮膚など障害化学物質/眼 | ○ | | ○ or 空白 | ポップアップ | NULL以外は○　○クリックでデータをポップアップ表示 |
| 17 | 作業記録 | ○ | | ○ or 空白 | ポップアップ | NULL以外は○　○クリックでデータをポップアップ表示 |
| 18 | 特殊検診 | ○ | | ○ or 空白 | ポップアップ | NULL以外は○　○クリックでデータをポップアップ表示 |
| 19 | 作業環境測定 | ○ | | ○ or 空白 | ポップアップ | NULL以外は○　○クリックでデータをポップアップ表示 |

※1: 濃度基準値判定は3つのパターンから選択（編集モードで画面より設定）

## PDF保存先

| 項目 | PDF保存先 |
|------|-----------|
| 部門 | `storage/workArea/map/map_[WorkArea!DEPT_NAME].pdf` |
| 製品名称 | `storage/sds/sds/[SDS_data!SDS_NAME]_[SDS_data!SDS_CoNAME]_[SDS_data!SDS_DATE].pdf` |
| リスクアセスメント結果 | `storage/workArea/リスクアセスメント結果/RA_[WorkArea!DEPT_NAME]_[WorkArea!WORK_NAME]_[SDS_data!SDS_NAME].pdf` |
| ばく露状況報告書 | `storage/workArea/ばく露状況報告書/ばく露状況報告書_[WorkArea!DEPT_NAME]_[WorkArea!WORK_NAME]_[SDS_data!SDS_NAME].pdf` |

## データベース

| No | 表示項目 | テーブル名（論理） | テーブル名（物理） | カラム名（論理） | カラム名（物理） |
|----|----------|-------------------|-------------------|-----------------|-----------------|
| 1 | 部門 | [作業場所](/data/workarea) | WorkArea | 部門 | DEPT_NAME |
| 2 | 作業場 | [作業場所](/data/workarea) | WorkArea | 作業場所 | WORK_NAME |
| 3 | 屋内／屋外 | [作業場所](/data/workarea) | WorkArea | 屋内／屋外 | INOUTDOOR |
| 4 | 製品名称 | [作業場所](/data/workarea) | WorkArea | 保有製品（製品名称） | SDS_NAME_001〜020 |
| 5 | 常時／臨時 | [作業場所](/data/workarea) | WorkArea | 保有製品（常時／臨時） | （未定義） |
| 6 | 使用目的 | [作業場所](/data/workarea) | WorkArea | 保有製品（使用用途） | USE_USAGE_001〜020 |
| 7 | リスクアセスメント対象物 | [SDS情報](/data/sds-data) | SDS_data | リスクアセスメント対象物 | RISK_ASSESSMENT |
| 9 | リスクレベル（吸入＋経皮） | [作業場拡張データ](/data/workarea-ex) | WorkAreaEx | リスクレベル（吸入＋経皮） | RISKLEVEL_SKIN_001〜100 |
| 10 | リスクレベル（爆発・火災等） | [作業場拡張データ](/data/workarea-ex) | WorkAreaEx | リスクレベル（爆発・火災等） | RISKLEVEL_FIRE_001〜100 |
| 13 | 濃度基準値設定物質 | [SDS情報](/data/sds-data) | SDS_data | 濃度基準値設定物質 | CONCENT_SUBSTANCE |
| 14 | 濃度基準値判定 | [作業場拡張データ](/data/workarea-ex) | WorkAreaEx | 濃度基準値判定 | CONCENT_JUDGE_001〜100 |
| 15 | 皮膚など障害化学物質（皮膚） | [SDS情報](/data/sds-data) | SDS_data | 皮膚など障害化学物質 | SKIN_SUBSTANCE |
| 16 | 皮膚など障害化学物質（眼） | [SDS情報](/data/sds-data) | SDS_data | 皮膚など障害化学物質（眼） | EYE_SUBSTANCE |
| 17 | 作業記録 | [SDS情報](/data/sds-data) | SDS_data | 作業記録対象物質 | WORKLOG_SUBSTANCE |
| 18 | 特殊検診 | [SDS情報](/data/sds-data) | SDS_data | 特殊健康診断物質 | MEDICAL_SUBSTANCE |
| 19 | 作業環境測定 | [SDS情報](/data/sds-data) | SDS_data | 作業環境測定物質 | WORKENV_SUBSTANCE |

## ファイル保存仕様

| No | データ名 | 形式 | 保存先 |
|----|----------|------|--------|
| 1 | SDS | PDF | `storage/sds/sds/[SDS_NAME]_[SDS_CoNAME]_[SDS_DATE].pdf` |
| 2 | ラベル | PDF | `storage/sds/Label/LB_[SDS_NAME]_[SDS_CoNAME]_[SDS_DATE].pdf` |
| 3 | 部門 | PDF | `storage/workArea/map/map_[DEPT_NAME].pdf` |
| 4 | 特殊健診対象者 | Excel | `storage/workArea/特健/特健_[DEPT_NAME].xlsx` |
| 5 | 作業記録対象者 | Excel | `storage/workArea/作業記録/作業記録_[DEPT_NAME].xlsx` |
| 6 | 作業環境測定結果 | PDF | `storage/workArea/作業環境測定結果/作業環境測定結果_[DEPT_NAME]_[WORK_NAME].pdf` |
| 7 | 特化物掲示 | PDF | `storage/workArea/特化物掲示/特化物掲示_[DEPT_NAME]_[WORK_NAME].pdf` |
| 8 | 有機溶剤掲示 | PDF | `storage/workArea/有機溶剤掲示/有機溶剤掲示_[DEPT_NAME]_[WORK_NAME].pdf` |
| 9 | 粉じん掲示 | PDF | `storage/workArea/粉じん掲示/粉じん掲示_[DEPT_NAME]_[WORK_NAME].pdf` |
| 10 | 鉛掲示 | PDF | `storage/workArea/鉛掲示/鉛掲示_[DEPT_NAME]_[WORK_NAME].pdf` |
| 11 | リスクアセスメント結果 | PDF | `storage/workArea/リスクアセスメント結果/RA_[DEPT_NAME]_[WORK_NAME]_[SDS_NAME].pdf` |
| 12 | ばく露状況報告書 | PDF | `storage/workArea/ばく露状況報告書/ばく露状況報告書_[DEPT_NAME]_[WORK_NAME]_[SDS_NAME].pdf` |

## 編集モード仕様

### 表示

- リスクレベル（吸入＋経皮）：Ⅰ/Ⅱ/Ⅲ/Ⅳから選択
- リスクレベル（爆発・火災等）：Ⅰ/Ⅱ/Ⅲ/Ⅳから選択
- 濃度基準値判定：3つのパターンから選択
- ばく露状況報告書：PDFファイルがある場合は○ + アップロードボタン、ない場合はアップロードボタンのみ

### アップロード

- Laravelのテンポラリ領域に元ファイル名でアップロード
- アップロード完了後：元ファイル名 + ×ボタンを表示
- ×ボタン：テンポラリファイルを削除

### 登録

- 登録ボタン：テンポラリファイルをPDF保存先へコピー
- ファイルがある場合は上書き

## 操作

- 表示/編集トグル: モード切替
- 検索ボタン: 検索実行
- クリアボタン: 検索条件クリア
- CSV出力: 検索結果をCSVダウンロード
- 登録ボタン: 編集内容を保存（編集モード時のみ）
