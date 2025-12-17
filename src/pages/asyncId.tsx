import { Button, Space, Tag } from "antd";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
type todo = {
  id: number;
  name: string;
  status: boolean;
};
const AsyncId = () => {
  const { id } = useParams();
  const [data, setData] = useState<todo | null>(null);
  const navigate = useNavigate();
  async function getData() {
    try {
      let res = await fetch(`http://localhost:3000/data/${id}`);
      let data = await res.json();
      setData(data);
    } catch (error) {
      console.error(error);
    }
  }
  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <h1>{data?.name}</h1>
      <Space>
        <Tag color={data?.status ? "green" : "red"}>
          {data?.status ? "active" : "inactive"}
        </Tag>
        <Button type='primary' onClick={() => navigate(-1)}>
          Go back
        </Button>
      </Space>
    </div>
  );
};

export default AsyncId;
