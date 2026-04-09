import React, { useEffect, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

const FindSitters = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const city = searchParams.get("city") || "";

  const [sitters, setSitters] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchSitters();
  }, [city]);

  const fetchSitters = async () => {
    try {
      const res = await fetch(
        `https://petcarewebsite.onrender.com/sitters?city=${city}`
      );

      const data = await res.json();

      setSitters(Array.isArray(data) ? data : []);
      setLoading(false);

    } catch (err) {
      setSitters([]);
      setLoading(false);
    }
  };

  return (
    <div className="bg-[#eef3ef] min-h-screen">
      <Navbar />

      <div className="px-4 md:px-16 py-8">

        <h1 className="text-2xl md:text-3xl font-semibold mb-6">
          Available sitters in {city}
        </h1>

        {loading && (
          <p>Loading sitters...</p>
        )}

        {!loading && sitters.length === 0 && (
          <p>No sitters found in this city</p>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          {sitters.map((sitter) => (
            <div
              key={sitter._id}
              onClick={() => navigate(`/sitter/${sitter._id}`)}
              className="bg-white p-5 rounded-2xl shadow cursor-pointer hover:shadow-md transition"
            >
              <h2 className="text-xl font-semibold">
                {sitter.name}
              </h2>

              <p className="text-gray-500 mt-1">
                {sitter.city}
              </p>

              <p className="mt-2 font-semibold">
                ₹{sitter.price}
              </p>

              <div className="mt-4">
                <button className="bg-[#2e6b56] text-white px-4 py-2 rounded-full w-full">
                  View Profile
                </button>
              </div>
            </div>
          ))}

        </div>

      </div>
    </div>
  );
};

export default FindSitters;