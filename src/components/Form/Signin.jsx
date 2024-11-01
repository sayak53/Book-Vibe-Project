import { Link } from "react-router-dom";

const Signin = () => {
    return (
        <div className="flex flex-col items-center space-y-5 w-[60%] mx-auto">
            <p className="text-4xl font-bold">Welcome Back!</p>
           <input type="text" placeholder="Email" className="input input-bordered w-full max-w-xs" /> 
           <input type="password" placeholder="Password" className="input input-bordered w-full max-w-xs" />
           <button className="btn bg-blue-600 text-white w-[40%] lg:w-[20%]"><Link to="/">Sign In</Link></button> 
        </div>
    );
};

export default Signin;