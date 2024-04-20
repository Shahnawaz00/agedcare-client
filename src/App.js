import './styles/styles.css';
import * as React from "react";
import {
    createBrowserRouter,
    RouterProvider,
    Routes,
    Route,
    BrowserRouter,
  } from "react-router-dom";
import AdminHub from './pages/admin/AdminHub';
import Home from './pages/Home';
import PatientList from './pages/admin/PatientList';
import ServiceList from './pages/admin/ServiceList';
import StaffList from './pages/admin/StaffList';
import MemberManagement from './pages/admin/MemberManagement';
import CreateMember from './pages/admin/CreateMember';
import AdminLogin from './pages/login/AdminLogin';
import { ProtectedRoute } from "./components/ProtectedRoute";
import { AuthProvider } from "./hooks/useAuth";

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
  ]);

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <AuthProvider>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login/admin" element={<AdminLogin />} />
        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <AdminHub />
            </ProtectedRoute>
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