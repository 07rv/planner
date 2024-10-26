import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import Trip from "./trip";
import NotFound from "./NotFound";
import Layout from "./components/layout/Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Layout>
        <App />
      </Layout>
    ),
    errorElement: <NotFound />,
  },
  {
    path: "/trip",
    element: (
      <Layout>
        <Trip />
      </Layout>
    ),
    errorElement: <NotFound />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
