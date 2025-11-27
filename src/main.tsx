import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./pages/App.tsx";
import Catalogo from "./pages/Catalogo.tsx";
import NotFound from "./pages/NotFound.tsx";
import Detalhes from "./pages/Detalhes.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
  },
  {
    path: "catalogo",
    element: <Catalogo />,
    errorElement: <NotFound />,
  },
  {
    path: "detalhes",
    element: <Detalhes />,
    errorElement: <NotFound />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
