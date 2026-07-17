import React from "react";
import DashboardHeader from "../../components/dashboard/DashboardHeader";
import StatCard from "../../components/dashboard/StatCard";
import { FiCreditCard, FiDollarSign, FiUser, FiUsers } from "react-icons/fi";

const Dashboard = () => {
  return (
    <div className="p-4">
      <DashboardHeader />

      <div className="grid grid-cols-4 gap-6 mt-6">
        <StatCard
          title="Total Members"
          value="532"
          trend="+12% this month"
          icon={<FiUsers />}
          iconBgAndText="bg-blue-300/50 text-blue-700"
        />

        <StatCard
          title="Active Memberships"
          value="425"
          trend="-2% this month"
          icon={<FiCreditCard />}
          iconBgAndText="bg-green-300/50 text-green-700"
        />

        <StatCard
          title="Trainers"
          value="18"
          trend="+2% this month"
          icon={<FiUser />}
          iconBgAndText="bg-purple-300/50 text-purple-700"
        />

        <StatCard
          title="Monthly Revenue"
          value="₹2,45,000"
          trend="+10% this month"
          icon={<FiDollarSign />}
          iconBgAndText="bg-green-300/40 text-green-800"
        />
      </div>
    </div>
  );
};

export default Dashboard;
