import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-[#f6faf6] flex flex-col">

      <Navbar />

      <main className="flex-1 max-w-[1200px] mx-auto w-full px-6 md:px-10 py-10">
        {children}
      </main>

      <Footer />

    </div>
  );
};

export default Layout;