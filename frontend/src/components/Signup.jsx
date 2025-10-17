import React, { useState } from "react";
import { Eye, EyeClosed } from "lucide-react";
import { Link } from "react-router-dom";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  const [Name, setName] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const API_URL = "http://localhost:3000/api/users";

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`${API_URL}/signup`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: Name, email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        alert("✅ Signup successful! You can now log in.");
        window.location.href = "/login";
      } else {
        alert(`❌ ${data.message || "Signup failed"}`);
      }
    } catch (error) {
      console.error(error);
      alert("⚠️ Something went wrong. Try again later.");
    }
  };

  return (
    <div
      className="
        min-h-screen 
        flex 
        justify-center 
        items-center 
        bg-cover 
        bg-center 
        bg-no-repeat 
        p-5
        bg-[url('/bg.jpg')]
      "
    >
      {/* Semi-transparent glass card */}
      <div className="bg-white/80 backdrop-blur-md rounded-2xl p-6 w-full max-w-md shadow-2xl">
        <h2 className="text-center font-bold text-3xl text-gray-900 mb-6">
          Sign Up
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="text-black text-lg">
            <label className="block mb-1 font-medium">Name</label>
            <input
              type="text"
              value={Name}
              onChange={(e) => setName(e.target.value)}
              required
              placeholder="Enter your Full Name"
              className="w-full px-4 py-2 rounded-xl border border-gray-400 focus:ring-2 focus:ring-indigo-500 outline-none"
            />
          </div>

          <div className="text-black text-lg">
            <label className="block mb-1 font-medium">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Enter your Email"
              className="w-full px-4 py-2 rounded-xl border border-gray-400 focus:ring-2 focus:ring-indigo-500 outline-none"
            />
          </div>

          <div className="text-black text-lg">
            <label className="block mb-1 font-medium">Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setpassword(e.target.value)}
                required
                placeholder="Enter your password"
                className="w-full px-4 py-2 pr-10 rounded-xl border border-gray-400 focus:ring-2 focus:ring-indigo-500 outline-none"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="ml-2 mt-2 text-white"
              >
                {showPassword ? <Eye className="w-5 h-5" /> : <EyeClosed className="w-5 h-5" />}
              </button>
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-2 rounded-xl text-lg font-semibold bg-indigo-600 text-white hover:bg-indigo-700 transition"
          >
            Sign Up
          </button>

          <p className="text-center text-gray-700 text-lg">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-600 hover:underline font-medium">
              Log In
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
