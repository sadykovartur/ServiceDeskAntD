# ЛР7 — Workflow оператора + комментарии + модалки

## Server
- POST /api/tickets/{id}/assign-to-me
- POST /api/tickets/{id}/status
- POST /api/tickets/{id}/reject (reason required)
- GET/POST /api/tickets/{id}/comments
- Фильтры: /api/tickets?status=New, /api/tickets?assignee=me

## Client
- Operator pages: Queue(New), Assigned to me
- Details actions: Assign, Change status (confirm), Reject (Modal + reason)
- Comments: список + добавление (invalidate)

## Сдать
PR + демонстрация полного сценария оператора.
