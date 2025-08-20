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
    <div className="flex justify-between px-20 h-16 bg-primary-background items-center border-b-2 border-primary-elevated">
      <div className="text-2xl font-bold cursor-pointer px-5 py-2 hover:text-text-secondary transition-colors duration-200">
        InvMng
      </div>
      <div className="flex items-center gap-5 text-text-secondary">
        {menuItems.map((item) => (
          <div
            key={item.title}
            className="cursor-pointer hover:text-text-primary transition-colors duration-200"
          >
            {item.title}
          </div>
        ))}

        <div className="px-5 py-2 bg-accent-orange hover:bg-accent-orange-hover rounded-md cursor-pointer text-text-primary font-semibold transition-colors duration-200 flex items-center">
          <span className="-translate-y-[1px]">Start Free Trial</span>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
