import React from 'react'

function Navbar({isActive}) {
    const effect = "text-red-400 scale-[1.1]"
  return (
    <div className='cr p-5 h-10 bg-yellow-200 font-bold flex items-center justify-between'>
        <div className='hidden md:block text-2xl'>
            Ai <span className='text-red-600 cursor-pointer'>Interview Prep</span>
        </div>
        <div className='text-sm md:text-xl flex items-center justify-around gap-7'>
            <div className={`navbar-hover-effect ${isActive === 1 ? effect : ""}`}>Home</div>
            <div className={`navbar-hover-effect ${isActive === 2 ? effect : ""}`}>Assignments</div>
            <div className={`navbar-hover-effect ${isActive === 3 ? effect : ""}`}>Mock Test</div>
            <div className={`navbar-hover-effect ${isActive === 4 ? effect : ""}`}>Live Coding</div>
        </div>
    </div>
  )
}

export default Navbar