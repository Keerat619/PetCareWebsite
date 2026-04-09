import React, { useEffect, useState } from "react";
import AdminNavbar from "../components/AdminNavbar";
const AdminSitters = () => {
  const [sitters, setSitters] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/sitters")
      .then(res => res.json())
      .then(data => setSitters(data));
  }, []);

  const deleteSitter = async (id) => {
    await fetch(`http://localhost:5000/sitters/${id}`, {
      method: "DELETE"
    });

    setSitters(sitters.filter(s => s._id !== id));
  };

  return (

    <div className="p-16">
        <AdminNavbar /> 
      <h1 className="text-2xl font-semibold mb-6">
        All Sitters
      </h1>

      <div className="grid gap-4">

        {sitters.map((sitter) => (
          <div
            key={sitter._id}
            className="bg-white p-6 rounded-xl shadow flex justify-between"
          >
            <div>
              <h3>{sitter.name}</h3>
              <p>{sitter.city}</p>
            </div>

            <button
              onClick={() => deleteSitter(sitter._id)}
              className="bg-red-500 text-white px-4 py-2 rounded"
            >
              Delete
            </button>

          </div>
        ))}

      </div>

    </div>
  );
};

export default AdminSitters;