import React, { useEffect, useState } from "react";
import API from "../api.js";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const fetchBookings = async () => {
      const res = await fetch(`${API}/bookings`);
      const data = await res.json();
      setBookings(data);
    };

    fetchBookings();
  }, []);

  return (
    <div className="min-h-screen bg-[#eef3ef] p-16">

      <h1 className="text-3xl font-semibold mb-8">
        All Bookings
      </h1>

      <div className="grid gap-6">

        {bookings.map((booking) => (
          <div
  key={booking._id}
  className="bg-white p-6 rounded-2xl shadow-sm"
>
  <h3 className="text-xl font-semibold">
    {booking.name}
  </h3>

  <p className="text-gray-500">
    Booking with: {booking.sitterName}
  </p>

  <p>Date: {booking.date}</p>
  <p>Pet: {booking.petType}</p>
  <p>Address: {booking.address}</p>

</div>
        ))}

      </div>

    </div>
  );
};

export default Bookings;