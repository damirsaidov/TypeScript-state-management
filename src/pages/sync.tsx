import { useState } from "react";
import { Button, Checkbox, Input, Modal, Space, Tag } from "antd";
type Todo = {
  id: number;
  title: string;
  status: boolean;
};
type User = {
  id: number;
  title: string;
  status: boolean;
};
function Sync() {
  const [todos, setTodos] = useState<Todo[]>([
    { id: 1, title: "Ali", status: true },
    { id: 2, title: "Vali", status: false },
  ]);
  const [name, setName] = useState("");
  const [modal, setModal] = useState(false);
  const [elem, setElem] = useState<null | User>(null);
  const [edit, setEdit] = useState("");
  return (
    <div>
      <div>
        <Space className="lsls">
          <Input
            placeholder='Name'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Button
            type='primary'
            onClick={() =>
              setTodos((prev) => [
                ...prev,
                { id: Date.now(), status: false, title: name },
              ])
            }
          >
            Add
          </Button>
        </Space>
        <div>
          {todos.map((e) => {
            return (
              <div className="center" key={e.id}>
                <h1>{e.title}</h1>
                <Space>
                  <Tag color={e.status ? "green" : "red"}>
                    {e.status ? "active" : "inactive"}
                  </Tag>
                  <Button
                    danger
                    onClick={() =>
                      setTodos((prev) => prev.filter((elem) => elem.id != e.id))
                    }
                  >
                    Delete
                  </Button>
                  <Button
                    type='dashed'
                    onClick={() => [
                      setEdit(e.title),
                      setElem(e),
                      setModal(true),
                    ]}
                  >
                    Edit
                  </Button>
                  <Checkbox
                    style={{
                      width: "70px",
                      textAlign: "center",
                      padding: "5px",
                    }}
                    checked={e.status}
                    onClick={() =>
                      setTodos((prev) =>
                        prev.map((elem) =>
                          elem.id == e.id ? { ...e, status: !e.status } : elem
                        )
                      )
                    }
                  />
                </Space>
              </div>
            );
          })}
          <Modal
            open={modal}
            title='Edit user'
            onCancel={() => setModal(false)}
            onOk={() => [
              setTodos((prev) =>
                prev.map((e) =>
                  elem?.id == e.id ? { ...elem, title: edit } : e
                )
              ),
              setModal(false),
            ]}
          >
            <Input
              placeholder='Name'
              value={edit}
              onChange={(e) => setEdit(e.target.value)}
            />
          </Modal>
        </div>
      </div>
    </div>
  );
}
export default Sync;
