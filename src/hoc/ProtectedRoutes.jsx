// src/hoc/ProtectedRoutes.jsx
import React from "react";
import { Navigate } from "react-router-dom";
import toast from "react-hot-toast";

const ProtectedRoute = ({ children, allowedRoles }) => {
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");

  if (!token) {
    alert("Please Login First !!");
    return <Navigate to="/login" replace />;
  }

  // Role-based protection (optional)
  if (allowedRoles && !allowedRoles.includes(role)) {
    toast.error("Unauthorized access");

    return role === "admin"
      ? <Navigate to="/admin" replace />
      : <Navigate to="/" replace />;
  }

  return children;
};

export default ProtectedRoute;
