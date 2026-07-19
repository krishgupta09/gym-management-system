import React from "react";
import {
  ResponsiveContainer,
  Pie,
  PieChart,
  Cell,
  Tooltip,
  Legend,
} from "recharts";
import membershipData from "../../../data/membershipData";
import CustomToolTip from "./CustomToolTip";

const MembershipDataChart = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md mt-5">
      <h2 className="font-bold text-xl mb-6">Membership Data</h2>

      <div className="flex items-center justify-between gap-8">
        {/* Left Side - Pie Chart */}
        <div className="w-2/3 h-[320px]">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Tooltip content={<CustomToolTip />} />

              <Legend
                verticalAlign="bottom"
                align="center"
              />

              <Pie
                data={membershipData}
                dataKey="members"
                nameKey="plan"
                cx="45%"
                cy="45%"
                outerRadius={100}
              >
                {membershipData.map((item) => (
                  <Cell
                    key={item.plan}
                    fill={item.color}
                    stroke="white"
                    strokeWidth={2}
                  />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Right Side - Membership Summary */}
        <div className="w-1/3 flex flex-col gap-4">
          {membershipData.map((item) => (
            <div
              key={item.plan}
              className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:shadow-md hover:bg-gray-50 transition-all duration-300 cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <div
                  className="w-4 h-4 rounded-full"
                  style={{ backgroundColor: item.color }}
                ></div>

                <div>
                  <h3 className="font-semibold">{item.plan}</h3>
                  <p className="text-sm text-gray-500">Membership Plan</p>
                </div>
              </div>

              <div className="text-right">
                <p className="font-bold text-lg">{item.members}</p>
                <p className="text-xs text-gray-500">Members</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MembershipDataChart;