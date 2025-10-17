import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { isLoggedIn, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <nav className="bg-white px-8 py-1 shadow-lg">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <Link to="/">
            <img
              src="/images/download.png"
              alt="logo"
              className="w-10 h-10 rounded-full"
            />
          </Link>
          
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-7 text-black text-lg items-center">
          <li className="hover:text-red-700 cursor-pointer">Home</li>
          <li className="hover:text-red-700 cursor-pointer">About</li>
          <li className="hover:text-red-700 cursor-pointer">Services</li>
          <li className="hover:text-red-700 cursor-pointer">Contact</li>
          <li className="hover:text-red-700 cursor-pointer">Support</li>

          {isLoggedIn ? (
            <button
              onClick={handleLogout}
              className="bg-red-600 px-4 py-2 hover:scale-105 text-white rounded"
            >
              Logout
            </button>
          ) : (
            <Link to="/login">
              <button className="bg-black px-4 py-2 hover:scale-105 text-white rounded">
                Log In
              </button>
            </Link>
          )}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-black focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <ul className="flex flex-col space-y-4 mt-4 text-black md:hidden">
          <li className="hover:text-red-700 cursor-pointer">Home</li>
          <li className="hover:text-red-700 cursor-pointer">About</li>
          <li className="hover:text-red-700 cursor-pointer">Services</li>
          <li className="hover:text-red-700 cursor-pointer">Contact</li>
          <li className="hover:text-red-700 cursor-pointer">Support</li>

          {isLoggedIn ? (
            <button
              onClick={handleLogout}
              className="bg-red-600 px-4 py-2 text-white rounded"
            >
              Logout
            </button>
          ) : (
            <Link to="/login">
              <button className="bg-black px-4 py-2 text-white rounded">
                Log In
              </button>
            </Link>
          )}
        </ul>
      )}
    </nav>
  );
}

export default Navbar;
