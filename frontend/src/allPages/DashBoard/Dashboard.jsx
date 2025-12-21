import { useState } from "react";
import { 
  FaBook, 
  FaClipboardList, 
  FaUsers, 
  FaCode, 
  FaBlog, 
  FaHome, 
  FaSignOutAlt, 
  FaSearch,
} from "react-icons/fa";
import { FiAlignJustify } from "react-icons/fi";
import Sidebar from "../../Components/Sidebar";
export default function Dashboard() {
    const [openSideBar, setOpenSideBar] = useState(false);
  return (
    <div className="min-h-screen bg-blue-50 md:flex md:items-center md:justify-center md:p-4 p-0">
      <div className="relative w-full h-full bg-white shadow-2xl md:rounded-xl overflow-hidden flex flex-col lg:flex-row">

        {/* ---------- Sidebar ---------- */}
        {openSideBar == true ? <Sidebar openSideBar={()=> setOpenSideBar(false)}/> : ""}
        <div className="h-10 bg-blue-600 md:hidden flex items-center pl-2"><FiAlignJustify onClick={()=>setOpenSideBar(!openSideBar)} className="text-[5vh] text-white"/></div>
        <div className="hidden md:block lg:w-[22%] w-full bg-blue-200 p-6 flex lg:flex-col flex-row lg:justify-between justify-center gap-4 lg:gap-0">

          {/* Top user + menu desktop / hidden on small */}
          <div className="hidden lg:block">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 bg-blue-500 rounded-full"></div>
              <p className="font-semibold">USER_NAME</p>
            </div>

            <div className="space-y-4">
              <button className="cursor-pointer w-full bg-white hover:bg-blue-300 transition p-3 rounded-md flex items-center gap-3 font-medium shadow">
                <FaBook /> MOCK TEST
              </button>

              <button className="cursor-pointer w-full bg-white hover:bg-blue-300 transition p-3 rounded-md flex items-center gap-3 font-medium shadow">
                <FaClipboardList /> ASSIGNMENTS
              </button>

              <button className="cursor-pointer w-full bg-white hover:bg-blue-300 transition p-3 rounded-md flex items-center gap-3 font-medium shadow">
                <FaUsers /> CHAT WITH FRIENDS
              </button>

              <button className="cursor-pointer w-full bg-white hover:bg-blue-300 transition p-3 rounded-md flex items-center gap-3 font-medium shadow">
                <FaCode /> LIVE CODING
              </button>

              <button className="cursor-pointer w-full bg-white hover:bg-blue-300 transition p-3 rounded-md flex items-center gap-3 font-medium shadow">
                <FaBlog /> YOUR BLOG
              </button>
            </div>
          </div>

          {/* Bottom Buttons */}
          <div className="flex lg:justify-between justify-center w-full gap-4 mt-20">
            <button className="cursor-pointer flex items-center gap-2 bg-blue-500 hover:bg-blue-600 transition text-white px-4 py-2 rounded-md shadow w-full justify-center lg:w-auto">
              <FaHome /> Home
            </button>

            <button className="cursor-pointer flex items-center gap-2 bg-red-500 hover:bg-red-600 transition text-white px-4 py-2 rounded-md shadow w-full justify-center lg:w-auto">
              <FaSignOutAlt /> Logout
            </button>
          </div>
        </div>

        {/* ---------- Main Content ---------- */}
        <div className="lg:w-[78%] w-full bg-white p-6 lg:p-10 overflow-y-auto">

          {/* Search Bar */}
          <div className="flex items-center bg-blue-100 border border-blue-300 rounded-full px-5 py-2 w-full lg:w-[80%]">
            <input
              className="bg-transparent outline-none flex-1 text-sm lg:text-base"
              placeholder="Choose your skill..."
            />
            <button className="cursor-pointer bg-blue-500 text-white px-4 py-1 rounded-full flex items-center gap-2 text-sm lg:text-base">
              <FaSearch /> Search
            </button>
          </div>

          {/* Skill Chips */}
          <p className="mt-6 font-semibold text-gray-700 text-sm lg:text-base">
            Most Frequently Selected Skills
          </p>

          <div className="flex gap-3 lg:gap-4 mt-3 flex-wrap">
            <button className="cursor-pointer px-5 py-2 bg-blue-100 hover:bg-blue-300 rounded-full shadow text-sm lg:text-base">
              Java
            </button>

            <button className="cursor-pointer px-5 py-2 bg-blue-100 hover:bg-blue-300 rounded-full shadow text-sm lg:text-base">
              JavaScript
            </button>

            <button className="cursor-pointer px-5 py-2 bg-blue-100 hover:bg-blue-300 rounded-full shadow text-sm lg:text-base">
              Python
            </button>

            <button className="cursor-pointer px-5 py-2 bg-blue-100 hover:bg-blue-300 rounded-full shadow text-sm lg:text-base">
              Node.js
            </button>
          </div>

          {/* Reviews Section */}
          <div className="mt-8 space-y-5">

            {[ "ALEX", "MARIA", "MILAN" ].map((name, i) => (
              <div key={i} className="border p-4 rounded-md shadow hover:shadow-lg transition">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-gray-300"></div>
                  <p className="font-semibold">{name}</p>
                </div>
                <p className="text-sm mt-2 text-gray-600">
                  It is a great app for improving your interview preparation.
                  I have been using it for 1.5 years. Great for all level users.
                </p>
              </div>
            ))}

          </div>
        </div>
      </div>
    </div>
  );
}
