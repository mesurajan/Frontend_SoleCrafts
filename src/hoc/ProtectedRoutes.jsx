import React from "react";
import { Navigate } from "react-router-dom";
import toast from "react-hot-toast";

const ProtectedRoute = ({ children, allowedRoles }) => {
  const token = localStorage.getItem("token");
  const user = JSON.parse(localStorage.getItem("user"));
  const role = user?.role;

  if (!token) {
    alert("Please Login First!");
    return <Navigate to="/login" replace />;
  }

  if (allowedRoles && !allowedRoles.includes(role)) {
    toast.error("Unauthorized access");
    return role === "admin" || role === "seller"
      ? <Navigate to="/admin" replace />
      : <Navigate to="/" replace />;
  }

  return children;
};

export default ProtectedRoute;
