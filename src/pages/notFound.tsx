import { Button } from "antd";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1 style={{ fontSize: "98px", textAlign: "center" }}>404</h1>
      <h1 style={{ fontSize: "98px", textAlign: "center" }}>NOT FOUND</h1>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Button type='primary' onClick={() => navigate("/")}>
          Go back
        </Button>
      </div>
    </div>
  );
};
export default NotFound;