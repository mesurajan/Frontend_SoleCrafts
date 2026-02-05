import React, { useState, useEffect } from "react";
import axios from "axios";

const BASE_URL = import.meta.env.VITE_BACKEND_URL || "http://localhost:5174";

function AdminUserDetails() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true);

        const token = localStorage.getItem("token");
        if (!token) {
          throw new Error("No token found. Please login again.");
        }

        const response = await axios.get(`${BASE_URL}/api/users`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        // IMPORTANT: backend should return array
        setUsers(response.data);
      } catch (err) {
        console.error("Failed to load users:", err.message);
        setUsers([]); // fallback
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8 text-center font-semibold">
        Loading users...
      </div>
    );
  }

  if (!users || users.length === 0) {
    return (
      <div className="container mx-auto px-4 py-8 text-center font-semibold">
        No users found.
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">User Details</h1>

      <div className="overflow-x-auto">
        <table className="min-w-full border rounded-lg">
          <thead className="bg-gray-100">
            <tr>
              <th className="py-2 px-4 border">Name</th>
              <th className="py-2 px-4 border">Email</th>
              <th className="py-2 px-4 border">Phone</th>
              <th className="py-2 px-4 border">Address</th>
              <th className="py-2 px-4 border">Age</th>
              <th className="py-2 px-4 border">Role</th>
              <th className="py-2 px-4 border">Created At</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user._id} className="hover:bg-gray-50">
                <td className="py-2 px-4 border">{user.name}</td>
                <td className="py-2 px-4 border">{user.email}</td>
                <td className="py-2 px-4 border">{user.phone}</td>
                <td className="py-2 px-4 border">{user.address}</td>
                <td className="py-2 px-4 border">{user.age}</td>
                <td className="py-2 px-4 border capitalize">{user.role}</td>
                <td className="py-2 px-4 border">
                  {new Date(user.createdAt).toLocaleDateString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AdminUserDetails;
