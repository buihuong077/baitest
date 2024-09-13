import Header from "./components/header";
import Home from "./components/home/home"; // Import component Home
import "bootstrap/dist/css/bootstrap.min.css";
import Menu from "./components/menu";
import * as React from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import Projects from "./components/projects/project";

function App() {
  const router = createBrowserRouter([
    {
      path: "/", // Đường dẫn gốc
      element: (
        <div>
          <Header />
          <Home />
          <Menu />
        </div>
      ),
    },
    {
      path: "/projects", // Đường dẫn gốc
      element: (
        <div>
          <Header />
          <Projects />
          <Menu />
        </div>
      ),
    },
  ]);

  return (
    <div className="flex justify-center items-start mx-auto max-w-[500px]">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
