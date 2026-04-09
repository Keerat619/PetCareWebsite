import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
const SitterProfile = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [sitter, setSitter] = useState(null);
  const [loading, setLoading] = useState(true);

  const [booking, setBooking] = useState({
    name: "",
    date: "",
    address: "",
    petType: "",
  });

  const handleChange = (e) => {
    setBooking({
      ...booking,
      [e.target.name]: e.target.value,
    });
  };

 const handleBooking = async () => {

  const loggedIn = localStorage.getItem("loggedIn");

  if (!loggedIn) {
    alert("Please login to book sitter");
    navigate("/login");
    return;
  }

  if (
    !booking.date ||
    !booking.address ||
    !booking.petType
  ) {
    alert("Please fill all fields");
    return;
  }

  const userName = localStorage.getItem("userName");

  await fetch("https://petcarewebsite.onrender.com/bookings", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      ...booking,
      name: userName,
      sitterId: sitter._id,
    }),
  });

  alert("Booking successful!");

  setBooking({
    name: userName,
    date: "",
    address: "",
    petType: "",
  });
};

  useEffect(() => {
    const fetchSitter = async () => {
      try {
        const res = await fetch(
          `https://petcarewebsite.onrender.com/sitters/${id}`
        );

        const data = await res.json();
        setSitter(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchSitter();
  }, [id]);

  if (loading) {
    return <div className="p-20">Loading sitter...</div>;
  }

  if (!sitter) {
    return <div className="p-20">Sitter not found</div>;
  }

  return (
    <div className="bg-[#eef3ef] min-h-screen">

      <Navbar />

      {/* HERO */}
      <div className="grid md:grid-cols-2 gap-12 px-6 md:px-16 mt-10">

        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b"
            className="rounded-3xl shadow w-full"
          />

          <div className="absolute bottom-[-20px] left-10 bg-[#2e6b56] text-white px-6 py-3 rounded-xl">
            Elite Caretaker
          </div>
        </div>

        <div>
          <h1 className="text-4xl font-semibold">
            {sitter.name}
          </h1>

          <p className="mt-2 text-gray-500">
            {sitter.experience || "Experienced Pet Sitter"}
          </p>

          <div className="flex gap-10 mt-6 text-sm">
            <div>
              <p className="text-gray-400">Location</p>
              <p className="font-semibold">{sitter.city}</p>
            </div>

            <div>
              <p className="text-gray-400">Price</p>
              <p className="font-semibold">
                ₹{sitter.price}
              </p>
            </div>

            <div>
              <p className="text-gray-400">Rating</p>
              <p className="font-semibold">5.0 ★</p>
            </div>
          </div>
        </div>

      </div>

      {/* CONTENT */}
      <div className="grid md:grid-cols-[1fr_380px] gap-10 px-6 md:px-16 mt-16">

        {/* LEFT */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">
            About Me
          </h2>

          <p className="text-gray-600 leading-relaxed">
            {sitter.description || "Loving and reliable pet sitter."}
          </p>

          <p className="mt-4">
            <span className="font-semibold">Experience:</span>{" "}
            {sitter.experience || "2+ years"}
          </p>

          <div className="mt-4">
            <p className="font-semibold mb-2">
              Services Offered
            </p>

            <div className="flex flex-wrap gap-2">
              {sitter.services?.map((service, index) => (
                <span
                  key={index}
                  className="bg-[#eef3ef] px-3 py-1 rounded-full text-sm"
                >
                  {service}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div>

          <div className="bg-white rounded-3xl overflow-hidden shadow">

            <div className="bg-[#2e6b56] text-white p-6">
              <h3 className="text-xl font-semibold">
                Services & Rates
              </h3>
            </div>

            <div className="p-6 space-y-4">

              <div className="flex justify-between">
                <span>Pet Sitting</span>
                <span>₹{sitter.price}</span>
              </div>

              <a
                href={`https://wa.me/${sitter.phone}`}
                className="w-full block text-center bg-[#25D366] text-white py-3 rounded-full"
              >
                Contact via WhatsApp
              </a>

              <a
                href={`tel:${sitter.phone}`}
                className="w-full block text-center bg-[#e8f0eb] py-3 rounded-full"
              >
                Call {sitter.name}
              </a>

            </div>

          </div>

          {/* BOOKING */}
          <div className="bg-white rounded-3xl p-6 shadow mt-6">
            <h3 className="text-xl font-semibold mb-4">
              Book this sitter
            </h3>

            <input
              name="name"
              value={booking.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="w-full p-3 bg-[#eef3ef] rounded-lg mb-3"
            />

            <input
              type="date"
              name="date"
              value={booking.date}
              onChange={handleChange}
              className="w-full p-3 bg-[#eef3ef] rounded-lg mb-3"
            />

            <input
              name="address"
              value={booking.address}
              onChange={handleChange}
              placeholder="Address"
              className="w-full p-3 bg-[#eef3ef] rounded-lg mb-3"
            />

            <input
              name="petType"
              value={booking.petType}
              onChange={handleChange}
              placeholder="Pet Type"
              className="w-full p-3 bg-[#eef3ef] rounded-lg mb-4"
            />

            <button
              onClick={handleBooking}
              className="w-full bg-[#2e6b56] text-white py-3 rounded-full"
            >
              Book Now
            </button>
          </div>

        </div>

      </div>

    </div>
  );
};

export default SitterProfile;