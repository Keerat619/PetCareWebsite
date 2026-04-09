import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-[#eef3ef] border-b">

      <div className="flex justify-between items-center px-4 md:px-16 py-4">

        {/* LOGO */}
        <h1
          onClick={() => navigate("/")}
          className="text-[#2e6b56] font-semibold cursor-pointer"
        >
          The Editorial Caretaker
        </h1>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex gap-10">

          <button onClick={() => navigate("/find-sitters")}>
            Find Sitters
          </button>

          <button onClick={() => navigate("/become-sitter")}>
            Become Sitter
          </button>

          <button onClick={() => navigate("/admin")}>
            Admin
          </button>

        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>

      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden px-4 pb-4 flex flex-col gap-3 bg-[#eef3ef]">

          <button onClick={() => navigate("/find-sitters")}>
            Find Sitters
          </button>

          <button onClick={() => navigate("/become-sitter")}>
            Become Sitter
          </button>

          <button onClick={() => navigate("/admin")}>
            Admin
          </button>

        </div>
      )}

    </header>
  );
};

export default Navbar;