import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
export default function Signup(){
    const[email,setEmail]=useState("")
    const[password,setpassword]=useState("")
    const handleSubmit=(e)=>{
e.preventDefault();
alert("You have successfully registered 😊 ");
    }
    return(
<div className=" min-h-screen flex justify-center items-center bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500 p-5">
   

<div className="bg-white rounded-2xl p-5 w-full max-w-md"> 
<h2 className="text-center font-bold text-3xl text-black">Sign Up</h2>
<form onSubmit={handleSubmit} className="p-5">
    <div className="text-black text-xl ">
        <label className=" block "> Email </label>
        <input type="email" 
        value={email}
        onChange={(e)=>setEmail(e.target.value)}
        required
        placeholder="Enter your Email here"
        className="w-full px-4 py-2 rounded-xl border border-black focus:ring-2 focus:ring-indigo-500 outline-none mt-2 text-black"
        />
    </div>

<div className="text-black text-xl mt-5 ">
        <label className=" block "> Password </label>
        <input type="password" 
        value={password}
        onChange={(e)=>setpassword(e.target.value)}
        required
        placeholder="Enter your password here"
        className="w-full px-4 py-2 rounded-xl border border-black focus:ring-2 focus:ring-indigo-500 outline-none text-black mt-2"
        />
    </div>

    <button className="w-full mt-6">
        Sign up
    </button>
<p className="text-black text-xl mt-5"> Already have a account ?
    <Link to="/login" className="text-blue-500 "> Log In</Link>
</p>

</form>
</div>
</div>
    );
}