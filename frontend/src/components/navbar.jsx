import { useState } from "react";
import { Menu, X } from "lucide-react"; // install lucide-react for icons: npm install lucide-react
import { Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white px-8 py-1 shadow-lg">
      <div className="flex justify-between items-center">
        {/* Logo + Website Name */}
        <div className="flex  items-center space-x-3">
          <Link to="/">
          <img
            src="/images/download.png"
            alt="logo"
            className="w-10 h-10 rounded-full"
          /> </Link>
          <h1 className="text-black text-xl font-bold text-center hover:text-blue-700">   </h1>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-7 text-black  text-lg items-center">
          <li className="hover:text-red-700 cursor-pointer">Store</li>
          <li className="hover:text-red-700 cursor-pointer">Mac</li>
          <li className="hover:text-red-700 cursor-pointer">ipad</li>
          <li className="hover:text-red-700 cursor-pointer">iphone</li>
           <li className="hover:text-red-700 cursor-pointer">watch</li>
            <li className="hover:text-red-700 cursor-pointer">Airpods</li>
             <li className="hover:text-red-700 cursor-pointer">Accessories</li>
              <li className="hover:text-red-700 cursor-pointer">Support</li>
              <Link to="/login"><button className="bg-black px-4 py-2 hover:scale-105 cursor-pointer text-white" >Log In</button></Link>

        </ul>

        {/* Mobile Hamburger Button */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <ul className="flex flex-col space-y-4 mt-4 text-black md:hidden">
          <li className="hover:text-red-700  cursor-pointer">Home</li>
          <li className="hover:text-red-700 cursor-pointer">About</li>
          <li className="hover:text-red-700 cursor-pointer">Services</li>
          <li className="hover:text-red-700 cursor-pointer">Contact</li>
        </ul>
      )}
    </nav>
  );
}

export default Navbar;
