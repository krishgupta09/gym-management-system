import React from "react";
import {
  XAxis,
  YAxis,
  ResponsiveContainer,
  LineChart,
  Line,
  CartesianGrid,
  Tooltip,
} from "recharts";

import revenueData from "../../../data/revenueData.js";

const RevenueChart = () => {
  return (
    <div className="bg-white rounded-lg shadow-md px-6 py-3 mt-5">
      <h2 className="font-bold text-xl mb-6">Revenue Overview</h2>
      <ResponsiveContainer width="100%" height={300} className="chart">
        <LineChart data={revenueData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip formatter={(value)=>`₹${value.toLocaleString()}`} labelFormatter={(label)=> `Month: ${label}`} />
          <Line type="monotone" stroke="#3B82F6" dataKey="revenue" strokeWidth={3} dot={{r:5}} activeDot={{r:8}}/>
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default RevenueChart;
