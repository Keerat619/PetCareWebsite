import React from "react";
import { useNavigate } from "react-router-dom";

const AdminNavbar = () => {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("admin");
    navigate("/admin-login");
  };

  return (
    <div className="flex justify-between items-center mb-10">

      <h1
        className="text-2xl font-semibold cursor-pointer"
        onClick={() => navigate("/admin")}
      >
        Admin Panel
      </h1>

      <div className="flex gap-6">

        <button onClick={() => navigate("/admin")}>
          Dashboard
        </button>

        <button onClick={() => navigate("/admin/sitters")}>
          Sitters
        </button>

        <button onClick={() => navigate("/admin/bookings")}>
          Bookings
        </button>

        <button
          onClick={logout}
          className="bg-red-500 text-white px-3 py-1 rounded"
        >
          Logout
        </button>

      </div>

    </div>
  );
};

export default AdminNavbar;