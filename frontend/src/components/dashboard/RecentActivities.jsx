import React from "react";
import activities from "../../data/recentActivities";

const RecentActivities = () => {
  const iconColors = {
    success: "text-green-500",
    warning: "text-yellow-500",
    info: "text-blue-500 ",
  };
  const iconBackgrounds = {
    success: "p-2 rounded-lg bg-green-100",
    warning: " p-2 rounded-lg bg-yellow-100",
    info: "p-2 rounded-lg bg-blue-100",
  };
  return (
    <div className="bg-white rounded-lg px-6 py-3 shadow-md mt-5">
      <div className="flex justify-between border-b-2 border-gray-500 p-1 mb-3 ">
        <h2 className="text-lg font-bold">Recent Activities</h2>
        <p className="text-blue-500">View All</p>
      </div>
      {activities.map((activity) => {
        return (
          <div
            className="flex justify-between border-b-2 border-gray-500 mb-4 p-2"
            key={activity.id}
          >
            <div className=" flex items-center gap-2 ">
              <div className={iconBackgrounds[activity.type]}>
                {<activity.icon className={iconColors[activity.type]} />}
              </div>
              <h2>{activity.title}</h2>
            </div>
            <p className="text-gray-500">{activity.time}</p>
          </div>
        );
      })}
    </div>
  );
};

export default RecentActivities;
