import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../api.js";

const BecomeSitter = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    city: "",
    price: "",
    phone: "",
    experience: "",
    description: "",
    services: [],
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleService = (e) => {
    const value = e.target.value;

    setForm((prev) => ({
      ...prev,
      services: prev.services.includes(value)
        ? prev.services.filter((s) => s !== value)
        : [...prev.services, value],
    }));
  };

  const handleSubmit = async () => {
    await fetch("https://petcarewebsite.onrender.com/sitters", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    alert("Sitter added successfully");
    navigate("/");
  };

  return (
    <div className="bg-[#eef3ef] min-h-screen">

      {/* HEADER */}
      <header className="flex justify-between items-center px-16 py-6">
        <h1 className="text-[#2e6b56] font-semibold">
          The Editorial Caretaker
        </h1>
      </header>

      <div className="grid grid-cols-2 gap-16 px-16 py-10">

        {/* LEFT */}
        <div>
          <h1 className="text-[56px] font-bold text-[#2e6b56] leading-tight">
            Your journey
            <br />
            as a caretaker
            <br />
            <span className="text-gray-300 italic">
              starts here.
            </span>
          </h1>

          <p className="text-gray-500 mt-6 max-w-md">
            Join our curated community of professional sitters.
          </p>
        </div>

        {/* RIGHT FORM */}
        <div className="bg-white rounded-3xl p-10 shadow-sm">

          <h2 className="text-xl font-semibold mb-6">
            Basic Information
          </h2>

          <div className="grid grid-cols-2 gap-4 mb-6">
            <input
              name="name"
              placeholder="Full Name"
              onChange={handleChange}
              className="bg-[#eef3ef] p-3 rounded-lg"
            />

            <input
              name="city"
              placeholder="City"
              onChange={handleChange}
              className="bg-[#eef3ef] p-3 rounded-lg"
            />
          </div>

          <div className="grid grid-cols-2 gap-4 mb-6">
            <input
              name="price"
              placeholder="Price"
              onChange={handleChange}
              className="bg-[#eef3ef] p-3 rounded-lg"
            />

            <input
              name="phone"
              placeholder="Phone / WhatsApp"
              onChange={handleChange}
              className="bg-[#eef3ef] p-3 rounded-lg"
            />
          </div>

          <input
            name="experience"
            placeholder="Experience (e.g. 3 years)"
            onChange={handleChange}
            className="bg-[#eef3ef] p-3 rounded-lg w-full mb-6"
          />

          <textarea
            name="description"
            placeholder="Describe your pet care experience..."
            onChange={handleChange}
            className="bg-[#eef3ef] p-3 rounded-lg w-full mb-6"
          />

          {/* SERVICES */}
          <h3 className="font-semibold mb-3">
            Services Offered
          </h3>

          <div className="space-y-2 mb-6">

            <label className="flex gap-2">
              <input
                type="checkbox"
                value="Dog Walking"
                onChange={handleService}
              />
              Dog Walking
            </label>

            <label className="flex gap-2">
              <input
                type="checkbox"
                value="Dog Sitting"
                onChange={handleService}
              />
              Dog Sitting
            </label>

            <label className="flex gap-2">
              <input
                type="checkbox"
                value="Cat Sitting"
                onChange={handleService}
              />
              Cat Sitting
            </label>

            <label className="flex gap-2">
              <input
                type="checkbox"
                value="Pet Boarding"
                onChange={handleService}
              />
              Pet Boarding
            </label>

            <label className="flex gap-2">
              <input
                type="checkbox"
                value="Drop-in Visits"
                onChange={handleService}
              />
              Drop-in Visits
            </label>

          </div>

          <button
            onClick={handleSubmit}
            className="w-full bg-[#2e6b56] text-white py-3 rounded-full"
          >
            Become a Sitter
          </button>

        </div>

      </div>

    </div>
  );
};

export default BecomeSitter;