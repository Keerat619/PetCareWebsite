import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (
      email === "admin@gmail.com" &&
      password === "admin123"
    ) {
      localStorage.setItem("admin", "true");
      navigate("/admin");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#eef3ef]">

      <div className="bg-white p-10 rounded-3xl shadow w-[400px]">
        <h2 className="text-2xl font-semibold mb-6">
          Admin Login
        </h2>

        <input
          placeholder="Email"
          className="w-full p-3 bg-[#eef3ef] rounded-lg mb-4"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full p-3 bg-[#eef3ef] rounded-lg mb-6"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={handleLogin}
          className="w-full bg-[#2e6b56] text-white py-3 rounded-full"
        >
          Login
        </button>

      </div>

    </div>
  );
};

export default AdminLogin;