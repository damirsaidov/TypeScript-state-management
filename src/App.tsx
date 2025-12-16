import { Space } from "antd";
import { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import "./index.css";
import Switch from "./components/switch";

const App = () => {
  const [darkmode, setDarkMode] = useState<boolean>(false);
  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkmode);
  }, [darkmode]);
  return (
    <div className={darkmode ? "dark" : "white"}>
      <div style={{ padding: 16, maxWidth: "1400px", margin: "auto" }}>
        <nav style={{ marginBottom: 12 }}>
          <div
            className='navi'
            style={{
              display: "flex",
              justifyContent: "space-between",
              maxWidth: "1200px",
              margin: "auto",
            }}
          >
            <Space>
              <Link to='/'>Sync</Link>
              <p className='hr'>|</p>
              <Link to='/about'>Async</Link>
            </Space>
            <Switch checked={darkmode} onChange={setDarkMode} />
          </div>
        </nav>
        <Outlet />
      </div>
    </div>
  );
};
export default App;
