import React from "react";
import menuItems from "../../data/sidebarMenu.js";
import { NavLink } from "react-router-dom";
import logo  from "../../assets/images/logo2.png";

const Sidebar = () => {
  return (
    <aside className="fixed top-0 left-0 w-64 h-screen bg-slate-900 text-white flex flex-col p-4">
      <div className="mb-1">
        <img src={logo} alt="GYM FIT" className="w-40 h-auto ml-6" />
      </div>

      <ul className="mt-8 space-y-2">
        {menuItems.map((data, index) => {
          const Icon = data.icon;
          return (
            <li key={data.name} className="list-none">
              <NavLink
                to={data.path}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-3 py-3 rounded-lg text-lg font-medium transition-all duration-300 ${isActive ? "bg-blue-600 text-white" : "hover:bg-slate-800 text-gray-300 hover:text-white"}`
                }
              >
                <Icon />
                <span>{data.name}</span>
              </NavLink>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

export default Sidebar;
