import React, { useState } from "react";
import API from "../api.js";

const AdminAddSitter = () => {

  const [form, setForm] = useState({
    name:"",
    city:"",
    price:"",
    phone:""
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const submit = async () => {
    await fetch(`${API}/sitters`, {
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body: JSON.stringify(form)
    });

    alert("Sitter added");
  };

  return (
    <div className="p-16">

      <h1 className="text-2xl mb-6">
        Add Sitter
      </h1>

      <div className="space-y-4 max-w-md">

        <input name="name" placeholder="Name"
        onChange={handleChange}
        className="w-full p-3 bg-gray-100"/>

        <input name="city" placeholder="City"
        onChange={handleChange}
        className="w-full p-3 bg-gray-100"/>

        <input name="price" placeholder="Price"
        onChange={handleChange}
        className="w-full p-3 bg-gray-100"/>

        <input name="phone" placeholder="Phone"
        onChange={handleChange}
        className="w-full p-3 bg-gray-100"/>

        <button
        onClick={submit}
        className="bg-green-600 text-white px-4 py-2">
          Add
        </button>

      </div>

    </div>
  );
};

export default AdminAddSitter;