import React from "react";

const DashboardHeader = () => {
  const today = new Date();

  const formattedDate = today.toLocaleDateString("en-IN", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const formattedTime = today.toLocaleTimeString("en-IN", {
    hour: "numeric",
    minute: "numeric",
  });

  return (
    <div className="flex justify-between items-center bg-white w-full h-20 px-6 py-5 rounded-lg">
      <div>
        <h1 className="text-3xl font-bold">Welcome Back 👋</h1>
        <p className="font-semibold text-gray-500">
          Here's what's happening in your gym today.
        </p>
      </div>
      <div className="text-right">
        <p className="text-xl font-semibold">{formattedDate}</p>
        <p className="text-md text-gray-500">{formattedTime}</p>
      </div>
    </div>
  );
};

export default DashboardHeader;
