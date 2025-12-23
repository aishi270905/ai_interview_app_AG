import { useNavigate } from "react-router-dom";

export default function WelcomePage() {
  const navigate = useNavigate();
    return (
    <div className="min-h-screen bg-blue-50 flex flex-col">

      {/* ---------- Navbar ---------- */}
      <header className="w-full flex justify-between items-center px-6 md:px-12 py-4 shadow bg-white">
        <h1 className="md:text-2xl font-bold text-blue-700">
          AI Interview Prep
        </h1>

        <div className="flex gap-3 md:gap-4">
          <button onClick={()=>navigate("/auth/login")} className="cursor-pointer px-4 py-2 border border-blue-600 text-blue-600 rounded-md hover:bg-blue-100 transition">
            Login
          </button>

          <button onClick={()=>navigate("/auth/signup")} className="cursor-pointer px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
            Sign Up
          </button>
        </div>
      </header>

      {/* ---------- Hero Section ---------- */}
      <main className="flex flex-col lg:flex-row items-center justify-between px-6 md:px-12 py-10 gap-10 flex-1">

        {/* Left Content */}
        <div className="lg:w-1/2 text-center lg:text-left">
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-800 leading-tight">
            Prepare Smarter.<br />
            Crack Interviews Faster.
          </h2>

          <p className="text-gray-600 mt-4 text-sm md:text-base">
            Your AI-powered companion to practice coding, master concepts,
            and achieve your dream job with confidence.
          </p>

          <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button onClick={()=>navigate("/auth/signup")} className="cursor-pointer px-6 py-3 bg-blue-600 text-white rounded-md shadow hover:bg-blue-700 transition">
              Get Started
            </button>
          </div>
        </div>

        {/* Right Creative Illustration Box */}
        <div className="lg:w-1/2 flex justify-center">
          <div className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px] bg-blue-100 rounded-2xl shadow-lg flex items-center justify-center">

            <div className="absolute -top-4 -left-4 w-24 h-24 bg-blue-400 rounded-full opacity-40 blur-lg"></div>
            <div className="absolute -bottom-6 -right-6 w-28 h-28 bg-blue-300 rounded-full opacity-40 blur-lg"></div>

            <p className="text-blue-700 font-semibold text-center px-6">
              “Train with AI, practice real interview questions,
              and stay ahead in the competition.”
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
