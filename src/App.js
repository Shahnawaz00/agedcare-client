import './styles/styles.css';
import * as React from "react";
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import AdminHub from './pages/admin/AdminHub';
import Home from './pages/Home';
import PatientList from './pages/admin/PatientList';
import ServiceList from './pages/admin/ServiceList';
import StaffList from './pages/admin/StaffList';
import MemberManagement from './pages/admin/MemberManagement';
import CreateMember from './pages/admin/CreateMember';

const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/admin",
      element: <AdminHub />,
    },
    {
      path: "/admin/member-management",
      element: <MemberManagement />,
    },
    {
      path: "/admin/create-member",
      element: <CreateMember />,
    },
    {
      path: "/admin/calendar",
      element: <div>Calendar</div>,
    },
    {
      path: "/admin/inventory",
      element: <div>Inventory</div>,
    },
    {
      path: "/admin/patient-list",
      element: <PatientList />,
    },
    {
      path: "/admin/service-list",
      element: <ServiceList />,
    },
    {
      path: "/admin/staff-list",
      element: <StaffList />,
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