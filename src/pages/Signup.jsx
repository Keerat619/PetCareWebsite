import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const signup = () => {
    localStorage.setItem("user", JSON.stringify(form));
    alert("Signup successful");
    navigate("/login");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#eef3ef]">

      <div className="bg-white p-10 rounded-3xl shadow w-[400px]">

        <h2 className="text-2xl font-semibold mb-6">
          Signup
        </h2>

        <input
          name="name"
          placeholder="Name"
          onChange={handleChange}
          className="w-full p-3 bg-[#eef3ef] rounded-lg mb-4"
        />

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
          onClick={signup}
          className="w-full bg-[#2e6b56] text-white py-3 rounded-full"
        >
          Signup
        </button>

      </div>

    </div>
  );
};

export default Signup;