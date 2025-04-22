import {Link} from 'react-router';

export default function Login() {
  return (
  <div className="min-h-screen bg-blue-100 flex justify-center items-center">

    <div className="bg-white p-8 shadow-md rounded-xl w-96">
        <h1 className="text-3xl font-bold text-center mb-6">Login Form</h1>
        <div className="flex mb-6">
           <button className="bg-gradient-to-r from-blue-950 to-blue-600 text-white py-2 flex-1 rounded-l-2xl">Login</button>
           <Link to={"/signup"}
             className="flex-1 bg-gray-100 rounded-r-full py-2 text-center">
            Signup
           </Link>
        </div>
        <input
           className="border rounded w-full py-2 px-4 mb-4"
           type="email"
           placeholder="Email Address"
        />
        <input
           className="border rounded w-full py-2 px-4 mb-2"
           type="password"
           placeholder="Password"
        />
        <div className="text-blue-500 mb-4 text-sm cursor-pointer">Forget Password?</div>
        <button className="bg-gradient-to-r from-blue-950 to-blue-600 text-white py-2 w-full rounded-lg">Login</button>
        <p 
          className="text-md text-center mt-4"
        >Not a member? <Link to="/signup" className="text-blue-500">SingUP</Link>
        </p>
        
    </div>
    
  </div>
  );
}
