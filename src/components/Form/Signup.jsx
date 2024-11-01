import { Link } from "react-router-dom";
const Signup = () => {
    return (
        <div className="flex flex-col items-center space-y-5 w-[60%] mx-auto">
            <p className="text-4xl font-bold">Register Now To Explore More Features!</p>
        <input type="text" placeholder="First Name" className="input input-bordered w-full max-w-xs" /> 
        <input type="text" placeholder="Last Name" className="input input-bordered w-full max-w-xs" /> 
        <input type="number" placeholder="Phone Number(Optional)" className="input input-bordered w-full max-w-xs" /> 
        <input type="email" placeholder="Enter Your Email" className="input input-bordered w-full max-w-xs" /> 
        <input type="password" placeholder="Set Password" className="input input-bordered w-full max-w-xs" />
        <button className="btn bg-blue-600 text-white w-[40%] lg:w-[20%]"><Link to="/">Sign Up</Link></button> 
     </div>
    );
};

export default Signup;