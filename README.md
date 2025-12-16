## Todo Application (Sync &amp; Async)

## About

This repo has a Todo app that shows how to handle tasks in two ways: immediately and over time.

Here's the breakdown:

*   **Sync Todo**: Quick, local updates.
*   **Async Todo**: Uses a backend with a **Swagger API**.
*   **Dark Mode**: Uses **Context** for app-wide theme change.
*   **Media**: The app handles images and other files.

The project splits up the UI, data fetching, and global settings neatly.

---

## Features

*   Sync todo management (local)
*   Async todo management (backend API)
*   Swagger (OpenAPI) for API docs
*   Dark mode (Context API)
*   Media support
*   Code is organized

---

## Tech

**Frontend**

*   JavaScript / TypeScript
*   React
*   Context API (themes)
*   Fetch / Axios (async calls)

**Backend**

*   REST API
*   Swagger (OpenAPI) API docs

---

## How it Works

### 1. Sync Todo

*   Todos stay on your side.
*   Updates are right away.
*   No backend needed.
*   Good for understanding local state in React.

### 2. Async Todo

*   Todos are saved on a backend.
*   Operations happen in the background.
*   API is documented with Swagger.
*   Good for simulating real-world data.

---

## Dark Mode

Dark mode is set up with a Context provider:

*   App-wide theme setting
*   Easy to switch themes
*   Styles are consistent

---

## Media

The app can handle media:

*   Images
*   Other static files
*   Media in the UI

Put media files in the right folder (like `public` or `assets`) and link to them.

---

## Swagger API

The backend has Swagger docs for all the async todo stuff.

Typical features:

*   See all available endpoints
*   Test requests in the browser
*   See request and response formats

Start the backend to see the Swagger UI.

---

## Repo

GitHub: [https://github.com/damirsaidov/typeScript-Todo](https://github.com/damirsaidov/typeScript-Todo)

---

## Get Started

### What you need

*   Node.js
*   npm or yarn

### Setup

```bash
# clone it
git clone https://github.com/damirsaidov/typeScript-Todo

# install
npm install
```

### Run

```bash

# to start
npm run server
```

---

## Code Structure

```text
src/
</repository-url>├── components/
│   └── switch.tsx
├── pages/
│   ├── async.tsx
│   ├── asyncId.tsx
│   ├── sync.tsx
│   ├── syncId.tsx
│   ├── layout.tsx
│   └── notFound.tsx
├── App.tsx
├── main.tsx
├── App.css
├── index.css
├── vite-env.d.ts
```

```text
src/
├── components/
├── context/
│   └── ThemeContext
├── pages/
├── services/
│   └── api (async todo)
├── assets/
├── App.js
└── index.js
```

---

## Next Steps

*   User login for async todos
*   Media uploads
*   Better error messages
*   Testing

---

## License

MIT License.
