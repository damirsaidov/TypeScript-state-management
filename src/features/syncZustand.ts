import { create } from "zustand"

interface Todo {
  id: number,
  name: string,
  status: boolean,
}

interface TodoState {
  data: Todo[]
  addTodo: (name: string) => void
  deleteTodo: (id: number) => void
  toggleStatus: (id: number) => void
  editTodo: (todo: Todo) => void
}

export const useTodoStore = create<TodoState>((set) => ({
  data: [],

  addTodo: (name) =>
    set((state) => ({
      data: [
        ...state.data,
        { id: Date.now(), name, status: false },
      ],
    })),

  deleteTodo: (id) =>
    set((state) => ({
      data: state.data.filter((e) => e.id != id),
    })),

  toggleStatus: (id) =>
    set((state) => ({
      data: state.data.map((e) =>
        e.id == id ? { ...e, status: !e.status } : e
      ),
    })),
  editTodo: (todo: Todo): void =>
    set((state) => ({
      data: state.data.map((e) =>
        e.id == todo.id ? { ...todo, name: todo.name } : e
      ),
    })),
}))