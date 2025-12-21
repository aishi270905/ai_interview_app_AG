import {
  FaBook,
  FaClipboardList,
  FaUsers,
  FaCode,
  FaBlog,
  FaHome,
  FaSignOutAlt,
  FaTimes
} from "react-icons/fa";

export default function Sidebar({openSideBar, isOpen}) {
  return (
    <div className={`fixed top-0 left-0 h-screen w-[75%] bg-blue-200 shadow-lg z-[9999] p-5 transition transform duration-300 flex flex-col justify-between  ${isOpen == true ? "-translate-x-0":"-translate-x-full"}`}>

      {/* HEADER WITH CLOSE BUTTON */}
      <div>
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-blue-500 rounded-full"></div>
            <p className="font-semibold text-lg">USER_NAME</p>
          </div>

          {/* Close Sidebar */}
          <button className="text-2xl text-blue-700 hover:text-blue-900 transition">
            <FaTimes onClick={openSideBar} />
          </button>
        </div>

        {/* MENU BUTTONS */}
        <div className="space-y-3">
          <button className="w-full bg-white p-3 rounded-md flex items-center gap-3 font-medium shadow hover:bg-blue-300 transition">
            <FaBook /> MOCK TEST
          </button>

          <button className="w-full bg-white p-3 rounded-md flex items-center gap-3 font-medium shadow hover:bg-blue-300 transition">
            <FaClipboardList /> ASSIGNMENTS
          </button>

          <button className="w-full bg-white p-3 rounded-md flex items-center gap-3 font-medium shadow hover:bg-blue-300 transition">
            <FaUsers /> CHAT WITH FRIENDS
          </button>

          <button className="w-full bg-white p-3 rounded-md flex items-center gap-3 font-medium shadow hover:bg-blue-300 transition">
            <FaCode /> LIVE CODING
          </button>

          <button className="w-full bg-white p-3 rounded-md flex items-center gap-3 font-medium shadow hover:bg-blue-300 transition">
            <FaBlog /> YOUR BLOG
          </button>
        </div>
      </div>

      {/* FOOTER */}
      <div className="flex gap-3">
        <button className="flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-md shadow w-full justify-center hover:bg-blue-600 transition">
          <FaHome /> Home
        </button>

        <button className="flex items-center gap-2 bg-red-500 text-white px-4 py-2 rounded-md shadow w-full justify-center hover:bg-red-600 transition">
          <FaSignOutAlt /> Logout
        </button>
      </div>
    </div>
  );
}
