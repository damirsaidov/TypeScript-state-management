import { useEffect, useState } from "react";
import { Button, Checkbox, Input, Modal, Space, Tag } from "antd";
import "../index.css";
type Todo = {
  id: number;
  name: string;
  description: string;
  isCompleted: boolean;
  images: { id: number; imageName: string }[];
};
function Async() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [name, setName] = useState("");
  const [modal, setModal] = useState(false);
  const [description, setDescription] = useState("");
  const [images, setImages] = useState<File[]>([]);
  const [selectedTodoId, setSelectedTodoId] = useState<number | null>(null);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [editModal, setEditModal] = useState(false);
  const [editId, setEditId] = useState<number | null>(null);
  const [editName, setEditName] = useState("");
  const [editDescription, setEditDescription] = useState("");
  function openEditModal(todo: Todo) {
    setEditId(todo.id);
    setEditName(todo.name);
    setEditDescription(todo.description);
    setEditModal(true);
  }

  async function getData() {
    try {
      let res = await fetch(`https://to-dos-api.softclub.tj/api/to-dos`);
      let data = await res.json();
      setTodos(data.data || data);
    } catch (error) {
      console.error(error);
    }
  }
  async function addImage() {
    try {
      const formData = new FormData();
      formData.append("images", imageFile);
      await fetch(
        `https://to-dos-api.softclub.tj/api/to-dos/${selectedTodoId}/images`,
        {
          method: "POST",
          body: formData,
        }
      );
      setModal(false);
      getData();
    } catch (error) {
      console.error(error);
    }
  }

  async function checkData(e: Todo) {
    try {
      await fetch(`https://to-dos-api.softclub.tj/completed?id=${e.id}`, {
        method: "PUT",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({ ...e, isCompleted: !e.isCompleted }),
      });
      getData();
    } catch (error) {
      console.error(error);
    }
  }
  async function deleteData(id: number) {
    try {
      await fetch(`https://to-dos-api.softclub.tj/api/to-dos?id=${id}`, {
        method: "DELETE",
      });
      getData();
    } catch (error) {
      console.error(error);
    }
  }
  async function deleteImage(id: number) {
    try {
      await fetch(`https://to-dos-api.softclub.tj/api/to-dos/images/${id}`, {
        method: "DELETE",
      });
      getData();
    } catch (error) {
      console.error(error);
    }
  }
  async function editData() {
    if (!editId) return;

    try {
      await fetch("https://to-dos-api.softclub.tj/api/to-dos", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: editId,
          name: editName,
          description: editDescription,
        }),
      });

      setEditModal(false);
      setEditId(null);
      getData();
    } catch (error) {
      console.error(error);
    }
  }

  async function addData() {
    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("description", description);
      images.forEach((file) => {
        formData.append("images", file);
      });
      await fetch("https://to-dos-api.softclub.tj/api/to-dos", {
        method: "POST",
        body: formData,
      });
      getData();
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <div>
        <Space className='lsls'>
          <Input
            placeholder='Name'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Input
            placeholder='Description'
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <input
            type='file'
            multiple
            onChange={(e) =>
              setImages(e.target.files ? Array.from(e.target.files) : [])
            }
          />
          <Button type='primary' onClick={addData}>
            Add
          </Button>
        </Space>

        <div className='carts'>
          {todos?.map((e) => (
            <div className='cart' key={e.id}>
              <h1>{e.name}</h1>
              <h1>{e.description}</h1>
              <Space orientation='vertical'>
                <Space>
                  <Button onClick={() => deleteData(e.id)} danger>
                    Delete user
                  </Button>
                  <Tag color={e.isCompleted ? "green" : "red"}>
                    {e.isCompleted ? "active" : "inactive"}
                  </Tag>
                  <Button
                    type='dashed'
                    onClick={() => {
                      setSelectedTodoId(e.id);
                      setModal(true);
                    }}
                  >
                    Add image
                  </Button>
                  <Button type='default' onClick={() => openEditModal(e)}>
                    Edit
                  </Button>

                  <Checkbox
                    onChange={() => checkData(e)}
                    checked={e.isCompleted}
                  />
                </Space>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifySelf: "center",
                    gap: "25px",
                  }}
                >
                  {e.images?.map((elem) => (
                    <Space key={elem.id} orientation='vertical'>
                      <img
                        src={`https://to-dos-api.softclub.tj/images/${elem.imageName}`}
                        style={{ width: "300px", objectFit: "cover" }}
                      />
                      <Button onClick={() => deleteImage(elem.id)} danger>
                        Delete image
                      </Button>
                    </Space>
                  ))}
                </div>
              </Space>
            </div>
          ))}
          <Modal
            open={modal}
            title='Add image'
            onCancel={() => setModal(false)}
            onOk={addImage}
          >
            <input
              type='file'
              onChange={(e) =>
                setImageFile(e.target.files ? e.target.files[0] : null)
              }
            />
          </Modal>
          <Modal
            open={editModal}
            title='Edit todo'
            onCancel={() => setEditModal(false)}
            onOk={editData}
          >
            <Space orientation='vertical' style={{ width: "100%" }}>
              <Input
                placeholder='Name'
                value={editName}
                onChange={(e) => setEditName(e.target.value)}
              />
              <Input
                placeholder='Description'
                value={editDescription}
                onChange={(e) => setEditDescription(e.target.value)}
              />
            </Space>
          </Modal>
        </div>
      </div>
    </div>
  );
}
export default Async;
