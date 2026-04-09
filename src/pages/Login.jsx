import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

const Login = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = () => {
    if (
      form.email === "admin@gmail.com" &&
      form.password === "admin123"
    ) {
      localStorage.setItem("admin", "true");
      navigate("/admin");
      return;
    }

    localStorage.setItem("loggedIn", "true");
    localStorage.setItem("userName", form.email);
    navigate("/");
  };

  return (
    <div className="bg-[#eef3ef] min-h-screen">

      <Navbar />

      <div className="flex items-center justify-center px-4 py-10">

        <div className="bg-white p-6 md:p-10 rounded-3xl shadow w-full max-w-md">

          <h1 className="text-2xl font-semibold mb-6">
            Login
          </h1>

          <input
            name="email"
            placeholder="Email"
            onChange={handleChange}
            className="w-full p-3 bg-[#eef3ef] rounded-lg mb-4"
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            className="w-full p-3 bg-[#eef3ef] rounded-lg mb-6"
          />

          <button
            onClick={handleLogin}
            className="w-full bg-[#2e6b56] text-white py-3 rounded-full"
          >
            Login
          </button>

        </div>

      </div>

    </div>
  );
};

export default Login;