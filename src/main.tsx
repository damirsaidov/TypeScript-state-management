import React from "react";
import App from "./App";
import ReactDOM from "react-dom/client";
import NotFound from "./pages/notFound";
import "./index.css";
import "antd/dist/reset.css";
import { store } from "../store";
import { Provider } from "react-redux";
import SyncRedux from "./pages/syncRedux";
import AsyncRedux from "./pages/asyncRedux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AsyncId from "./pages/asyncId";
import SyncZustand from "./pages/syncZustand";
import AsyncZustand from "./pages/asyncZustand";
import SyncJotai from "./pages/syncJotai";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <SyncRedux /> },
      { path: "sync/Zustand", element: <SyncZustand /> },
      { path: "async/Zustand", element: <AsyncZustand /> },
      { path: "about", element: <AsyncRedux /> },
      { path: "about/:id", element: <AsyncId /> },
      { path: "sync/Jotai", element: <SyncJotai /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
