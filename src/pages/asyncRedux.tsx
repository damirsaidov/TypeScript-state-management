import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Input, Modal, Tag, Checkbox, Space } from "antd";
import type { AppDispatch, RootState } from "../../store";
import {
  getData,
  deleteData,
  statusData,
  editData,
  addData,
} from "../features/asyncSlice";
import { Link } from "react-router-dom";
interface Todo {
  id: number;
  name: string;
  status: boolean;
}
export default function TodoAsync() {
  const dispatch = useDispatch<AppDispatch>();
  const data = useSelector((state: RootState) => state.async.data);
  const [inp, setInp] = useState<string>("");
  const [editItem, setEditItem] = useState<Todo>({
    id: 0,
    name: "",
    status: false,
  });
  const [open, setOpen] = useState<boolean>(false);
  useEffect(() => {
    dispatch(getData());
  }, [dispatch]);
  const handleAdd = (): void => {
    dispatch(addData(inp));
    setInp("");
  };
  const handleEditSave = (): void => {
    dispatch(editData(editItem));
    setOpen(false);
  };

  const openEdit = (e: Todo): void => {
    setEditItem(e);
    setOpen(true);
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
        {data?.map((e: Todo) => (
          <div className='cart' key={e.id}>
            <h1>{e.name}</h1>
            <Space>
              <Tag color={e.status ? "green" : "red"}>
                {e.status ? "Active" : "Inactive"}
              </Tag>
              <div style={{ marginTop: 8 }}>
                <Checkbox
                  checked={e.status}
                  onChange={() => dispatch(statusData(e))}
                />
              </div>
              <div style={{ marginTop: 10 }}>
                <Button
                  type='primary'
                  onClick={() => openEdit(e)}
                  style={{ marginRight: 8 }}
                >
                  Edit
                </Button>
                <Button danger onClick={() => dispatch(deleteData(e?.id))}>
                  Delete
                </Button>
                <Link to={`/about/${e?.id}`}>Info</Link>
              </div>
            </Space>
          </div>
        ))}
      </div>
      <Modal
        open={open}
        title='Edit User'
        onOk={handleEditSave}
        onCancel={() => setOpen(false)}
        okText='Save'
      >
        <Input
          value={editItem.name}
          onChange={(e) => setEditItem({ ...editItem, name: e.target.value })}
        />
      </Modal>
    </div>
  );
}
