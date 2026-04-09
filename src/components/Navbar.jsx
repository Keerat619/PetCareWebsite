import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const loggedIn = localStorage.getItem("loggedIn");

  const logout = () => {
    localStorage.removeItem("loggedIn");
    navigate("/");
  };

  return (
    <header className="sticky top-0 z-50 bg-white border-b">

      <div className="max-w-[1200px] mx-auto px-6 md:px-10 py-5 flex justify-between items-center">

        <h1
          onClick={() => navigate("/")}
          className="text-[#2e6b56] text-xl font-semibold cursor-pointer"
        >
          LoveYourPet
        </h1>

        <div className="flex gap-8 items-center text-sm">

          <button onClick={() => navigate("/find-sitters")}>
            Find Sitters
          </button>

          <button onClick={() => navigate("/become-sitter")}>
            Become Sitter
          </button>

          {!loggedIn ? (
            <>
              <button
                onClick={() => navigate("/login")}
                className="text-[#2e6b56]"
              >
                Login
              </button>

              <button
                onClick={() => navigate("/signup")}
                className="bg-[#2e6b56] text-white px-4 py-2 rounded-lg"
              >
                Signup
              </button>
            </>
          ) : (
            <button
              onClick={logout}
              className="bg-red-500 text-white px-4 py-2 rounded-lg"
            >
              Logout
            </button>
          )}

        </div>

      </div>

    </header>
  );
};

export default Navbar;