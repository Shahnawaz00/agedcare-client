import './styles/styles.css';
import * as React from "react";
import {
    createBrowserRouter,
    RouterProvider,
    Routes,
    Route,
    BrowserRouter,
  } from "react-router-dom";

// hooks
import { ProtectedRoute } from "./components/ProtectedRoute";
import { AdminProtectedRoute } from './components/AdminProtectedRoute';
import { StaffProtectedRoute } from './components/StaffProtectedRoute';
import { AuthProvider } from "./hooks/useAuth";

// pages 
import AdminHub from './pages/admin/AdminHub';
import Home from './pages/Home';
import PatientList from './pages/admin/PatientList';
import ServiceList from './pages/admin/ServiceList';
import StaffList from './pages/admin/StaffList';
import MemberManagement from './pages/admin/MemberManagement';
import CreateMember from './pages/admin/CreateMember';

import AdminLogin from './pages/login/AdminLogin';
import StaffLogin from './pages/login/StaffLogin';
import StaffManagement from './pages/admin/StaffManagement';
import ServiceManagement from './pages/admin/ServiceManagement';
import CreateStaff from './pages/admin/CreateStaff';
import CreateService from './pages/admin/CreateService';
import StaffHub from './pages/staff/StaffHub';
import StaffCalendar from './pages/staff/StaffCalendar';
import CreateAppointment from './pages/staff/CreateAppointment';



const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/admin",
      element: <ProtectedRoute><AdminHub /></ProtectedRoute>,
    },
    {
      path: "/login/admin",
      element: <AdminLogin />,
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
    {
      path: "/staff",
      element: <StaffHub />,
    },
    {
      path: "/staff/staff-calendar",
      element: <StaffCalendar />,
    },
    {
      path: "/staff/staff-create-member",
      element: <div>Create Member</div>,
    },
    {
      path: "/staff/staff-patient-list",
      element: <div>Patient List</div>,
    },
    {
      path: "/staff/staff-inventory",
      element: <div>Inventory</div>,
    },
    {
      path: "/staff/staff-service-list",
      element: <div>Service list</div>,
    },
    {
      path: "/staff/create-appointment",
      element:  <CreateAppointment />,
    },
  ]);

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <AuthProvider>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login/admin" element={<AdminLogin />} />
        <Route path="/login/staff" element={<StaffLogin />} />
        <Route
          path="/admin"
          element={
            <AdminProtectedRoute>
              <AdminHub />
            </AdminProtectedRoute>
          }
        />
      </Routes>
        {/* <RouterProvider router={router} /> */}
      </AuthProvider>
    </BrowserRouter>
    </div>
  );
}

export default App;