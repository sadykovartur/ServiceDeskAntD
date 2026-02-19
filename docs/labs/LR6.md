# ЛР6 — Identity + JWT + роли + AuthContext

## Server
- Identity (User+Role) + EF Core store + PostgreSQL
- Seed ролей: Student, Operator, Admin
- JWT issuer/audience/key/expiry из config
- Endpoints: POST /api/auth/register, POST /api/auth/login, GET /api/auth/me
- Защита: Authorize + policies/roles

## Client
- AuthContext (user/isAuthenticated/login/logout/init)
- Protected routes
- Authorization: Bearer
- Меню по ролям

## Сдать
PR, показать 401/403 и разные меню по ролям.
