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
export default function MockTest() {
  const [openSideBar, setOpenSideBar] = useState(false);
  const navigate = useNavigate();
  return (
    <div className="h-screen bg-blue-50 md:flex md:items-center md:justify-center md:p-4 p-0 overflow-hidden">
      <div className="relative w-full h-full bg-white shadow-2xl md:rounded-xl overflow-hidden flex flex-col lg:flex-row">
        {/* ---------- Sidebar ---------- */}
        <Sidebar
          isOpen={openSideBar}
          openSideBar={() => setOpenSideBar(false)}
        />
        <div className="h-10 bg-blue-600 md:hidden flex items-center pl-2">
          <FiAlignJustify
            onClick={() => setOpenSideBar(!openSideBar)}
            className="text-[5vh] text-white"
          />
        </div>
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

              <button
                className="cursor-pointer w-full bg-white hover:bg-blue-300 transition p-3 rounded-md flex items-center gap-3 font-medium shadow"
                onClick={() => navigate("/assignmentsplanner")}
              >
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
          {/* Header */}
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-xl lg:text-2xl font-bold text-gray-800">
                MOCK TESTS
              </h1>
              <p className="text-gray-600 text-sm lg:text-base">
                Give personalised mock tests and improve in your field.
              </p>
            </div>

            {/* Search Box Right */}
            <div className="hidden md:block w-[280px] border rounded-lg shadow p-4">
              <div className="flex items-center border rounded-md px-2 overflow-hidden">
                <input
                  type="text"
                  placeholder="Search past given test.."
                  className="w-full outline-none py-1 text-sm"
                />
                <FaSearch className="text-gray-500" />
              </div>

              <h3 className="mt-3 font-semibold text-gray-800">
                Current Rank ⭐
              </h3>

              <div className="mt-2 text-sm">
                <p className="flex justify-between">
                  <span>Java Arrays</span>{" "}
                  <span className="font-bold">68/100</span>
                </p>
                <p className="flex justify-between">
                  <span>React Hooks</span>{" "}
                  <span className="font-bold">82/100</span>
                </p>
                <p className="flex justify-between">
                  <span>Python Basics</span>{" "}
                  <span className="font-bold">77/100</span>
                </p>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="flex justify-center gap-6 mt-6 flex-wrap">
            <StatusBox label="Completed" value="7" />
            <StatusBox label="Attempted" value="11" />
            <StatusBox label="Avg. Score" value="78" />
          </div>

          {/* Level Selection */}
          <div className="mt-6">
            <p className="text-gray-700 font-medium mb-2">Choose a level :</p>

            <div className="flex gap-3 flex-wrap">
              <button className="border px-5 py-2 rounded-md shadow hover:bg-blue-200">
                Easy
              </button>
              <button className="border px-5 py-2 rounded-md shadow hover:bg-blue-200">
                Medium
              </button>
              <button className="border px-5 py-2 rounded-md shadow hover:bg-blue-200">
                Hard
              </button>
            </div>
          </div>

          {/* Start New Test Bar */}
          <div className="mt-6 border rounded-xl p-4 shadow flex items-center justify-between gap-3">
            <input
              type="text"
              placeholder="Start a new test.."
              className="outline-none flex-1 px-2"
            />
            <button className="border px-5 py-2 rounded-md shadow hover:bg-blue-500 hover:text-white transition">
              Press
            </button>
          </div>

          {/* Mock Test Cards */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Card 1 */}
            <div className="border rounded-lg p-4 shadow bg-white">
              <div className="flex justify-between">
                <h3 className="font-semibold text-gray-800">
                  Frontend Interview Prep
                </h3>
                <span className="bg-red-500 text-white text-xs px-2 py-1 rounded">
                  Hard
                </span>
              </div>

              <p className="text-sm text-gray-500 mt-2">20 Qs • 60 mins</p>
              <button className="w-full mt-4 border rounded-md py-2 shadow hover:bg-blue-500 hover:text-white">
                Start Now
              </button>
            </div>

            {/* Card 2 */}
            <div className="border rounded-lg p-4 shadow bg-white">
              <div className="flex justify-between">
                <h3 className="font-semibold text-gray-800">
                  Algorithm Challenge
                </h3>
                <span className="bg-green-500 text-white text-xs px-2 py-1 rounded">
                  Easy
                </span>
              </div>

              <p className="text-sm text-gray-500 mt-2">20 Qs • 60 mins</p>
              <button className="w-full mt-4 border rounded-md py-2 shadow hover:bg-blue-500 hover:text-white">
                Start Now
              </button>
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
