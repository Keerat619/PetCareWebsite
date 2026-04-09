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
      setLoading(true);

      const res = await fetch(
        `https://petcarewebsite.onrender.com/sitters?city=${city}`
      );

      const data = await res.json();

      // IMPORTANT FIX
      if (Array.isArray(data)) {
        setSitters(data);
      } else {
        setSitters([]);
      }

    } catch (err) {
      console.log(err);
      setSitters([]);
    }

    setLoading(false);
  };

  return (
    <div className="bg-[#eef3ef] min-h-screen">
      <Navbar />

      <div className="px-16 py-10">
        <h1 className="text-3xl font-semibold mb-6">
          Available sitters in {city}
        </h1>

        {loading && <p>Loading sitters...</p>}

        {!loading && sitters.length === 0 && (
          <p>No sitters found in this city</p>
        )}

        <div className="grid grid-cols-3 gap-8 mt-8">
          {sitters.map((sitter) => (
            <div
              key={sitter._id}
              onClick={() => navigate(`/sitter/${sitter._id}`)}
              className="bg-white p-5 rounded-2xl shadow cursor-pointer"
            >
              <h2 className="text-xl font-semibold">
                {sitter.name}
              </h2>

              <p className="text-gray-500">
                {sitter.city}
              </p>

              <p className="mt-2 font-semibold">
                ₹{sitter.price}
              </p>

              <button className="mt-4 bg-[#2e6b56] text-white px-4 py-2 rounded-full">
                View Profile
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FindSitters;