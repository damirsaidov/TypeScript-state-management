import React from "react";
import App from "./App";
import ReactDOM from "react-dom/client";
import Async from "./pages/async";
import NotFound from "./pages/notFound";
import Sync from "./pages/sync";
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Sync /> },
      { path: "about", element: <Async /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
