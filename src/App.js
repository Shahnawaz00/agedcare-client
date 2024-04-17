import './styles/styles.css';
import * as React from "react";
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import AdminHub from './pages/admin/AdminHub';

const router = createBrowserRouter([
    {
      path: "/",
      element: <div>Hello world!</div>,
    },
    {
      path: "/admin",
      element: <AdminHub />,
    },
  ]);

function App() {
  return (
    <div className="App">
        <RouterProvider router={router} />
    </div>
  );
}

export default App;