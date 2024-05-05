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
import AdminHub from './pages/admin/adminhub/AdminHub';
import AppointmentManagement from './pages/admin/appointment/AppointmentManagement';
import FacilityManagement from './pages/admin/facility/FacilityManagement';
import ServiceManagement from './pages/admin/service/ServiceManagement';
import InventoryManagement from './pages/admin/inventory/InventoryManagement';
import MemberManagement from './pages/admin/member/MemberManagement';
import StaffManagement from './pages/admin/staff/StaffManagement';
import Calendar from './pages/admin/calender/Calendar';

import PatientList from './pages/admin/member/PatientList';
import ServiceList from './pages/admin/service/ServiceList';
import StaffList from './pages/admin/staff/StaffList';
import InventoryList from './pages/admin/inventory/InventoryList';
import MedicationList from './pages/admin/inventory/MedicationList';
import AdminList from './pages/admin/adminhub/AdminList';
import FacilityList from './pages/admin/facility/FacilityList';
import AppointmentList from './pages/admin/appointment/AppointmentList';
import ScheduleList from './pages/admin/calender/ScheduleList';

import CreateMember from './pages/admin/member/CreateMember';


import CreateStaff from './pages/admin/staff/CreateStaff';
import CreateService from './pages/admin/service/CreateService';
import CreateInventory from './pages/admin/inventory/CreateInventory';
import CreateMedication from './pages/admin/inventory/CreateMedication';
import CreateFacility from './pages/admin/facility/CreateFacility';
import CreateSchedule from './pages/admin/calender/CreateSchedule';
import CreateAppointment from './pages/admin/appointment/CreateAppointment';
import CreateAdmin from './pages/admin/adminhub/CreateAdmin';

import RecordMember from './pages/admin/member/RecordMember';
import RecordStaff from './pages/admin/staff/RecordStaff';
import RecordService from './pages/admin/service/RecordService';
import RecordInventory from './pages/admin/inventory/RecordInventory';
import RecordMedication from './pages/admin/inventory/RecordMedication';
import RecordFacility from './pages/admin/facility/RecordFacility';
import RecordSchedule from './pages/admin/calender/RecordSchedule';
import RecordAppointment from './pages/admin/appointment/RecordAppointment';
import RecordAdmin from './pages/admin/adminhub/RecordAdmin';


// Staff pages 
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
        <Route path="/admin" element={<AdminHub /> }/>
        <Route path="/admin/member-management" element={<AdminProtectedRoute><MemberManagement /></AdminProtectedRoute>} />
        <Route path="/admin/staff-management" element={<AdminProtectedRoute><StaffManagement /></AdminProtectedRoute>} />
        <Route path="/admin/inventory-management" element={<AdminProtectedRoute><InventoryManagement/></AdminProtectedRoute>} />
        <Route path="/admin/service-management" element={<AdminProtectedRoute><ServiceManagement /></AdminProtectedRoute>} />
        <Route path="/admin/calendar" element={<AdminProtectedRoute><Calendar /></AdminProtectedRoute>} />
        <Route path="/admin/facility-management" element={<AdminProtectedRoute><FacilityManagement /></AdminProtectedRoute>} />
        <Route path="/admin/appointment-management" element={<AdminProtectedRoute><AppointmentManagement /></AdminProtectedRoute>} />

        <Route path="/admin/inventory-list" element={<AdminProtectedRoute><InventoryList/></AdminProtectedRoute>} />
        <Route path="/admin/patient-list" element={<AdminProtectedRoute><PatientList /></AdminProtectedRoute>} />
        <Route path="/admin/service-list" element={<AdminProtectedRoute><ServiceList /></AdminProtectedRoute>} />
        <Route path="/admin/staff-list" element={<AdminProtectedRoute><StaffList /></AdminProtectedRoute>} />
        <Route path="/admin/medication-list" element={<AdminProtectedRoute><MedicationList /></AdminProtectedRoute>} />
        <Route path="/admin/admin-list" element={<AdminProtectedRoute><AdminList /></AdminProtectedRoute>} />
        <Route path="/admin/facility-list" element={<AdminProtectedRoute><FacilityList /></AdminProtectedRoute>} />
        <Route path="/admin/appointment-list" element={<AdminProtectedRoute><AppointmentList /></AdminProtectedRoute>} />
        <Route path="/admin/schedule-list" element={<AdminProtectedRoute><ScheduleList /></AdminProtectedRoute>} />

        <Route path="/admin/create-staff" element={<AdminProtectedRoute><CreateStaff /></AdminProtectedRoute>} />
        <Route path="/admin/create-service" element={<AdminProtectedRoute><CreateService /></AdminProtectedRoute>} />
        <Route path="/admin/create-member" element={<AdminProtectedRoute><CreateMember /></AdminProtectedRoute>} />
        <Route path="/admin/create-inventory" element={<AdminProtectedRoute><CreateInventory /></AdminProtectedRoute>} />
        <Route path="/admin/create-medication" element={<AdminProtectedRoute><CreateMedication /></AdminProtectedRoute>} />
        <Route path="/admin/create-appointment" element={<AdminProtectedRoute><CreateAppointment /></AdminProtectedRoute>} />
        <Route path="/admin/create-schedule" element={<AdminProtectedRoute><CreateSchedule /></AdminProtectedRoute>} />
        <Route path="/admin/create-admin" element={<AdminProtectedRoute><CreateAdmin /></AdminProtectedRoute>} />
        <Route path="/admin/create-facility" element={<AdminProtectedRoute><CreateFacility /></AdminProtectedRoute>} />

        <Route path="/admin/record-staff/:id" element={<AdminProtectedRoute><RecordStaff /></AdminProtectedRoute>} />
        <Route path="/admin/record-service/:id" element={<AdminProtectedRoute><RecordService /></AdminProtectedRoute>} />
        <Route path="/admin/record-member/:id" element={<AdminProtectedRoute><RecordMember /></AdminProtectedRoute>} />
        <Route path="/admin/record-inventory/:id" element={<AdminProtectedRoute><RecordInventory /></AdminProtectedRoute>} />
        <Route path="/admin/record-medication/:id" element={<AdminProtectedRoute><RecordMedication /></AdminProtectedRoute>} />
        <Route path="/admin/record-appointment/:id" element={<AdminProtectedRoute><RecordAppointment /></AdminProtectedRoute>} />
        <Route path="/admin/record-schedule/:id" element={<AdminProtectedRoute><RecordSchedule /></AdminProtectedRoute>} />
        <Route path="/admin/record-admin/:id" element={<AdminProtectedRoute><RecordAdmin /></AdminProtectedRoute>} />
        <Route path="/admin/record-facility/:id" element={<AdminProtectedRoute><RecordFacility /></AdminProtectedRoute>} />

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