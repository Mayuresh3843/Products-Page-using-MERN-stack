import { useState } from "react";

import { Eye, EyeClosed } from "lucide-react";
import { Link } from "react-router-dom";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Email: ${email} | Password: ${password}`);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500 p-4">
      
        <div className="p-6 shadow-2xl rounded-2xl bg-white/90 backdrop-blur-lg w-full max-w-md">
          <h2 className="text-3xl font-bold text-center text-black mb-6">
            Welcome Back
          </h2>
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-black text-xl font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-2 rounded-xl border border-black focus:ring-2 focus:ring-indigo-500 outline-none text-black"
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label className="block text-black text-xl font-medium mb-2">
                Password
              </label>
              <input
                 type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full px-4 py-2 rounded-xl border border-black focus:ring-2 focus:ring-indigo-500 text-black outline-none"
                placeholder="Enter your password"
              />
              <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="ml-2 text-white mt-5"
          >
            {showPassword ? <Eye className="w-5 h-5" /> : <EyeClosed className="w-5 h-5" />}
           </button>
            </div>

            <button
              type="submit"
              className="w-full py-2 rounded-xl text-xl bg-indigo-600 text-white hover:bg-indigo-700 transition"
            >
              Login
            </button>
          </form>

          <p className="text-center text-gray-600 mt-5 text-xl">
            Don’t have an account?{" "}
            <Link to="/Signup"className="text-blue-700 font-medium" >
            Sign Up
            </Link>
          </p>
        </div>
      
    </div>
  );
}
