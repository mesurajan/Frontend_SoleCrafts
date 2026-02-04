import React from "react";
import { NavLink } from "react-router-dom";

function AdminSidebar() {
  const linkClass = ({ isActive }) =>
    `flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition
     ${
       isActive
         ? "bg-gray-800 text-white"
         : "text-gray-300 hover:bg-gray-800 hover:text-white"
     }`;

  return (
    <aside className="w-64 h-screen bg-gray-900 text-white flex flex-col">
      {/* Header */}
      <div className="px-6 py-5 border-b border-gray-800">
        <h1 className="text-xl font-bold tracking-wide">SoleCrafts</h1>
        <p className="text-xs text-gray-400">Admin Panel</p>
      </div>

      {/* Menu */}
      <nav className="flex-1 px-3 py-4 space-y-1">
        <NavLink to="/admin" className={linkClass}>
          📊 Dashboard
        </NavLink>

        <NavLink to="/admin/users" className={linkClass}>
          👤 Users
        </NavLink>

        <NavLink to="/admin/banners" className={linkClass}>
          🖼️ Banners
        </NavLink>

        <NavLink to="/admin/product" className={linkClass}>
          👟 Products
        </NavLink>

        <NavLink to="/admin/orders" className={linkClass}>
          📦 Orders
        </NavLink>
      </nav>

      {/* Footer */}
      <div className="px-4 py-4 border-t border-gray-800">
        <button className="w-full py-2 text-sm font-medium rounded-lg bg-red-600 hover:bg-red-700 transition">
          🚪 Logout
        </button>
      </div>
    </aside>
  );
}

export default AdminSidebar;
