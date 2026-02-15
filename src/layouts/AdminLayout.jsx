import React from 'react'
import {Outlet} from "react-router-dom";
import AdminSidebar from '../component/Admin/AdminSidebar';

function AdminLayout() {
  return (
        <div className="flex min-h-screen w-full bg-gray-100">
        {/* Sidebar */}
        <AdminSidebar />

        {/* Main Content */}
        <main className="flex-1 min-w-0 overflow-x-hidden ml-0 md:ml-72 pr-1.5 transition-all">
          <Outlet />
        </main>
      </div>
  )
}

export default AdminLayout