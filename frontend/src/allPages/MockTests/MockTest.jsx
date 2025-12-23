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
import { IoMdCheckboxOutline } from "react-icons/io";
import { FiAlignJustify } from "react-icons/fi";
import Sidebar from "../../Components/Sidebar";
import { useNavigate } from "react-router-dom";

export default function MockTest() {
  const [openSideBar, setOpenSideBar] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-blue-50 flex md:p-4 overflow-hidden">
      <div className="relative w-full bg-white shadow-2xl md:rounded-xl flex flex-col lg:flex-row overflow-hidden">

        {/* ---------- Sidebar ---------- */}
        <Sidebar isOpen={openSideBar} openSideBar={() => setOpenSideBar(false)} />
        <div className="h-12 bg-blue-600 md:hidden flex items-center px-3">
          <FiAlignJustify
            onClick={() => setOpenSideBar(!openSideBar)}
            className="text-[5vh] text-white"
          />
          <h1 className="text-white font-semibold ml-3 text-lg">Mock Test</h1>
        </div>
        <div className="hidden md:block lg:w-[22%] w-full bg-blue-200 p-6 flex lg:flex-col flex-row lg:justify-between justify-center gap-4">
          <div className="hidden lg:block">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 bg-blue-500 rounded-full"></div>
              <p className="font-semibold">USER_NAME</p>
            </div>

            <div className="space-y-4">
              <button className="w-full bg-white hover:bg-blue-300 transition p-3 rounded-md flex items-center gap-3 font-medium shadow">
                <FaBook /> MOCK TEST
              </button>

              <button
                className="w-full bg-white hover:bg-blue-300 transition p-3 rounded-md flex items-center gap-3 font-medium shadow"
                onClick={() => navigate("/assignmentsplanner")}
              >
                <FaClipboardList /> ASSIGNMENTS
              </button>

              <button className="w-full bg-white hover:bg-blue-300 transition p-3 rounded-md flex items-center gap-3 font-medium shadow">
                <FaUsers /> CHAT WITH FRIENDS
              </button>

              <button className="w-full bg-white hover:bg-blue-300 transition p-3 rounded-md flex items-center gap-3 font-medium shadow">
                <FaCode /> LIVE CODING
              </button>

              <button className="w-full bg-white hover:bg-blue-300 transition p-3 rounded-md flex items-center gap-3 font-medium shadow">
                <FaBlog /> YOUR BLOG
              </button>
            </div>
          </div>

          <div className="flex lg:justify-between justify-center w-full gap-4 mt-20">
            <button className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md shadow w-full justify-center lg:w-auto">
              <FaHome /> Home
            </button>

            <button className="flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md shadow w-full justify-center lg:w-auto">
              <FaSignOutAlt /> Logout
            </button>
          </div>
        </div>

        {/* ---------- MAIN CONTENT ---------- */}
        <div className="lg:w-[78%] w-full bg-white p-4 md:p-8 overflow-y-auto">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
            MOCK TESTS
          </h1>
          <p className="text-gray-600 text-sm md:text-base">
            Give personalised mock tests and improve in your field.
          </p>

          {/* Stats */}
          <div className="flex flex-wrap gap-3 mt-6">
            <StatusBox label="Completed" value="7" />
            <StatusBox label="Attempted" value="11" />
            <StatusBox label="Avg. Score" value="78" />
          </div>

          {/* Level Selection */}
          <div className="mt-6">
            <p className="text-gray-700 font-medium mb-2">Choose a level :</p>
            <div className="flex gap-3 flex-wrap">
              <LevelButton text="Easy" />
              <LevelButton text="Medium" />
              <LevelButton text="Hard" />
            </div>
          </div>

          {/* Start New Test */}
          <div className="mt-6 border rounded-xl p-2 shadow flex items-center gap-2">
            <input
              type="text"
              placeholder="Start a new test.."
              className="outline-none flex-1 px-2 text-sm"
            />
            <button className="border px-4 py-2 rounded-md shadow hover:bg-blue-500 hover:text-white transition">
              Press
            </button>
          </div>

          {/* Cards */}
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6 h-[50vh] md:h-[30vh] overflow-y-auto">
            <TestCard title="Frontend Interview Prep" level="Hard" color="red" />
            <TestCard title="Frontend Interview Prep" level="Hard" color="red" />
            <TestCard title="Frontend Interview Prep" level="Hard" color="red" />
            <TestCard title="Frontend Interview Prep" level="Hard" color="red" />
            <TestCard title="Algorithm Challenge" level="Easy" color="green" />
          </div>
        </div>

        {/* ---------- RIGHT PANEL (Desktop Only) ---------- */}
        <div className="border-l p-4 md:w-[22%] bg-white">
          <div className="border rounded-lg shadow p-4">
            <div className="flex items-center border rounded-md px-2">
              <input
                type="text"
                placeholder="Search past given test.."
                className="flex-1 outline-none py-1 text-sm"
              />
              <FaSearch className="text-gray-500" />
            </div>
          </div>

          <h3 className="mt-4 font-semibold text-gray-800">Current Rank ⭐</h3>

          <div className="mt-2 text-sm space-y-2">
            <Score label="Java" value="80/100" />
            <Score label="React" value="80/100" />
            <Score label="Python" value="80/100" />
          </div>
        </div>
      </div>
    </div>
  );
}

function StatusBox({ label, value }) {
  return (
    <div className="border rounded-lg shadow bg-white px-4 py-3 flex items-center gap-2">
      <p className="text-gray-500 text-sm">{label}:</p>
      <h2 className="text-lg font-bold text-blue-600">{value}</h2>
    </div>
  );
}

function LevelButton({ text }) {
  return (
    <button className="border px-4 py-2 text-sm rounded-md shadow hover:bg-blue-200">
      {text}
    </button>
  );
}

function TestCard({ title, level, color }) {
  return (
    <div className="border rounded-lg p-4 shadow bg-white">
      <div className="flex justify-between">
        <h3 className="font-semibold text-gray-800">{title}</h3>
        <span
          className={`text-white text-xs px-2 py-1 rounded bg-${color}-500`}
        >
          {level}
        </span>
      </div>
      <p className="text-sm text-gray-500 mt-2">20 Qs • 60 mins</p>
      <button className="cursor-pointer w-full mt-4 border rounded-md py-2 shadow hover:bg-blue-500 hover:text-white">
        Start Now
      </button>
    </div>
  );
}

function Score({ label, value }) {
  return (
    <p className="flex justify-between items-center">
      <span className="flex items-center text-xl gap-1">
        <IoMdCheckboxOutline /> {label}
      </span>
      <span className="font-bold">{value}</span>
    </p>
  );
}
