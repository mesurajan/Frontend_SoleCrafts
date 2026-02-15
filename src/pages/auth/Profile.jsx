import React from "react";
import { useNavigate } from "react-router-dom";
import { User, Mail, Shield } from "lucide-react";

function Profile() {
  const navigate = useNavigate();

  // Get user from localStorage
  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

  // Safety check
  if (!user) {
    alert("Please login first")
    navigate("/login");
    return null;
  }

  return (
    <div className="max-w-3xl mx-auto mt-40 p-6 bg-white rounded-xl shadow">
      <h1 className="text-2xl font-bold mb-6">My Profile</h1>

      <div className="space-y-4">
        {/* Name */}
        <div className="flex items-center gap-3">
          <User size={18} className="text-gray-500" />
          <p>
            <span className="font-semibold">Name:</span> {user.name}
          </p>
        </div>

        {/* Email */}
        <div className="flex items-center gap-3">
          <Mail size={18} className="text-gray-500" />
          <p>
            <span className="font-semibold">Email:</span> {user.email}
          </p>
        </div>

        {/* Role */}
        <div className="flex items-center gap-3">
          <Shield size={18} className="text-gray-500" />
          <p>
            <span className="font-semibold">Role:</span> {user.role}
          </p>
        </div>
      </div>

      <button
        onClick={handleLogout}
        className="mt-8 bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600 transition"
      >
        Logout
      </button>
    </div>
  );
}

export default Profile;
