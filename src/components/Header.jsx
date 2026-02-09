import React from "react";
import { FaSearch } from "react-icons/fa";

const Header = () => {
  return (
    <div className="mb-12">
      <div className="mb-8">
        <h1 className="text-center text-[48px] font-bold font-[Rubik]">
          Mini Job Portal
        </h1>
      </div>
      <div className="flex justify-center items-center gap-6">
        <input
          type="text"
          placeholder="e.g. frontend intern"
          className="px-6 py-2 bg-gray-300 rounded-md items-center w-2xl"
        />
        <button className="flex justify-center text-white items-center gap-2 bg-green-600 px-6 py-2 rounded-md hover:bg-green-700 hover:text-white transition-all duration-300 hover:scale-105 cursor-pointer">
          <FaSearch /> explore
        </button>
      </div>
    </div>
  );
};

export default Header;
