import React from "react";
import { FiUser } from "react-icons/fi";

const StatCard = ({ title, value, trend, icon, iconBgAndText}) => {
  return (
    <div className="bg-white flex justify-between py-4 px-8 rounded-lg shadow-md hover:shadow:lg hover:-translate-y-1.5 transition-all duration-300">
      <div className="flex flex-col justify-between gap-2">
        <p className="text-gray-700">{title}</p>
        <h2 className="font-bold text-3xl">{value}</h2>
        <p
          className={trend.startsWith("+") ? "text-green-600" : "text-red-600"}
        >
          {trend}
        </p>
      </div>
      <div className="flex justify-between items-center mb-2">
        <div className={`${iconBgAndText} p-2 rounded-full`}>
          {icon}
        </div>
      </div>
    </div>
  );
};

export default StatCard;
