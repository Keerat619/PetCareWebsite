import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white border-t mt-20">

      <div className="max-w-[1200px] mx-auto px-6 md:px-10 py-12">

        <div className="grid md:grid-cols-3 gap-10">

          <div>
            <h3 className="font-semibold text-lg">
              LoveYourPet
            </h3>
            <p className="text-gray-500 text-sm mt-2">
              Trusted pet sitters near you. Find reliable
              caregivers for your pets.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-2">
              Links
            </h4>

            <div className="text-sm text-gray-500 space-y-1">
              <p>Find Sitters</p>
              <p>Become Sitter</p>
              <p>Contact</p>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-2">
              Contact
            </h4>

            <div className="text-sm text-gray-500">
              support@loveyourpet.com
            </div>
          </div>

        </div>

        <div className="text-center text-sm text-gray-400 mt-10">
          © 2026 LoveYourPet. All rights reserved.
        </div>

      </div>

    </footer>
  );
};

export default Footer;