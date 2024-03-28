import React from "react";
import { FaSearch } from "react-icons/fa";
import logo from "../../assets/img/logo.png";

const NavBar = () => {
  return (
    <div>
      <div className="nav w-full h-12 mt-1 flex md:flex-row items-center justify-between p-3 ">
        <div className="flex items-center">
          <img className="w-[9vw] ml-4" src={logo} alt="" />
        </div>
        <div
          className="flex md:gap-9 mt-3 md:mt-0 md:mb-1 font-semibold text-zinc-600 text-sm md:text-base"
          style={{ marginLeft: "-14%" }}
        >
          <button className="hover:text-black active:font-bold focus:outline-none focus:text-black focus:font-bold focus:border-b-2 focus:border-gray-600 ">
            Home
          </button>
          <button className="hover:text-black active:font-bold focus:outline-none focus:text-black focus:font-bold focus:border-b-2 focus:border-gray-600">
            Products
          </button>
          
          <button className="hover:text-black active:font-bold focus:outline-none focus:text-black focus:font-bold focus:border-b-2 focus:border-gray-600">
            About
          </button>
          <button className="hover:text-black active:font-bold focus:outline-none focus:text-black focus:font-bold focus:border-b-2 focus:border-gray-600">
            Pricing
          </button>
        </div>

        <div className="flex items-center gap-x-4">
          <div className="relative md:w-67 pr-8">
            <span className="relative md:absolute inset-y-0 left-0 flex items-center pl-3">
              <button className="p-1 focus:outline-none md:text-black">
                <FaSearch />
              </button>
            </span>
            <input
              type="search"
              placeholder="Search for anything"
              className="w-full px-4 py-1 pl-12 bg-gray-50 rounded font-semibold outline-none hidden md:block placeholder:text-gray-500 placeholder:font-semibold placeholder:text-xs"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
