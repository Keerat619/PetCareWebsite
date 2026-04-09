import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Navbar from "../components/Navbar";

const Home = () => {
  const navigate = useNavigate();
  const [city, setCity] = useState("");

  return (
    <div className="bg-[#eef3ef] min-h-screen text-[#1f2d27]">

      <Navbar />

      {/* HERO */}
      <section className="px-4 md:px-16 py-10 md:py-20 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">

        {/* LEFT */}
        <div>
          <h1 className="text-3xl md:text-[52px] font-bold leading-tight">
            The art of{" "}
            <span className="text-[#2e6b56] italic">
              exceptional
            </span>
            <br />
            companion care.
          </h1>

          <p className="text-gray-500 mt-4 md:mt-6 max-w-lg">
            Beyond basic boarding. We connect discerning pet parents with curated
            caregivers who understand that every wag and purr is a story worth telling.
          </p>

          {/* SEARCH */}
          <div className="flex items-center bg-white mt-6 md:mt-8 rounded-full shadow p-2 w-full max-w-lg">
            <input
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="flex-1 px-4 md:px-6 py-3 outline-none rounded-full"
              placeholder="Enter your city"
            />

            <button
              onClick={() => navigate(`/find-sitters?city=${city}`)}
              className="bg-[#2e6b56] text-white w-10 h-10 rounded-full"
            >
              🔍
            </button>
          </div>

          <div className="flex flex-col md:flex-row gap-2 md:gap-6 mt-4 text-sm text-gray-600">
            <span>✔ Fully Vetted & Insured</span>
            <span>★ 4.9/5 Service Excellence</span>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1601758228041-f3b2795255f1"
            className="rounded-3xl shadow-lg w-full"
          />

          <div className="md:absolute md:bottom-[-30px] md:left-[-30px] bg-white rounded-2xl shadow-lg p-5 w-full md:w-72 mt-4 md:mt-0">
            <h4 className="font-semibold">
              Clara M.
            </h4>
            <p className="text-xs text-gray-500">
              Certified Canine Specialist
            </p>

            <p className="text-sm text-gray-600 mt-2">
              "Clara treated Barnaby like royalty..."
            </p>
          </div>
        </div>

      </section>

      {/* SERVICES */}
      <div className="bg-[#dce8e1] px-4 md:px-16 py-12 md:py-20">

        <h2 className="text-2xl md:text-3xl font-semibold mb-10">
          Our Services
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">

          <div className="bg-white p-6 rounded-2xl shadow-sm">
            <img
              src="https://images.unsplash.com/photo-1558788353-f76d92427f16"
              className="rounded-2xl mb-4 w-full"
            />

            <h3 className="font-semibold text-lg">
              Dog Walking
            </h3>

            <p className="text-sm text-gray-500 mt-1">
              From ₹25/hr
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm">
            <img
              src="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91"
              className="rounded-2xl mb-4 w-full"
            />

            <h3 className="font-semibold text-lg">
              House Sitting
            </h3>

            <p className="text-sm text-gray-500 mt-1">
              From ₹0/night
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm">
            <img
              src="https://images.unsplash.com/photo-1517423440428-a5a00ad493e8"
              className="rounded-2xl mb-4 w-full"
            />

            <h3 className="font-semibold text-lg">
              Drop-in Visits
            </h3>

            <p className="text-sm text-gray-500 mt-1">
              From ₹0/visit
            </p>
          </div>

        </div>

      </div>

    </div>
  );
};

export default Home;