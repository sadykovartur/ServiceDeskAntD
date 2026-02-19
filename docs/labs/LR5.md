# ЛР5 — Create Ticket end-to-end (AntD Form + валидация)

## Server
- DTO CreateTicketRequest + validation
- POST /api/tickets сохраняет тикет
- Ошибки: ProblemDetails (400)

## Client
- AntD Form: Title/Category/Priority/Description + rules
- Категории грузятся из GET /api/categories
- После create: redirect на /tickets/:id или message.success + invalidate

## Сдать
PR, демо: созданный тикет появляется в списке.
