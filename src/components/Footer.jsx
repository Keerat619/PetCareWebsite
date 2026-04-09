import React from "react";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  return (
    <footer className="bg-white mt-20 border-t">

      <div className="px-4 md:px-16 py-10">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          <div>
            <h2 className="text-[#2e6b56] font-semibold text-lg">
              The Editorial Caretaker
            </h2>

            <p className="text-gray-500 mt-3 text-sm">
              Connecting pet parents with trusted sitters.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-3">
              Quick Links
            </h3>

            <div className="flex flex-col gap-2 text-gray-500 text-sm">
              <button onClick={()=>navigate("/")}>Home</button>
              <button onClick={()=>navigate("/find-sitters")}>Find Sitters</button>
              <button onClick={()=>navigate("/become-sitter")}>Become Sitter</button>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-3">
              Contact
            </h3>

            <p className="text-gray-500 text-sm">
              support@petcare.com
            </p>

            <p className="text-gray-500 text-sm mt-2">
              +91 98765 43210
            </p>
          </div>

        </div>

        <div className="text-center text-gray-400 text-sm mt-10">
          © 2026 Pet Care Platform. All rights reserved.
        </div>

      </div>

    </footer>
  );
};

export default Footer;