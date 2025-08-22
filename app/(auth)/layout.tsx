import React from "react";

function Layout({ children }: {
  children: React.ReactNode
}) {
  return <div className="min-h-screen bg-gray-900 flex justify-center items-center py-12 px-4 sm:px-6 lg:px-8">{children}</div>;
}

export default Layout;
