# DB設計

## 基本情報

| 項目 | 値 |
|------|-----|
| データベース | PostgreSQL 18.1 |
| スキーマ名 | CS_SCHEMA |
| データベース名 | Chemical_Substance |

## テーブル一覧

| No | テーブル名（日本語） | テーブル名（物理） | 説明 |
|----|---------------------|-------------------|------|
| 1 | [SDS情報](./sds-data) | SDS_data | SDS情報を管理する |
| 2 | [CAS情報](./cas-data) | CAS_data | CAS情報を管理する |
| 3 | [作業場所](./workarea) | WorkArea | 作業場所データを管理する |
| 4 | [作業場拡張データ](./workarea-ex) | WorkAreaEx | 作業場所データを管理する（安衛G管理対象外データ） |
| 5 | [ユーザ権限](./user-permission) | UserPermission | ユーザの権限情報を管理する |

## ER図

```mermaid
erDiagram
    SDS_data ||--o{ WorkArea : "SDS_NAME_001-020"
    SDS_data ||--o{ WorkAreaEx : "SDS_NAME_001-010"
    CAS_data ||--o{ WorkAreaEx : "CAS_NAME_001-010"
    WorkArea ||--|| WorkAreaEx : "DEPT_NAME, WORK_NAME"

    SDS_data {
        BIGINT SDS_ID
        TEXT SDS_NAME PK
        TEXT SDS_CoNAME
        DATE SDS_DATE
        TEXT RISK_ASSESSMENT
        TEXT WORKLOG_SUBSTANCE
        TEXT WORKENV_SUBSTANCE
        TEXT MEDICAL_SUBSTANCE
        TEXT NOTICE_SUBSTANCE
        TEXT SKIN_SUBSTANCE
        TEXT EYE_SUBSTANCE
        TEXT CONCENT_SUBSTANCE
    }

    CAS_data {
        BIGINT CAS_ID
        TEXT CAS_NAME PK
        TEXT INGREDIENTS
        TEXT CONTENT_RATE
        TEXT RISK_CHECK
        TEXT WORK_CHECK
        TEXT ENV_CHECK
        TEXT HEALTH_CHECK
        TEXT NOTICE_CHECK
        TEXT SKINPROTECT_CHECK
        TEXT EYEPROTECT_CHECK
        TEXT CONCENT_CHECK
    }

    WorkArea {
        BIGINT WORKAREA_ID
        TEXT DEPT_NAME PK
        TEXT WORK_NAME PK
        TEXT CHEMICAL_MANAGER
        TEXT PROTECT_MANAGER
        TEXT HYGIENE_MANAGER
        TEXT OSOLVENT_MANAGER
        TEXT SPECHEMICAL_MANAGER
        TEXT LEAD_MANAGER
        TEXT INOUTDOOR
        TEXT VENTI_SYSTEM
        TEXT SDS_NAME_001-020 FK
        TEXT USE_USAGE_001-020
        TEXT USE_RATE_001-020
    }

    WorkAreaEx {
        BIGINT WORKAREAEX_ID
        TEXT DEPT_NAME PK
        TEXT WORK_NAME PK
        TEXT ITEM_NAME_001-010
        TEXT SDS_NAME_001-010 FK
        TEXT CAS_NAME_001-010 FK
        TEXT CATEGORY_001-010
        TEXT RESERVE_001-010
        TEXT CHECK_DATE_001-010
        TEXT RISKLEVEL_SKIN_001-100
        TEXT RISKLEVEL_FIRE_001-100
        TEXT CONCENT_JUDGE_001-100
    }

    UserPermission {
        BIGINT EMPLPYEE_ID PK
        TEXT DEPT_NAME
        BIGINT ROLE
    }
```
