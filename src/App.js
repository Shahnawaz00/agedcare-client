import './styles/styles.css';
import * as React from "react";
import {createBrowserRouter,RouterProvider,Routes,Route,BrowserRouter} from "react-router-dom";

// hooks
import { ProtectedRoute } from "./components/ProtectedRoute";
import { AdminProtectedRoute } from './components/AdminProtectedRoute';
import { StaffProtectedRoute } from './components/StaffProtectedRoute';
import { AuthProvider } from "./hooks/useAuth";

// Home pages
import Home from './pages/Home';

import AdminLogin from './pages/login/AdminLogin';
import StaffLogin from './pages/login/StaffLogin';

// Admin pages 
import AdminHub from './pages/admin/AdminHub';

import PatientList from './pages/admin/PatientList';
import ServiceList from './pages/admin/ServiceList';
import StaffList from './pages/admin/StaffList';
import InventoryList from './pages/admin/InventoryList';
import MedicationList from './pages/admin/MedicationList';

import ServiceManagement from './pages/admin/ServiceManagement';
import InventoryManagement from './pages/admin/InventoryManagement';
import MemberManagement from './pages/admin/MemberManagement';
import StaffManagement from './pages/admin/StaffManagement';

import CreateMember from './pages/admin/CreateMember';
import CreateStaff from './pages/admin/CreateStaff';
import CreateService from './pages/admin/CreateService';
import CreateInventory from './pages/admin/CreateInventory';
import CreateMedication from './pages/admin/CreateMedication';

// Staff pages 
import StaffHub from './pages/staff/StaffHub';

import StaffCalendar from './pages/staff/StaffCalendar';
import CreateAppointment from './pages/staff/CreateAppointment';

// Member pages 


const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },

// Admin section
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
      path: "/admin/inventory-management",
      element: <InventoryManagement />,
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
      path: "/admin/medication-list",
      element: <MedicationList />,
    },
    {
      path: "/admin/create-inventory",
      element: <CreateInventory />,
    },
    {
      path: "/admin/create-medication",
      element: <CreateMedication />,
    },

// Staff Section

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

        {/* Admin Routes */}
        <Route path="/admin" element={<AdminHub /> }/>
        <Route path="/admin/member-management" element={<AdminProtectedRoute><MemberManagement /></AdminProtectedRoute>} />
        <Route path="/admin/staff-management" element={<AdminProtectedRoute><StaffManagement /></AdminProtectedRoute>} />
        <Route path="/admin/inventory-management" element={<AdminProtectedRoute><InventoryManagement/></AdminProtectedRoute>} />
        <Route path="/admin/service-management" element={<AdminProtectedRoute><ServiceManagement /></AdminProtectedRoute>} />

        <Route path="/admin/inventory-list" element={<AdminProtectedRoute><InventoryList/></AdminProtectedRoute>} />
        <Route path="/admin/patient-list" element={<AdminProtectedRoute><PatientList /></AdminProtectedRoute>} />
        <Route path="/admin/service-list" element={<AdminProtectedRoute><ServiceList /></AdminProtectedRoute>} />
        <Route path="/admin/staff-list" element={<AdminProtectedRoute><StaffList /></AdminProtectedRoute>} />
        <Route path="/admin/medication-list" element={<AdminProtectedRoute><MedicationList /></AdminProtectedRoute>} />


        <Route path="/admin/create-staff" element={<AdminProtectedRoute><CreateStaff /></AdminProtectedRoute>} />
        <Route path="/admin/create-service" element={<AdminProtectedRoute><CreateService /></AdminProtectedRoute>} />
        <Route path="/admin/create-member" element={<AdminProtectedRoute><CreateMember /></AdminProtectedRoute>} />
        <Route path="/admin/create-inventory" element={<AdminProtectedRoute><CreateInventory /></AdminProtectedRoute>} />
        <Route path="/admin/create-medication" element={<AdminProtectedRoute><CreateMedication /></AdminProtectedRoute>} />


        <Route path="/admin/calendar" element={<AdminProtectedRoute><div>Calendar</div></AdminProtectedRoute>} />


        {/* Staff Routes */}
        <Route path="/staff" element={<StaffProtectedRoute><StaffHub /></StaffProtectedRoute>} />
        <Route path="/staff/staff-calendar" element={<StaffProtectedRoute><StaffCalendar /></StaffProtectedRoute>} />
        <Route path="/staff/staff-create-member" element={<StaffProtectedRoute><div>Create Member</div></StaffProtectedRoute>} />
        <Route path="/staff/staff-patient-list" element={<StaffProtectedRoute><div>Patient List</div></StaffProtectedRoute>} />
        <Route path="/staff/staff-inventory" element={<StaffProtectedRoute><div>Inventory</div></StaffProtectedRoute>} />
        <Route path="/staff/staff-service-list" element={<StaffProtectedRoute><div>Service list</div></StaffProtectedRoute>} />
        <Route path="/staff/create-appointment" element={<StaffProtectedRoute><CreateAppointment /></StaffProtectedRoute>} />
      </Routes>
        {/* <RouterProvider router={router} /> */}
      </AuthProvider>
    </BrowserRouter>
    </div>
  );
}

export default App;