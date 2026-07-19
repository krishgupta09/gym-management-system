import React from "react";
import activities from "../../data/recentActivities";

const iconColors = {
  success: "text-green-500",
  warning: "text-yellow-500",
  info: "text-blue-500 ",
};
const iconBackgrounds = {
  success: " bg-green-100",
  warning: "bg-yellow-100",
  info: " bg-blue-100",
};

const RecentActivities = () => {
  return (
    <div className="bg-white rounded-lg px-6 py-3 shadow-md mt-5">
      <div className="flex justify-between border-b-2 border-gray-500 p-1 mb-3 ">
        <h2 className="text-lg font-bold">Recent Activities</h2>
        <p className="text-blue-500 font-medium hover:underline cursor-pointer">
          View All
        </p>
      </div>
      {activities.map((activity, index) => {
        return (
          <div
            className={`flex justify-between border-b-2 border-gray-500 mb-4 p-3 hover:bg-gray-50 transition-all duration-300 hover:cursor-pointer ${
              index !== activities.length - 1
                ? "border-b-2 border-gray-500"
                : ""
            }`}
            key={activity.id}
          >
            <div className=" flex items-center gap-3 ">
              <div
                className={` w-10 h-10 flex items-center justify-center p-2 rounded-full ${iconBackgrounds[activity.type]}`}
              >
                {<activity.icon className={iconColors[activity.type]} />}
              </div>
              <h2 className="font-semibold">{activity.title}</h2>
            </div>
            <p className="text-gray-500 text-sm">{activity.time}</p>
          </div>
        );
      })}
    </div>
  );
};

export default RecentActivities;
