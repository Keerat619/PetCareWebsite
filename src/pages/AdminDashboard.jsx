import React from "react";
import { useNavigate } from "react-router-dom";
import AdminNavbar from "../components/AdminNavbar";
const AdminDashboard = () => {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("admin");
    navigate("/admin-login");
  };

  return (
    <div className="min-h-screen bg-[#eef3ef] p-16">

      <AdminNavbar />

      <div className="flex justify-between mb-10">
        <h1 className="text-3xl font-semibold">
          Admin Dashboard
        </h1>

        <button
          onClick={logout}
          className="bg-red-500 text-white px-4 py-2 rounded-lg"
        >
          Logout
        </button>
      </div>

      <div className="grid grid-cols-3 gap-8">

        <div
          onClick={() => navigate("/admin/sitters")}
          className="bg-white p-8 rounded-2xl shadow cursor-pointer"
        >
          View Sitters
        </div>

        <div
          onClick={() => navigate("/admin/bookings")}
          className="bg-white p-8 rounded-2xl shadow cursor-pointer"
        >
          View Bookings
        </div>

        <div
          onClick={() => navigate("/admin/add-sitter")}
          className="bg-white p-8 rounded-2xl shadow cursor-pointer"
        >
          Add Sitter
        </div>

      </div>

    </div>
  );
};

export default AdminDashboard;