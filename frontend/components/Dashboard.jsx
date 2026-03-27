import React from "react";
import axios from "axios";
import toast from "react-hot-toast";
import {useNavigate} from 'react-router-dom'

const Dashboard = () => {
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      const res = await axios.get("http://localhost:8000/api/user/logout", {
        withCredentials: true,
      });
      if (res.data.success) {
        toast.success(res.data.message);
        navigate("/login")
      }
    } catch (error) {
      toast.error(res.response.data.message);
    }
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Student Dashboard</h1>
        <button
          onClick={handleLogout}
          className="border px-3 py-1 rounded-md bg-red-500 text-white cursor-pointer"
        >
          Logout
        </button>
      </div>

      <div className="border p-4 mb-4">
        <h2 className="font-semibold">Name</h2>
        <p>Bikash</p>
      </div>

      <div className="border p-4 mb-4">
        <h2 className="font-semibold">Courses</h2>
        <ul>
          <li>Data Structures</li>
          <li>Web Development</li>
          <li>DBMS</li>
        </ul>
      </div>

      <div className="border p-4 mb-4">
        <h2 className="font-semibold">Pending Tasks</h2>
        <ul>
          <li>Complete DSA Sheet</li>
          <li>Build MERN Project</li>
        </ul>
      </div>

      <div className="border p-4">
        <h2 className="font-semibold">Messages</h2>
        <ul>
          <li>Assignment due tomorrow</li>
          <li>New lecture uploaded</li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
