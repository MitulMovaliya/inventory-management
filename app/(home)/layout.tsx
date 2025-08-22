import React from "react";
import Navbar from "../../components/Navbar";

function Layout({ children }: {
  children: React.ReactNode
}) {
  return (
    <>
      <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 min-h-screen">
        <Navbar />
        {children}
      </div>
    </>
  );
}

export default Layout;
