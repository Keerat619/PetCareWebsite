import React, { useEffect, useState } from "react";
import AdminNavbar from "../components/AdminNavbar";
import API from "../api.js";

const AdminBookings = () => {
  const [bookings, setBookings] = useState([]);

  const fetchBookings = async () => {
    const res = await fetch(`${API}/bookings`);
    const data = await res.json();
    setBookings(data);
  };

  useEffect(() => {
    fetchBookings();
  }, []);

  const markCompleted = async (id) => {
    await fetch(`${API}/bookings/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        status: "completed",
      }),
    });

    fetchBookings();
  };

  return (
    <div className="p-16 bg-[#eef3ef] min-h-screen">

      <AdminNavbar />

      <h1 className="text-2xl font-semibold mb-8">
        Admin Bookings
      </h1>

      <div className="grid gap-6">

        {bookings.map((booking) => (
          <div
            key={booking._id}
            className="bg-white p-6 rounded-2xl shadow"
          >
            <h3 className="text-xl font-semibold">
              {booking.name}
            </h3>

            <p>Date: {booking.date}</p>
            <p>Pet: {booking.petType}</p>
            <p>Address: {booking.address}</p>

            <p className="mt-2">
              Status:
              <span
                className={`ml-2 px-2 py-1 rounded text-sm ${
                  booking.status === "completed"
                    ? "bg-green-100 text-green-700"
                    : "bg-yellow-100 text-yellow-700"
                }`}
              >
                {booking.status}
              </span>
            </p>

            {booking.status !== "completed" && (
              <button
                onClick={() => markCompleted(booking._id)}
                className="mt-4 bg-[#2e6b56] text-white px-4 py-2 rounded-lg"
              >
                Mark Completed
              </button>
            )}

          </div>
        ))}

      </div>

    </div>
  );
};

export default AdminBookings;