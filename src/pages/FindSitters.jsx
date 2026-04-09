import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const FindSitters = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const params = new URLSearchParams(location.search);
  const initialCity = params.get("city") || "";

  const [city, setCity] = useState(initialCity);
  const [sitters, setSitters] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchSitters = async () => {
    if (!city) return;

    setLoading(true);

    const res = await fetch(
      `https://petcarewebsite.onrender.com/sitters?city=${city}`
    );

    const data = await res.json();
    setSitters(data);
    setLoading(false);
  };

  useEffect(() => {
    if (initialCity) {
      fetchSitters();
    }
  }, []);

  return (
    <div className="bg-[#f6faf6] min-h-screen">

      <Navbar />

      <div className="max-w-[1200px] mx-auto px-6 md:px-10 py-12">

        {/* SEARCH HEADER */}
        <div className="mb-10">

          <h1 className="text-3xl font-semibold">
            Find Sitters
          </h1>

          <div className="flex mt-6 bg-white rounded-full border p-2 max-w-lg">

            <input
              value={city}
              onChange={(e) => setCity(e.target.value)}
              placeholder="Search by city"
              className="flex-1 px-6 py-3 outline-none rounded-full"
            />

            <button
              onClick={fetchSitters}
              className="bg-[#2e6b56] text-white px-6 py-2 rounded-full"
            >
              Search
            </button>

          </div>

        </div>

        {/* LOADING */}
        {loading && (
          <p className="text-gray-500">
            Loading sitters...
          </p>
        )}

        {/* NO RESULTS */}
        {!loading && sitters.length === 0 && city && (
          <div className="bg-white p-10 rounded-2xl text-center shadow-sm">
            <p className="text-gray-500">
              No sitters found in {city}
            </p>
          </div>
        )}

        {/* SITTER GRID */}
        <div className="grid md:grid-cols-3 gap-8">

          {sitters.map((sitter) => (
            <div
              key={sitter._id}
              className="bg-white rounded-2xl shadow-sm hover:shadow-md transition overflow-hidden"
            >

              <img
                src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b"
                className="w-full h-48 object-cover"
              />

              <div className="p-5">

                <h3 className="text-lg font-semibold">
                  {sitter.name}
                </h3>

                <p className="text-gray-500 text-sm">
                  {sitter.city}
                </p>

                <p className="mt-2 font-semibold text-[#2e6b56]">
                  ₹{sitter.price}
                </p>

                <div className="flex gap-3 mt-4">

                  <button
                    onClick={() =>
                      navigate(`/sitter/${sitter._id}`)
                    }
                    className="flex-1 border border-[#2e6b56] text-[#2e6b56] py-2 rounded-full"
                  >
                    View
                  </button>

                  <a
                    href={`https://wa.me/${sitter.phone}`}
                    className="flex-1 bg-[#25D366] text-white py-2 rounded-full text-center"
                  >
                    WhatsApp
                  </a>

                </div>

              </div>

            </div>
          ))}

        </div>

      </div>
<Footer />
    </div>
  );
};

export default FindSitters;