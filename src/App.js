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

// login pages
import AdminLogin from './pages/login/AdminLogin';
import StaffLogin from './pages/login/StaffLogin';

// admin pages 
import AdminHub from './pages/admin/AdminHub';
import Home from './pages/Home';

import PatientList from './pages/admin/PatientList';
import ServiceList from './pages/admin/ServiceList';
import StaffList from './pages/admin/StaffList';
import InventoryList from './pages/admin/InventoryList';
import AppointmentList from './pages/admin/AppointmentList';

import StaffManagement from './pages/admin/StaffManagement';
import ServiceManagement from './pages/admin/ServiceManagement';
import MemberManagement from './pages/admin/MemberManagement';
import InventoryManagement from './pages/admin/InventoryManagement';
import AppointmentManagement from './pages/admin/AppointmentManagement';

import CreateMember from './pages/admin/CreateMember';
import CreateStaff from './pages/admin/CreateStaff';
import CreateService from './pages/admin/CreateService';
import CreateInventory from './pages/admin/CreateInventory';
import CreateAppointment from './pages/admin/CreateAppointment';

// staff pages 
import StaffHub from './pages/staff/StaffHub';
import StaffCalendar from './pages/staff/StaffCalendar';
// import CreateAppointment from './pages/staff/CreateAppointment';


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
        <Route path="/admin/calendar" element={<AdminProtectedRoute><div>Calendar</div></AdminProtectedRoute>} />

        <Route path="/admin/inventory-list" element={<AdminProtectedRoute><InventoryList/></AdminProtectedRoute>} />
        <Route path="/admin/patient-list" element={<AdminProtectedRoute><PatientList /></AdminProtectedRoute>} />
        <Route path="/admin/service-list" element={<AdminProtectedRoute><ServiceList /></AdminProtectedRoute>} />
        <Route path="/admin/staff-list" element={<AdminProtectedRoute><StaffList /></AdminProtectedRoute>} />
        <Route path="/admin/appointment-list" element={<AdminProtectedRoute><AppointmentList /></AdminProtectedRoute>} />
        
        <Route path="/admin/member-management" element={<AdminProtectedRoute><MemberManagement /></AdminProtectedRoute>} />
        <Route path="/admin/staff-management" element={<AdminProtectedRoute><StaffManagement /></AdminProtectedRoute>} />
        <Route path="/admin/appointment-management" element={<AdminProtectedRoute><AppointmentManagement /></AdminProtectedRoute>} />
        <Route path="/admin/inventory-management" element={<AdminProtectedRoute><InventoryManagement /></AdminProtectedRoute>} />
        <Route path="/admin/service-management" element={<AdminProtectedRoute><ServiceManagement /></AdminProtectedRoute>} />

        <Route path="/admin/create-member" element={<AdminProtectedRoute><CreateMember /></AdminProtectedRoute>} />
        <Route path="/admin/create-staff" element={<AdminProtectedRoute><CreateStaff /></AdminProtectedRoute>} />
        <Route path="/admin/create-service" element={<AdminProtectedRoute><CreateService /></AdminProtectedRoute>} />
        <Route path="/admin/create-inventory" element={<AdminProtectedRoute><CreateInventory /></AdminProtectedRoute>} />
        <Route path="/admin/create-appointment" element={<AdminProtectedRoute><CreateAppointment /></AdminProtectedRoute>} />
        <Route
          path="/admin"
          element={
            <AdminProtectedRoute>
              <AdminHub />
            </AdminProtectedRoute>
          }
        />

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