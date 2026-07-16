import React from "react";
import Sidebar from "./components/layout/Sidebar";
import Navbar from "./components/layout/Navbar";
import AdminLayout from "./layouts/AdminLayout";
import AppRoutes from "./routes/AppRoutes";

const App = () => {
  return (
    <div>
      <AppRoutes />
    </div>
  );
};

export default App;
