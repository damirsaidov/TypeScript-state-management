import { Table, Button, Modal, Input, Checkbox, Tag, Space } from "antd";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser, editUser, checkout } from "../features/store";
import type { RootState } from "../../store";
interface EditForm {
  id: number | null;
  name: string;
  status: boolean;
}
export default function SyncRedux() {
  const dispatch = useDispatch();
  const data = useSelector((state: RootState) => state.todo.data);

  const [open, setOpen] = useState(false);
  const [form, setForm] = useState<EditForm>({
    id: null,
    name: "",
    status: false,
  });

  const openEditModal = (record: any) => {
    setForm({
      id: record.id,
      name: record.name,
      status: record.status,
    });
    setOpen(true);
  };
  const handleOk = () => {
    dispatch(editUser(form));
    setOpen(false);
  };
  const columns = [
    {
      title: "ID",
      dataIndex: "id",
    },
    {
      title: "Name",
      dataIndex: "name",
    },
    {
      title: "Status",
      dataIndex: "status",
      render: (status: boolean, record: any) => (
        <Space>
          <Tag color={status ? "green" : "red"}>
            {status ? "Active" : "Inactive"}
          </Tag>
          <Checkbox
            checked={status}
            onChange={() => dispatch(checkout(record.id))}
          />
        </Space>
      ),
    },
    {
      title: "Actions",
      render: (_: any, record: any) => (
        <Space>
          <Button type='primary' onClick={() => openEditModal(record)}>
            Edit
          </Button>
          <Button danger onClick={() => dispatch(deleteUser(record.id))}>
            Delete
          </Button>
        </Space>
      ),
    },
  ];

  return (
    <>
      <Table
        rowKey='id'
        className='tabl'
        columns={columns}
        dataSource={data}
        pagination={false}
      />

      <Modal
        title='Edit User'
        open={open}
        onOk={handleOk}
        onCancel={() => setOpen(false)}
        okText='Save'
      >
        <Input
          placeholder='Name'
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          style={{ marginBottom: 16 }}
        />

        <Checkbox
          checked={form.status}
          onChange={(e) => setForm({ ...form, status: e.target.checked })}
        >
          Active
        </Checkbox>
      </Modal>
    </>
  );
}
