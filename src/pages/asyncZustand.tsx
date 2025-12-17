import { Input, Button, Tag, Checkbox, Space, Modal } from "antd";
import { useEffect, useState } from "react";
import { useTodoStore } from "../features/asyncZustand";
import type { Todo } from "../features/asyncZustand";
import { Link } from "react-router-dom";
export default function AsyncZustand() {
  const { data, getTodos, addTodo, deleteTodo, statusTodo, editTodo } =
    useTodoStore();
  const [inp, setInp] = useState<string>("");
  const [modal, setModal] = useState<boolean>(false);
  const [edit, setEdit] = useState<string>("");
  const [elem, setElem] = useState<Todo>({
    id: 0,
    name: "",
    status: false,
  });

  useEffect(() => {
    getTodos();
  }, []);

  const handleAdd = (): void => {
    addTodo(inp);
  };

  return (
    <div>
      <div style={{ marginBottom: 20 }}>
        <Input
          value={inp}
          onChange={(e) => setInp(e.target.value)}
          placeholder='Add name'
          style={{ width: 200, marginRight: 8 }}
        />
        <Button type='primary' onClick={handleAdd}>
          Add
        </Button>
      </div>

      <div className='carts'>
        {data.map((elem) => (
          <div className='cart' key={elem.id}>
            <h3>{elem.name}</h3>

            <Space>
              <Tag color={elem.status ? "green" : "red"}>
                {elem.status ? "Active" : "Inactive"}
              </Tag>

              <Checkbox
                checked={elem.status}
                onChange={() => statusTodo(elem)}
              />

              <Button danger onClick={() => deleteTodo(elem.id)}>
                Delete
              </Button>
                <Link to={`/about/${elem?.id}`}>Info</Link>

              <Button
                type='dashed'
                onClick={() => {
                  setEdit(elem.name);
                  setElem(elem);
                  setModal(true);
                }}
              >
                Edit
              </Button>
            </Space>
          </div>
        ))}
      </div>

      <Modal
        open={modal}
        title='Edit user'
        onOk={() => {
          editTodo({ ...elem, name: edit });
          setModal(false);
        }}
        onCancel={() => setModal(false)}
      >
        <Input
          value={edit}
          onChange={(e) => setEdit(e.target.value)}
          placeholder='Name'
        />
      </Modal>
    </div>
  );
}
