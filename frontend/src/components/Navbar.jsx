import React from 'react';

function Navbar() {
  return (
    <nav className="bg-[#03045E] text-white p-4 font-['Poppins'] shadow-lg">
      <div className="container mx-auto flex justify-between items-center max-w-7xl">
        <a href="/" className="text-3xl font-bold tracking-wider   text-[#8BF83C]">
          VidGrab
        </a>
        <ul className="flex items-center gap-8">
          <li>
            <a href="/" className="text-lg font-medium hover:text-[#8BF83C] transition-colors duration-300">
              Home
            </a>
          </li>
          <li>
            <a href="/how-it-works" className="text-lg font-medium hover:text-[#8BF83C] transition-colors duration-300">
              How It Works
            </a>
          </li>
          <li>
            <a href="/contact" className="bg-[#8BF83C] text-[#03045E] font-semibold px-5 py-2 rounded-full transition-transform duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#8BF83C]/30">
              Contact Us
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;