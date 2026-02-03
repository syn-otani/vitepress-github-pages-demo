# Thiết kế DB

## Thông tin cơ bản

| Mục | Giá trị |
|-----|---------|
| Cơ sở dữ liệu | PostgreSQL 18.1 |
| Tên Schema | CS_SCHEMA |
| Tên Database | Chemical_Substance |

## Danh sách bảng

| No | Tên bảng (Tiếng Nhật) | Tên bảng (Vật lý) | Mô tả |
|----|----------------------|-------------------|-------|
| 1 | [SDS情報](./sds-data) | SDS_data | Quản lý thông tin SDS |
| 2 | [CAS情報](./cas-data) | CAS_data | Quản lý thông tin CAS |
| 3 | [作業場所](./workarea) | WorkArea | Quản lý dữ liệu nơi làm việc |
| 4 | [作業場拡張データ](./workarea-ex) | WorkAreaEx | Quản lý dữ liệu mở rộng nơi làm việc |
| 5 | [ユーザ権限](./user-permission) | UserPermission | Quản lý quyền người dùng |

## Sơ đồ ER

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
