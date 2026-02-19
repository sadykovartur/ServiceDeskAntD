# API контракт (черновик)

Ниже — минимальные DTO/модели, чтобы команда и фронт не расходились в ожиданиях.

## TicketStatus (пример)
- New
- Assigned
- InProgress
- Resolved
- Rejected

## Ticket (response)
```json
{
  "id": 123,
  "title": "Не работает вход",
  "categoryId": 2,
  "categoryName": "Auth",
  "priority": "High",
  "status": "New",
  "createdAt": "2026-02-19T10:00:00Z",
  "author": { "id": "userId", "email": "s@uni.edu" },
  "assignee": { "id": "userId", "email": "op@uni.edu" }
}
```

## CreateTicketRequest
```json
{
  "title": "string",
  "categoryId": 1,
  "priority": "Low|Medium|High",
  "description": "string"
}
```

## Category (response)
```json
{ "id": 1, "name": "UI", "isEnabled": true }
```

## ProblemDetails (ошибка)
```json
{
  "type": "https://example.com/validation-error",
  "title": "Validation error",
  "status": 400,
  "detail": "One or more validation errors occurred.",
  "instance": "/api/tickets",
  "errors": { "title": ["Required"] }
}
```
