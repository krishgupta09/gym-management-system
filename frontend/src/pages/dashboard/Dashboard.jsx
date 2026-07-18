import React from "react";
import DashboardHeader from "../../components/dashboard/DashboardHeader";
import StatCard from "../../components/dashboard/StatCard";
import { FiCreditCard, FiDollarSign, FiUser, FiUsers } from "react-icons/fi";
import statData from "../../data/statData.js";
import RevenueChart from "../../components/dashboard/charts/RevenueChart.jsx";
import MembershipDataChart from "../../components/dashboard/charts/MembershipDataChart.jsx";
import RecentActivities from "../../components/dashboard/RecentActivities.jsx";

const Dashboard = () => {
  return (
    <div className="p-4">
      <DashboardHeader />

      <div className="grid grid-cols-4 gap-6 mt-6">
        {statData.map((data, index) => {
         return <StatCard key={data.title}
         title={data.title}
         value={data.value}
         trend={data.trend}
         icon={data.icon}
         iconBgAndText={data.iconBgAndText} />;
        })}
      </div>

      <RevenueChart />
      <MembershipDataChart />
      <RecentActivities />
    </div>
  );
};

export default Dashboard;
