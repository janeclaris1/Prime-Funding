# MongoDB schema

Form submissions are stored in a single collection.

## `enquiries`

| Field | Type | Notes |
|-------|------|-------|
| `name` | string | Required |
| `email` | string | Required |
| `phone` | string | Optional |
| `subject` | string | Required (e.g. "Loan Application", "Contact") |
| `message` | string | Required |
| `details` | string | Optional structured extras (loan amount, plan, etc.) |
| `status` | string | `"new"` by default |
| `createdAt` | date | Set on insert |

### Suggested Atlas index

```js
db.enquiries.createIndex({ createdAt: -1 })
db.enquiries.createIndex({ email: 1 })
```

Collections are created automatically when the first document is inserted.
