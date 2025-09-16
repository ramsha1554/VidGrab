import React from 'react';

function Footer() {
  return (
    <footer className="bg-[#03045E] text-gray-300 pt-12  pb-6 font-['Poppins']">
      <div className="container mx-auto max-w-5xl grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
      
        <div>
          <h3 className="text-[#8BF83C]   text-2xl font-bold mb-4">VidGrab</h3>
          <p className="text-gray-400">The simplest way to download your favorite Instagram videos.</p>
        </div>
 
        <div>
          <h3 className="text-[#8BF83C]   text-lg font-semibold mb-4">Quick Links</h3>
          <ul>
            <li className="mb-2"><a href="/" className="hover:text-[#8BF83C] transition-colors duration-300">Home</a></li>
            <li className="mb-2"><a href="/privacy-policy" className="hover:text-[#8BF83C] transition-colors duration-300">Privacy Policy</a></li>
            <li><a href="/terms-of-service" className="hover:text-[#8BF83C] transition-colors duration-300">Terms of Service</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4
           text-[#8BF83C]  ">Follow Us</h3>
           <ul>
            <li className="mb-2"><a href="#" className="hover:text-[#8BF83C] transition-colors duration-300">Twitter</a></li>
            <li className="mb-2"><a href="#" className="hover:text-[#8BF83C] transition-colors duration-300">Instagram</a></li>
            <li><a href="#" className="hover:text-[#8BF83C] transition-colors duration-300">Facebook</a></li>
          </ul>
        </div>
      </div>
      <div className="text-center text-gray-500 mt-10 pt-6 border-t border-gray-700">
        <p>&copy; 2025 VidGrab. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;