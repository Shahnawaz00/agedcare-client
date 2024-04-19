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
import StaffManagement from './pages/admin/StaffManagement';
import ServiceManagement from './pages/admin/ServiceManagement';
import CreateStaff from './pages/admin/CreateStaff';
import CreateService from './pages/admin/CreateService';

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
    {
      path: "/admin/staff-management",
      element: <StaffManagement />,
    },
    {
      path: "/admin/create-staff",
      element: <CreateStaff />,
    },
    {
      path: "/admin/service-management",
      element: <ServiceManagement />,
    },
    {
      path: "/admin/create-service",
      element: <CreateService />,
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