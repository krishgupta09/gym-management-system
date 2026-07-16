import React from "react";
import { Route, Routes } from "react-router-dom";
import AdminLayout from "../layouts/AdminLayout";
import Login from "../pages/auth/Login";
import Dashboard from "../pages/dashboard/Dashboard";
import Members from "../pages/members/Members";
import Memberships from "../pages/memberships/Memberships"
import Attendance from "../pages/attendance/Attendance";
import Payments from "../pages/payments/Payments";
import Profile from "../pages/profile/Profile";
import Reports from "../pages/reports/Reports";
import Settings from "../pages/settings/Settings";
import Trainers from "../pages/trainers/Trainers";
import Workouts from "../pages/workouts/Workouts";

const AppRoutes = () => {
  return (
    <Routes>
      {/* Login page (no Sidebar/Navbar) */}
      <Route path="/login" element={<Login />} />

      {/* All admin pages */}
      <Route path="/" element={<AdminLayout/>}>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="members" element={<Members />} />
        <Route path="attendance" element={<Attendance />} />
        <Route path="memberships" element={<Memberships />} />
        <Route path="payments" element={<Payments />} />
        <Route path="profile" element={<Profile />} />
        <Route path="reports" element={<Reports />} />
        <Route path="settings" element={<Settings />} />
        <Route path="trainers" element={<Trainers />} />
        <Route path="workouts" element={<Workouts />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
