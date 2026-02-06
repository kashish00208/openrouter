import React from 'react';

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-gray-100 z-50 ">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        
        <div className="flex items-center gap-2">
          <span className="text-xl font-semibold tracking-tight text-gray-900">
            Cofoundr
          </span>
        </div>

        <div className="flex items-center gap-4">
          <button className="bg-black text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-800 transition-all shadow-sm">
            <a
                  href="/chat"
                  className=""
                >
                 Get started
                </a>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;