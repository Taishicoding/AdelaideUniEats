# Database schema (ERD)
**Project:** Adelaide Uni Eats <br>
**Team:** Taishi Morgan, Sam Lotus <br>
**Version:** 1.0  <br>
**Date:**  17/01/2026

---
## 1. Entity Relationship Diagram
The Diagram below details the relational structure within the PostgreSQL database.
```mermaid
erDiagram
    USERS ||--o{ JOBS : "posts (as requester)"
    USERS ||--o{ JOBS : "accepts (as driver)"
    JOBS ||--|| TRANSACTIONS : "generates"
    JOBS ||--o{ MESSAGES : "contains"

USERS{
    uuid id PK "Unique User ID"
    string email UK "@adelaide.edu.au"
    string password_hash "Bcrypt hash"
    string full_name
    string phone_number "For coordination"
    boolean is_verified "Email Verification Status"
    int completed_jobs_count "Jobs completed as driver"
    timestamp created_at
    timestamp updated_at
}
JOBS{
    uuid id PK
    uuid requester_id FK "Link to USERS"
    uuid driver_id FK "Link to USERS (nullable)"
    string status "OPEN, ACCEPTED, PURCHASED, IN_TRANSIT, DELIVERED, CANCELLED, COMPLETED"
    string pickup_location "e.g. MACDONALDS RUNDLE MALL"
    string dropoff_location "e.g. Hub Study Room Lv.3 Room 202"
    text description "What to buy/deliver"
    text special_instructions "Nullable"
    float price_estimate "Max price set by requester"
    float actual_price "What driver actually paid"
    float delivery_fee "Drivers delivery compensation"
    float max_delivery_distance_km "Maximum delivery radius"
    timestamp created_at
    timestamp accepted_at
    timestamp purchased_at
    timestamp delivered_at
    timestamp cancelled_at
    timestamp completed_at
    timestamp updated_at
}
TRANSACTIONS{
    uuid id PK
    uuid job_id FK
    string stripe_payment "Stripe Reference"
    float amount_total "Must be > 0"
    string status "HELD, RELEASED, REFUNDED"
    string transaction_type "PAYMENT, REFUND, PAYOUT"
    timestamp created_at
    timestamp updated_at
}
MESSAGES{
    uuid id PK
    uuid job_id FK
    uuid sender_id FK "Link to USERS"
    text content
    boolean is_read "Default false"
    timestamp sent_at
}
