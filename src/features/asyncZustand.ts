import { create } from "zustand"
const API = "http://localhost:3000/data"
export interface Todo {
    id: number
    name: string
    status: boolean
}
interface TodoState {
    data: Todo[]
    getTodos: () => Promise<void>
    addTodo: (name: string) => Promise<void>
    deleteTodo: (id: number) => Promise<void>
    statusTodo: (todo: Todo) => Promise<void>
    editTodo: (todo: Todo) => Promise<void>
}
export const useTodoStore = create<TodoState>((set, get) => ({
    data: [],
    getTodos: async () => {
        const res = await fetch(API)
        const data = await res.json()
        set({ data })
    },
    addTodo: async (name) => {
        await fetch(API, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name, status: false }),
        })
        get().getTodos()
    },
    deleteTodo: async (id) => {
        await fetch(`${API}/${id}`, { method: "DELETE" })
        get().getTodos()
    },
    statusTodo: async (todo) => {
        await fetch(`${API}/${todo.id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ ...todo, status: !todo.status }),
        })
        get().getTodos()
    },
    editTodo: async (todo) => {
        await fetch(`${API}/${todo.id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(todo),
        })
        get().getTodos()
    },
}))