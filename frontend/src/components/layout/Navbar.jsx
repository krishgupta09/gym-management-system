import React from "react";
import { FiBell, FiSearch } from "react-icons/fi";
import logo from "../../assets/images/logogym.png";

const Navbar = () => {
  return (
    <header className="w-full h-20 shadow-sm flex items-center justify-between px-8 bg-white">
      {/* Search */}
      <div className="flex items-center gap-2 w-80 px-3 py-2 border border-gray-300 rounded-lg">
        <FiSearch className="text-gray-500" />
        <input
          type="text"
          placeholder="Search"
          className="w-full outline-none bg-transparent text-gray-700 placeholder-gray-400"
        />
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-5">
        <button className="relative text-2xl text-gray-600 hover:text-blue-600 transition">
          <FiBell />
        </button>
        <div className="flex items-center gap-3 cursor-pointer">
          <img
            src={logo}
            alt="Profile"
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <h4 className="text-gray-800 font-semibold">Krish Gupta</h4>
            <p className="text-sm text-gray-500">Admin</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
