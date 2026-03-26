import { useState } from "react";
import bg from "../src/assets/bg.jpg";
import { Link } from "react-router";
import axios from "axios";
import toast from "react-hot-toast";
function Register() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
        const res = await axios.post('http://localhost:8000/api/user/register', user,{
        withCredentials: true
    })
    if(res.data.success){
        toast.success(res.data.message)
    }
    } catch (error) {
        console.log(error.response.data.message);
        toast.error(error.response.data.message)
    }
  }

  return (
    <div
      className="flex justify-center items-center min-h-screen bg-center bg-cover"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="relative bg-white/20 backdrop-blur-md p-10 w-100 rounded-xl border border-white/60 ml-130">
        <h2 className="text-center text-3xl mb-6 text-white font-semibold">
          Register
        </h2>
        <form onSubmit={submitHandler}>
          <input
          onChange={(e) => setUser({...user, name: e.target.value})}
            value={user.name}
            type="text"
            placeholder="Name"
            className="w-full p-3 mb-4 rounded bg-white/30 text-white placeholder-white outline-none"
          />

          <input
          onChange={(e) => setUser({...user, email: e.target.value})}
            value={user.email}
            type="email"
            placeholder="Email"
            className="w-full p-3 mb-4 rounded bg-white/30 text-white placeholder-white outline-none"
          />

          <input
          onChange={(e) => setUser({...user, password: e.target.value})}
            value={user.password}
            type="password"
            placeholder="Password"
            className="w-full p-3 mb-5 rounded bg-white/30 text-white placeholder-white outline-none"
          />

          <input
          onChange={(e) => setUser({...user, confirmPassword: e.target.value})}
            value={user.confirmPassword}
            type="password"
            placeholder="Confirm Password"
            className="w-full p-3 mb-5 rounded bg-white/30 text-white placeholder-white outline-none"
          />

          <button type="submit" className="w-full p-3 rounded bg-blue-600 hover:bg-blue-700 text-white cursor-pointer">
            Login
          </button>
        </form>
        <p className="text-white mt-4">
          Don't have an account?
          <Link to={"/login"}>
            <span className="cursor-pointer underline"> Login</span>
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Register;
