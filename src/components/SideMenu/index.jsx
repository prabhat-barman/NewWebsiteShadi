import React from "react";
import { MdOutlinePlaylistPlay } from "react-icons/md";
import { LuLayoutDashboard } from "react-icons/lu";
import { IoBookOutline } from "react-icons/io5";
import { MdPeopleAlt } from "react-icons/md";
import { FaRegCalendarAlt } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";
import { MdOutlineLogin } from "react-icons/md";
import { PiSuitcaseSimpleBold } from "react-icons/pi";
import { MdOutlinePayment } from "react-icons/md";
import logo from "../../Images/logo.png"; 

const SideMenu = () => {
  return (
  <>
  <div className="h-screen w-full md:w-[280px] fixed top-0 left-0 z-50 overflow-y-auto">

<div className="flex items-center pl-4 gap-2">
  <MdOutlinePlaylistPlay className="text-3xl text-gray-700" />
  <img src={logo} alt="logo" className="h-32 w-46 " />
</div>

<div className="text-gray-700">
  <div className="flex items-center gap-3 pl-4">
    <LuLayoutDashboard />
    <button className="ml-2">All Photos</button>
  </div>

  <div className="flex items-center mt-4 pl-4 gap-3">
    <IoBookOutline />
    <button className="ml-2">Album</button>
  </div>

  <div className="flex items-center mt-4 pl-4 gap-3">
    <FaRegCalendarAlt />
    <button className="ml-2">Calendar</button>
  </div>

  <div className="flex items-center mt-4 pl-4 gap-3">
    <MdPeopleAlt />
    <button className="ml-2">Peers</button>
  </div>

  <div className="flex items-center mt-4 pl-4 gap-3">
    <PiSuitcaseSimpleBold />
    <button className="ml-2">Portfolio</button>
  </div>

  <div className="flex items-center mt-4 pl-4 gap-3">
    <MdOutlinePayment />
    <button className="ml-2">Payments</button>
  </div>
</div>

<div className="mt-44 p-4 text-gray-700">
  <div className="flex items-center mt-4 gap-3">
    <IoSettingsOutline />
    <button className="ml-2">Setting</button>
  </div>

  <div className="flex items-center mt-4 gap-3">
    <MdOutlineLogin />
    <button className="ml-2">Log out</button>
  </div>
</div>
</div>
  </>
  )
};

export default SideMenu;
