import React from "react";

const StatCard = ({ title, value, trend, icon:Icon, iconBgAndText}) => {
  return (
    <div className="bg-white flex justify-between py-4 px-8 rounded-lg shadow-md hover:shadow:lg hover:-translate-y-1.5 transition-all duration-300 hover:cursor-pointer">
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
          <Icon />
        </div>
      </div>
    </div>
  );
};

export default StatCard;
