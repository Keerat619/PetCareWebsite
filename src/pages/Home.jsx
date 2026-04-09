import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Home = () => {
  const navigate = useNavigate();
  const [city, setCity] = useState("");

  return (
    <div className="bg-[#f6faf6] min-h-screen text-[#1f2d27]">

      <Navbar />

      {/* HERO */}
      <section className="bg-gradient-to-b from-[#f6faf6] to-[#e8f0eb]">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10 py-24 grid md:grid-cols-2 gap-16 items-center">

          <div className="animate-fade-in">
            <h1 className="text-5xl font-bold leading-tight">
              Find trusted pet sitters
              <br />
              <span className="text-[#2e6b56] italic">
                near you
              </span>
            </h1>

            <p className="text-gray-500 mt-6 max-w-lg">
              Connect with loving pet sitters in your area.
              Book instantly and give your pets the care they deserve.
            </p>

            <div className="flex bg-white mt-8 rounded-full border shadow-sm p-2 max-w-lg hover:shadow-md transition">

              <input
                value={city}
                onChange={(e) => setCity(e.target.value)}
                placeholder="Enter your city"
                className="flex-1 px-6 py-3 outline-none rounded-full"
              />

              <button
                onClick={() => navigate(`/find-sitters?city=${city}`)}
                className="bg-[#2e6b56] text-white px-6 py-2 rounded-full hover:bg-[#245745] transition"
              >
                Search
              </button>

            </div>

            <div className="flex gap-8 mt-6 text-sm text-gray-600">
              <span>✔ Verified Sitters</span>
              <span>✔ Instant Contact</span>
              <span>✔ Safe & Trusted</span>
            </div>
          </div>

          <div className="hover:scale-105 transition duration-300">
            <img
              src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b"
              className="rounded-3xl shadow-lg"
            />
          </div>

        </div>
      </section>

      {/* SERVICES */}
      <section className="max-w-[1200px] mx-auto px-6 py-20">

        <h2 className="text-3xl font-semibold mb-12 text-center">
          Our Services
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition hover:-translate-y-1">
            <div className="text-3xl">🐕</div>
            <h3 className="font-semibold mt-4">
              Dog Walking
            </h3>
            <p className="text-gray-500 text-sm mt-2">
              Daily walks for your dog
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition hover:-translate-y-1">
            <div className="text-3xl">🏡</div>
            <h3 className="font-semibold mt-4">
              Pet Sitting
            </h3>
            <p className="text-gray-500 text-sm mt-2">
              In-home pet care
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition hover:-translate-y-1">
            <div className="text-3xl">🐈</div>
            <h3 className="font-semibold mt-4">
              Cat Boarding
            </h3>
            <p className="text-gray-500 text-sm mt-2">
              Comfortable stay for cats
            </p>
          </div>

        </div>

      </section>

      {/* HOW IT WORKS */}
      <section className="bg-[#e8f0eb] py-20">

        <div className="max-w-[1000px] mx-auto text-center">

          <h2 className="text-3xl font-semibold mb-12">
            How it works
          </h2>

          <div className="grid md:grid-cols-3 gap-10">

            <div className="hover:scale-105 transition">
              <div className="text-4xl">🔍</div>
              <p className="mt-3">
                Search sitters in your city
              </p>
            </div>

            <div className="hover:scale-105 transition">
              <div className="text-4xl">👤</div>
              <p className="mt-3">
                View sitter profile
              </p>
            </div>

            <div className="hover:scale-105 transition">
              <div className="text-4xl">📅</div>
              <p className="mt-3">
                Book instantly
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* TESTIMONIAL */}
      <section className="max-w-[900px] mx-auto py-20 text-center">

        <h2 className="text-3xl font-semibold">
          Loved by pet owners
        </h2>

        <div className="bg-white p-10 mt-8 rounded-3xl shadow-sm hover:shadow-md transition">
          <p className="text-gray-600">
            "Amazing experience. Found a sitter within minutes.
            My dog loved the service!"
          </p>

          <p className="mt-4 font-semibold">
            — Rahul Sharma
          </p>
        </div>

      </section>

      {/* CTA */}
      <section className="bg-[#2e6b56] text-white py-20">

        <div className="max-w-[900px] mx-auto text-center">

          <h2 className="text-3xl font-semibold">
            Become a pet sitter today
          </h2>

          <p className="mt-3 opacity-90">
            Start earning by caring for pets near you
          </p>

          <button
            onClick={() => navigate("/become-sitter")}
            className="mt-6 bg-white text-[#2e6b56] px-8 py-3 rounded-full hover:scale-105 transition"
          >
            Join as Sitter
          </button>

        </div>

      </section>

      <Footer />

    </div>
  );
};

export default Home;