import React from "react";
import { Link } from "react-router";

const Header = () => {
    return(
        <div className="sticky top-0  bg-gradient-to-r from-blue-950 to-blue-700 text-white shadow-lg flex justify-between">
           <h1 className="text-white text-4xl font-bold mt-3 px-6">My Not<span className="text-6xl font-semibold">e</span>Book</h1>
           
           <nav className="flex justify-evenly py-7 px-6">
             <Link to={"/"} className="text-2xl ml-5 border rounded-2xl py-1.5 px-3 bg-blue-950">Home</Link>
             <Link to={"/addnotes"} className="text-2xl ml-5 border rounded-2xl py-1.5 px-3 bg-blue-950">Addnotes</Link>
             <Link to={"/about"} className="text-2xl ml-5 border rounded-2xl py-1.5 px-3 bg-blue-950">About</Link>
             <Link to={"/login"} className="text-2xl ml-5 border rounded-2xl py-1.5 px-3 bg-blue-950">Login</Link>
             <Link to={"/signup"} className="text-2xl ml-5 border rounded-2xl py-1.5 px-3 bg-blue-950">Signup</Link>
           </nav>
        </div>
    )
}

export default Header;