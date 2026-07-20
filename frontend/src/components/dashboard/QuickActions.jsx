import React from "react";
import quickActions from "../../data/quickActions";

const QuickActions = () => {
  return (
    <div className="bg-white shadow-md p-3 mt-5 ">
      <h2 className="font-bold text-lg mb-3">Quick Actions</h2>
      <div className="grid grid-cols-2 gap-4">
        {quickActions.map((action) => (
          <div
            key={action.id}
            className="bg-white rounded-lg px-4 py-6 flex flex-col justify-center items-center hover:shadow-md hover:bg-gray-50 hover:cursor-pointer hover:-translate-y-2 transition-all duration-200 border border-gray-200"
            onClick={() => console.log(action.title)}
          >
            <div
              className={` rounded-full p-2 flex justify-center items-center ${action.bgColor}`}
            >
              <action.icon className={`text-xl ${action.iconColor}`} />
            </div>

            <h2 className="text-sm font-medium">{action.title}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuickActions;
