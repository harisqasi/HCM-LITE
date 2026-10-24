# HCM Lite: Frontend

Plain HTML, CSS and JavaScript. No build step, no backend. All data is dummy data.

## Run
Double-click `index.html`, or serve the folder: `npx serve .` (or `python3 -m http.server`).

## Files
- `index.html`: page shell
- `css/style.css`: design tokens (light and dark), cards, charts, animations
- `js/data.js`: dummy employees, leaves, announcements and activity (edit this to change the demo data)
- `js/app.js`: views (dashboard, employees, attendance, leave, payroll, AI chat, announcements, audit), role switcher, actions

## Roles
Use the Admin / HR / Employee switch at the top. Each role has its own menu and dashboard.

## Next
Replace the dummy arrays in `js/data.js` with `fetch()` calls to your backend API.
