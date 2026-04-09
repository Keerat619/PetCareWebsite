import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");

  const login = () => {
    const user = JSON.parse(localStorage.getItem("user"));

    if(
      user?.email === email &&
      user?.password === password
    ){
      localStorage.setItem("loggedIn","true");
      navigate("/");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#eef3ef]">

      <div className="bg-white p-10 rounded-3xl shadow w-[400px]">

        <h2 className="text-2xl font-semibold mb-6">
          Login
        </h2>

        <input
          placeholder="Email"
          onChange={(e)=>setEmail(e.target.value)}
          className="w-full p-3 bg-[#eef3ef] rounded-lg mb-4"
        />

        <input
          type="password"
          placeholder="Password"
          onChange={(e)=>setPassword(e.target.value)}
          className="w-full p-3 bg-[#eef3ef] rounded-lg mb-6"
        />

        <button
          onClick={login}
          className="w-full bg-[#2e6b56] text-white py-3 rounded-full"
        >
          Login
        </button>

      </div>

    </div>
  );
};

export default Login;