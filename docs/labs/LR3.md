# ЛР3 — Backend основа: EF Core + PostgreSQL + миграции + Swagger

## Цель
Поднять API и БД для тикетов/категорий.

## Endpoints MVP
- GET /api/categories
- GET /api/tickets
- POST /api/tickets
- GET /api/tickets/{id}
- GET /health

## Требования
- Слои: Domain/Application/Infrastructure/Api
- EF Core + Npgsql, initial migration
- Авто-миграции только в Development
- ProblemDetails + Swagger

## Сдать
PR, миграции в репо, Swagger работает.
