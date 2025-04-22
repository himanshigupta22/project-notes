import { Link } from "react-router";

export default function Signup(){
    return(
   <div className="min-h-screen bg-blue-100 flex justify-center items-center">

         <div className="bg-white p-8 shadow-md rounded-xl w-96">
        <h1 className="text-3xl font-bold text-center mb-6">Signup Form</h1>
        <div className="flex mb-6">
           <Link to={"/login"} className="flex-1 text-center py-2 bg-gray-100 rounded-l-full">
            Login
           </Link>
           <button className="bg-gradient-to-r from-blue-950 to-blue-600 text-white py-2 flex-1 rounded-r-2xl">Signup</button>
        </div>
        <input
           className="border rounded w-full py-2 px-4 mb-4"
           type="email"
           placeholder="Email Address"
        />
        <input
           className="border rounded w-full py-2 px-4 mb-4"
           type="password"
           placeholder="Password"
        />
        <input
           className="border rounded w-full py-2 px-4 mb-4"
           type="password"
           placeholder="Confirm Password"
        />
        
        <button className="bg-gradient-to-r from-blue-950 to-blue-600 text-white py-2 w-full rounded-lg">Signup</button>
        
      </div>
   </div>
    )
}