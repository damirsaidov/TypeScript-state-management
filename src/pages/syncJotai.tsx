import { useAtom } from "jotai";
import { useState } from "react";
import {
  todosAtom,
  addTodoAtom,
  deleteTodoAtom,
  toggleStatusAtom,
  editTodoAtom,
} from "../features/atomTodo";
import type { Todo } from "../features/atomTodo";
import { Button, Checkbox, Input, Space } from "antd";
export default function SyncJotai() {
  const [todos] = useAtom(todosAtom);
  const [, addTodo] = useAtom(addTodoAtom);
  const [, deleteTodo] = useAtom(deleteTodoAtom);
  const [, toggleStatus] = useAtom(toggleStatusAtom);
  const [, editTodo] = useAtom(editTodoAtom);
  const [inp, setInp] = useState<string>("");
  const [edit, setEdit] = useState<Todo>({
    id: 0,
    name: "",
    status: false,
  });
  const handleAdd = (): void => {
    addTodo(inp);
    setInp("");
  };
  return (
    <div>
      <Space style={{ marginBottom: 20 }}>
        <Input
          value={inp}
          onChange={(e) => setInp(e.target.value)}
          placeholder='Add todo'
        />
        <Button type='primary' onClick={handleAdd}>
          Add
        </Button>
      </Space>
      {todos.map((elem) => (
        <div key={elem.id}>
          <h1>{elem.name}</h1>
          <Space>
            <Checkbox
              checked={elem.status}
              onChange={() => toggleStatus(elem.id)}
            />

            <Button danger onClick={() => deleteTodo(elem.id)}>
              Delete
            </Button>

            <Button type='dashed' onClick={() => setEdit(elem)}>
              Edit
            </Button>
          </Space>
        </div>
      ))}

      <Space>
        <Input
          value={edit.name}
          onChange={(e) =>
            edit.name ? setEdit({ ...edit, name: e.target.value }) : ""
          }
        />
        <Button type='primary' onClick={() => editTodo(edit)}>
          Save
        </Button>
      </Space>
    </div>
  );
}
