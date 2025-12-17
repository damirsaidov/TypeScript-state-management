import { atom } from "jotai"
export interface Todo {
  id: number
  name: string
  status: boolean
}
export const todosAtom = atom<Todo[]>([])
export const addTodoAtom = atom(
  null,
  (get, set, name: string) => {
    set(todosAtom, [
      ...get(todosAtom),
      { id: Date.now(), name, status: false },
    ])
  }
)
export const deleteTodoAtom = atom(
  null,
  (get, set, id: number) => {
    set(
      todosAtom,
      get(todosAtom).filter((e) => e.id != id)
    )
  }
)
export const toggleStatusAtom = atom(
  null,
  (get, set, id: number) => {
    set(
      todosAtom,
      get(todosAtom).map((e) =>
        e.id == id ? { ...e, status: !e.status } : e
      )
    )
  }
)

export const editTodoAtom = atom(
  null,
  (get, set, elem: Todo) => {
    set(
      todosAtom,
      get(todosAtom).map((e) =>
        e.id == elem.id ? elem : e
      )
    )
  }
)
