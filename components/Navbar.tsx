import React from "react";

function Navbar() {
  const menuItems = [
    {
      title: "Features",
      link: "#features",
    },
    {
      title: "Pricing",
      link: "#pricing",
    },
    {
      title: "Reviews",
      link: "#reviews",
    },
    {
      title: "Login",
      link: "#login",
    },
  ];
  return (
    <div className="bg-gray-800/50 backdrop-blur-md items-center border-b-2 border-gray-700 sticky top-0 z-50">
      <div className="container px-20 py-3 flex justify-between items-center mx-auto">
        <div className="text-2xl font-bold cursor-pointer px-5 py-2 text-white">
          InvMng
        </div>
        <div className="hidden md:flex items-center space-x-8 text-gray-300">
          {menuItems.map((item) => (
            <div
              key={item.title}
              className={`cursor-pointer transition-colors duration-200 ${item.title === "Login" ? "hover:text-white" : "hover:text-orange-500"}`}
            >
              {item.title}
            </div>
          ))}

          <div className="px-6 py-2 bg-orange-500 hover:bg-orange-600 rounded-lg cursor-pointer text-white font-semibold transition-colors duration-200 flex">
            <span className="">Start Free Trial</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
