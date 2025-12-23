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
import { IoAddSharp } from "react-icons/io5";
import { FiAlignJustify } from "react-icons/fi";
import Sidebar from "../../Components/Sidebar";
import { useNavigate } from "react-router-dom";
export default function AssignmentsPlanner() {
    const [openSideBar, setOpenSideBar] = useState(false);
    const navigate = useNavigate();
  return (
    <div className="h-screen bg-blue-50 md:flex md:items-center md:justify-center md:p-4 p-0 overflow-hidden">
      <div className="relative w-full h-full bg-white shadow-2xl md:rounded-xl overflow-hidden flex flex-col lg:flex-row">

        {/* ---------- Sidebar ---------- */}
        <Sidebar isOpen={openSideBar} openSideBar={()=> setOpenSideBar(false)}/>
        <div className="h-10 bg-blue-600 md:hidden flex items-center pl-2"><FiAlignJustify onClick={()=>setOpenSideBar(!openSideBar)} className="text-[5vh] text-white"/></div>
        <div className="hidden md:block lg:w-[22%] w-full bg-blue-200 p-6 flex lg:flex-col flex-row lg:justify-between justify-center gap-4 lg:gap-0">
          <div className="hidden lg:block">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 bg-blue-500 rounded-full"></div>
              <p className="font-semibold">USER_NAME</p>
            </div>
            <div className="space-y-4">
              <button onClick={()=>navigate("/mocktest")} className="cursor-pointer w-full bg-white hover:bg-blue-300 transition p-3 rounded-md flex items-center gap-3 font-medium shadow">
                <FaBook /> MOCK TEST
              </button>
              <button className="cursor-pointer w-full bg-white hover:bg-blue-300 transition p-3 rounded-md flex items-center gap-3 font-medium shadow" onClick={()=>navigate("/assignmentsplanner")}>
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
        <div className="lg:w-[78%] w-full bg-white p-6 lg:p-10 overflow-hidden">
          <div className="flex justify-between items-center md:flex-row flex-col">
            <div>
              <h1 className="text-xl lg:text-2xl font-bold text-gray-800">
            ASSIGNMENTS & PLANNER
          </h1>
          <p className="text-gray-600 text-sm lg:text-base">
            manage your coding tasks and stay on top of your schedule.
          </p>
            </div>

          <button className="cursor-pointer bg-blue-500 flex items-center gap-2 hover:bg-blue-600 text-white px-6 py-2 rounded-md shadow"><IoAddSharp className="text-xl"/>Add New Skill</button>
          </div>

          {/* Completed / Pending */}
          <div className="flex justify-center gap-6 mt-6 flex-wrap">
            <StatusBox label="Completed" value="9" />
            <StatusBox label="Pending" value="4" />
          </div>

          {/* Input Card */}
          <div className="mt-6 border rounded-xl p-6 shadow bg-blue-50 flex flex-col lg:flex-row items-center justify-between gap-4">
            <div>
              <p className="text-gray-700 text-sm lg:text-base">
                Enter the section you want to improve and master your skill...
              </p>
              <p className="text-xs text-gray-500 mt-1">
                e.g. DSA - Graph | Target Company - Microsoft, Oracle, Uber
              </p>
              <input
      type="text"
      placeholder="Write here..."
      className="mt-3 border border-blue-300 rounded-md px-4 py-2 w-full outline-none focus:ring-2 ring-blue-400"
    />
            </div>

            <button className="cursor-pointer bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-md shadow">
              Start Now
            </button>
          </div>

          {/* Saved Files */}
          <h2 className="mt-6 font-semibold text-gray-700">Saved Files</h2>

          <div className="mt-2 border rounded-lg h-[180px] p-3 overflow-y-auto space-y-2">

           {/* Map here  */}
            <div className="border p-3 rounded-md shadow bg-white">
              1) Saved File Name
            </div>
            

          </div>

        </div>
      </div>
    </div>
  );
}


function StatusBox({ label, value }) {
  return (
    <div className="border rounded-lg shadow bg-white px-6 py-4 flex items-center gap-3">
      <p className="text-gray-500 text-sm">{label}</p>
      <h2 className="text-2xl font-bold text-blue-600">{value}</h2>
    </div>
  );
}
