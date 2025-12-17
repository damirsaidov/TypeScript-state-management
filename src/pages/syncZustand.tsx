import { Input, Button, Tag, Checkbox, Space, Modal } from "antd";
import { useState } from "react";
import { useTodoStore } from "../features/syncZustand";
interface User {
  id: number;
  name: string;
  status: boolean;
}
export default function TodoZustand() {
  const { data, addTodo, deleteTodo, toggleStatus, editTodo } = useTodoStore();
  const [inp, setInp] = useState<string>("");
  const [modal, setModal] = useState<boolean>(false);
  const [edit, setEdit] = useState<string>("");
  const [elem, setElem] = useState<null | User>(null);
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
                onChange={() => toggleStatus(elem.id)}
              />

              <Button danger onClick={() => deleteTodo(elem.id)}>
                Delete
              </Button>
              <Button
                type='dashed'
                onClick={() => [
                  setEdit(elem?.name),
                  setElem(elem),
                  setModal(true),
                ]}
              >
                Edit
              </Button>
            </Space>
          </div>
        ))}
        <Modal
          open={modal}
          onOk={() => [
            editTodo({ status: elem?.status, id: elem?.id, name: edit }),
            setModal(false),
          ]}
          title='Edit user'
          onCancel={() => setModal(false)}
        >
          <Input
            placeholder='Name'
            value={edit}
            onChange={(e) => setEdit(e.target.value)}
          />
        </Modal>
      </div>
    </div>
  );
}
