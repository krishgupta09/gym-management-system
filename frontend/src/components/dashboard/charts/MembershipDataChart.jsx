import React from "react";
import { ResponsiveContainer, Pie, PieChart, Cell, Tooltip, Legend } from "recharts";
import membershipData from "../../../data/membershipData";
import CustomToolTip from "./CustomToolTip";
const MembershipDataChart = () => {
  return (
    <div className="bg-white px-6 py-3 rounded-lg shadow-md mt-5">
      <h2 className="font-bold text-xl ">Membership Data</h2>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Tooltip content={<CustomToolTip />} />
          <Legend verticalAlign="bottom" align="right" />

          <Pie
            data={membershipData}
            dataKey="members"
            nameKey="plan"
            cx="10%"
            cy="50%"
            outerRadius={120}
          >
            {membershipData.map((item) => {
              return <Cell key={item.plan} fill={item.color} stroke="white" />;
            })}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default MembershipDataChart;
