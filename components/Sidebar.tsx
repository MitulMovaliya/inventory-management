"use client";
import React, { useState } from "react";
import {
  LayoutDashboard,
  Package,
  Tag,
  ShoppingCart,
  ShoppingBag,
  Users,
  BarChart3,
  Settings,
  LogOut,
  Menu,
  X,
} from "lucide-react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const getNavigationForRole = (role: string) => {
  const baseNavigation = [
    {
      name: "Dashboard",
      href: "/dashboard",
      icon: LayoutDashboard,
      roles: ["OWNER", "CASHIER", "STOCK_MANAGER"],
    },
    {
      name: "Products",
      href: "/dashboard/products",
      icon: Package,
      roles: ["OWNER", "STOCK_MANAGER", "CASHIER"],
    },
    {
      name: "Categories",
      href: "/dashboard/categories",
      icon: Tag,
      roles: ["OWNER", "STOCK_MANAGER"],
    },
    {
      name: "Sales",
      href: "/dashboard/sales",
      icon: ShoppingCart,
      roles: ["OWNER", "CASHIER"],
    },
    {
      name: "POS",
      href: "/dashboard/pos",
      icon: ShoppingCart,
      roles: ["OWNER", "CASHIER"],
    },
    {
      name: "Purchases",
      href: "/dashboard/purchases",
      icon: ShoppingBag,
      roles: ["OWNER", "STOCK_MANAGER"],
    },
    {
      name: "Purchase Order",
      href: "/dashboard/purchase-order",
      icon: ShoppingBag,
      roles: ["OWNER", "STOCK_MANAGER"],
    },
    { name: "Staff", href: "/dashboard/staff", icon: Users, roles: ["OWNER"] },
    {
      name: "Analytics",
      href: "/dashboard/analytics",
      icon: BarChart3,
      roles: ["OWNER"],
    },
    {
      name: "Settings",
      href: "/dashboard/settings",
      icon: Settings,
      roles: ["OWNER", "STOCK_MANAGER", "CASHIER"],
    },
  ];

  return baseNavigation.filter((item) => item.roles.includes(role));
};

function Sidebar({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  const navigation = getNavigationForRole("OWNER");
  return (
    <div className="min-h-screen bg-primary-background">
      <div className="flex flex-col inset-y-0 w-64 fixed">
        <div className="flex flex-col flex-grow bg-primary-background border-r border-border-subtle">
          <div className="flex flex-col h-full">
            <div className="flex items-center justify-center h-16 border-b border-border-subtle">
              <h1 className="text-2xl font-bold text-accent-orange">InvMng</h1>
            </div>

            <nav className="flex-1 px-4 py-6 space-y-2">
              {navigation.map((item) => {
                const Icon = item.icon;
                const isActive = pathname === item.href;

                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`flex items-center px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                      isActive
                        ? "bg-accent-orange text-white"
                        : "text-text-secondary hover:bg-primary-elevated hover:text-text-primary"
                    }`}
                  >
                    <Icon className="mr-3 h-5 w-5" />
                    {item.name}
                  </Link>
                );
              })}
            </nav>

            <div className="p-4 border-t border-border-subtle">
              <button
                // onClick={onLogout}
                className="flex items-center w-full px-3 py-2 text-sm font-medium text-text-secondary hover:bg-primary-elevated hover:text-accent-red rounded-lg transition-colors"
              >
                <LogOut className="mr-3 h-5 w-5" />
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="ml-64 flex flex-col flex-1">
        <div className="sticky top-0 z-10 bg-primary-card shadow-sm border-b border-border-subtle">
          <div className="px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex items-center">
                <button
                  type="button"
                  className="lg:hidden p-2 rounded-md text-text-secondary hover:bg-primary-elevated"
                  // onClick={() => setSidebarOpen(true)}
                >
                  <Menu className="h-6 w-6" />
                </button>
                <h1 className="ml-4 lg:ml-0 text-lg font-semibold text-text-primary">
                  {/* {navigation.find((item: any) => item.href === pathname)?.name || 'Dashboard'} */}
                  Dashboard
                </h1>
              </div>

              <div className="flex items-center space-x-4">
                <div className="text-sm text-text-secondary">
                  {/* Welcome back, {mounted ? (user?.firstName || 'User') : 'User'}
                   */}
                  Welcome back{" "}
                </div>
                <button
                  // onClick={handleLogout}
                  className="p-2 rounded-md text-text-secondary hover:bg-primary-elevated hover:text-accent-orange transition-colors"
                >
                  <LogOut className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
        <main className="flex-1 p-4 sm:p-6 lg:p-8 text-text-secondary">
          {children}
        </main>
      </div>
    </div>
  );
}

export default Sidebar;
