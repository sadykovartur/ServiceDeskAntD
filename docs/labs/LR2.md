# ЛР2 — Каркас клиента (Ant Design + Router), без API + ESLint/Prettier + launch.json

## Цель
Поднять фронт, повторить структуру макета, настроить роутинг и качество кода.

## Сделать
- Vite + React TS проект в `client/`
- AntD Layout: Header + Sider + Content
- Меню в Sider: My Tickets, Create Ticket (+ заглушки Operator/Admin)
- Роуты: /login, /register, /tickets, /tickets/new, /tickets/:id
- Страницы-заглушки по Figma
- UI состояния (loading/empty/error) через константу/переключатель

## ESLint
- `npm run lint` проходит
- react-hooks rules включены

## Prettier
- `npm run format` форматирует проект
- ESLint не конфликтует с Prettier

## VS Code Debug
- `.vscode/launch.json` позволяет дебажить клиент (breakpoints работают)

## Сдать
PR + скриншоты 3–4 экранов + команды lint/format в описании PR.
