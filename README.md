# State Management Playground – Sync &amp; Async Todos

This is a front-end state management example that shows how popular React state solutions work in real situations. This repository is a hands-on way to compare state options. It combines normal and async Todo actions, media handling, and general interface settings like dark mode, all in a clean and easy-to-expand codebase.

---

## 🚀 What This Project Does

This repository isn't a simple tutorial project. It's a practical example to help developers check, compare, and think about state management methods in real conditions.

### Core

- ✅ **Five State Management Solutions**
- 🔁 **Sync &amp; Async Todo Implementations**
- 🆔 **Todo Operations by ID**
- 🌙 **Global Dark Mode via React Context**
- 🖼️ **Media Support**
- ⚡ **Fake REST API using `db.json`**
- 🧩 **Feature-based setup**
- ⚙️ **Made with Vite + TypeScript**

---

## 🧠 State Management Solutions Used

Each choice does the same things in code, so you can easily compare them without differences.

### 1. Redux Toolkit

- Clear, scalable global state
- Async actions using `createAsyncThunk`
- Centralized store design

### 2. Zustand

- Simple and fast
- Uses hooks to get to the store
- Normal and async actions without the need for extra code

### 3. Jotai

- State management that focuses on individual pieces
- Very reactive
- Clear separation

### 4. MobX

- Uses observable to react
- Little direct state setup needed
- Automatically keeps track of what depends on what

### 5. React Context

- Part of React
- Used for **Dark Mode &amp; Media State**
- Shows global UI state patterns

---

## 📋 Todo Features (Sync &amp; Async)

Each state solution can do the following with Todos:

### Synchronous Todos

- Make, change, delete
- Mark as complete or incomplete
- Find a todo **by ID**

### Asynchronous Todos

- Full CRUD through REST API
- Data saved in `db.json`
- Pretend delays in the network
- Handles errors and loading states

---

## Quick startup:

```
git clone https://github.com/damirsaidov/Typescript-state-managemant.git
```

```
cd Typescript-state-managemant
```

```
npm run dev
```

---

## 🌐 Mock API

All async actions use a fake REST API.

- **Data Source:** `db.json`
- **Tool:** Works with JSON Server
- **Access:** `/todos`
- **Access by ID:** `/todos/:id`

This allows you to test async actions without needing other things.

---

## 🎨 UI &amp; Global State

### Dark Mode

- Done with **React Context**
- Switch the theme on and off
- Stays separate from the main code

### Media Handling

- Centralized media state
- Shows how to handle global UI issues that aren't CRUD

---

## 🧱 Project Structure

```text
src/
├── features/          # State code for each item
│   ├── redux/
│   ├── zustand/
│   ├── jotai/
│   ├── mobx/
│   └── context/
├── pages/             # UI views for each choice
├── components/        # Shared UI parts
├── App.tsx
├── main.tsx
db.json                # Fake API data
The setup is based on features, which helps it grow and makes it clear.

🛠 Tech Stack

React + TypeScript

Vite

Redux Toolkit

Zustand

Jotai

MobX

React Context API

JSON Server (fake API)

🎯 Who This Repo Is For

Front-end engineers checking out state tools

Developers swapping between state libraries

Teams comparing design choices

Students who want real examples

📈 What You Get

Instead of talking about state management in general, this repository lets you:

Compare what it's like to code with

See how much extra code is needed versus how flexible it is

Learn about async methods across tools

Decide on designs based on your needs

📄 License

MIT — free to use, change, and add to.

Made to be straightforward. Created for comparison. Meant for real use.
```
