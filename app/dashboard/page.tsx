"use client";

import React, { useEffect, useState } from "react";
import {
  TrendingUp,
  TrendingDown,
  Package,
  ShoppingCart,
  AlertTriangle,
  DollarSign,
} from "lucide-react";
import { DashboardStats } from "@/types";
import { Card } from "@/components/ui/card";

function page() {
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState<DashboardStats | null>(null);
  const [user, setUser] = useState<any>(null);
  function doneLoading() {
    setLoading(false);
  }

  useEffect(() => {
    setStats({
      totalSales: 45678,
      totalProducts: 234,
      lowStockItems: 12,
      todaySales: 2456,
      monthlySales: 89234,
      recentSales: [],
      topProducts: [],
      lowStockProducts: [],
    });
    setUser({
      id: "user-123",
      name: "John Doe",
      email: "john.doe@example.com",
      role: "OWNER",
    });

    doneLoading();
  }, []);

  if (loading)
    return (
      <div className="animate-pulse space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="h-32 bg-primary-card rounded-xl"></div>
          ))}
        </div>
      </div>
    );

  return (
    <div className="space-y-6">
      <div>
        <span className="text-text-primary text-3xl font-bold">Dashboard</span>
        <p className="text-text-secondary mt-2">
          Welcome to your inventory management dashboard. Here's what's
          happening with your business today.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatsCard
          title="Total Sales"
          value={`$${stats?.totalSales.toLocaleString()}`}
          change={+12.5}
          changeType="positive"
          icon={DollarSign}
          color="green"
        />
        <StatsCard
          title="Total Products"
          value={stats?.totalProducts.toString() || "0"}
          change={+5}
          changeType="positive"
          icon={Package}
          color="blue"
        />
        <StatsCard
          title="Today's Sales"
          value={`$${stats?.todaySales.toLocaleString()}`}
          change={-2.3}
          changeType="negative"
          icon={ShoppingCart}
          color="orange"
        />
        <StatsCard
          title="Low Stock Items"
          value={stats?.lowStockItems.toString() || "0"}
          change={+3}
          changeType="warning"
          icon={AlertTriangle}
          color="red"
        />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <h3 className="text-lg font-semibold text-text-primary mb-4">
            Quick Actions
          </h3>
          <div className="grid grid-cols-2 gap-4">
            {/* Show different actions based on user role */}
            {(user?.role === "OWNER" || user?.role === "STOCK_MANAGER") && (
              <QuickActionButton
                title="Add Product"
                description="Add new inventory"
                href="/dashboard/products"
                icon={Package}
              />
            )}
            {(user?.role === "OWNER" || user?.role === "CASHIER") && (
              <QuickActionButton
                title="New Sale"
                description="Process a sale"
                href="/dashboard/pos"
                icon={ShoppingCart}
              />
            )}
            {(user?.role === "OWNER" || user?.role === "STOCK_MANAGER") && (
              <QuickActionButton
                title="Add Purchase"
                description="Record inventory purchase"
                href="/dashboard/purchase-order"
                icon={ShoppingCart}
              />
            )}
            {user?.role === "OWNER" && (
              <QuickActionButton
                title="View Analytics"
                description="Business insights"
                href="/dashboard/analytics"
                icon={TrendingUp}
              />
            )}
          </div>
        </Card>

        <Card>
          <h3 className="text-lg font-semibold text-text-primary mb-4">
            Recent Activity
          </h3>
          <div className="space-y-3">
            {[
              {
                action: "Sale completed",
                item: "Product #1234",
                time: "2 minutes ago",
                type: "sale",
              },
              {
                action: "Low stock alert",
                item: "Product #5678",
                time: "15 minutes ago",
                type: "alert",
              },
              {
                action: "Product added",
                item: "New Product",
                time: "1 hour ago",
                type: "product",
              },
              {
                action: "Purchase recorded",
                item: "Supplier ABC",
                time: "2 hours ago",
                type: "purchase",
              },
            ].map((activity, index) => (
              <div
                key={index}
                className="flex items-center justify-between py-2 border-b border-border-subtle last:border-b-0"
              >
                <div>
                  <p className="text-sm text-text-primary">{activity.action}</p>
                  <p className="text-xs text-text-muted">{activity.item}</p>
                </div>
                <span className="text-xs text-text-secondary">
                  {activity.time}
                </span>
              </div>
            ))}
          </div>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <h3 className="text-lg font-semibold text-text-primary mb-4">
            Sales Trend
          </h3>
          <div className="h-64 flex items-center justify-center bg-primary-elevated rounded-lg">
            <p className="text-text-secondary">
              Chart placeholder - Sales trend visualization
            </p>
          </div>
        </Card>

        <Card>
          <h3 className="text-lg font-semibold text-text-primary mb-4">
            Top Products
          </h3>
          <div className="h-64 flex items-center justify-center bg-primary-elevated rounded-lg">
            <p className="text-text-secondary">
              Chart placeholder - Top products visualization
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
}

interface StatsCardProps {
  title: string;
  value: string;
  change: number;
  changeType: "positive" | "negative" | "warning";
  icon: React.ComponentType<any>;
  color: "green" | "blue" | "orange" | "red";
}

function StatsCard({
  title,
  value,
  change,
  changeType,
  icon: Icon,
  color,
}: StatsCardProps) {
  const colorClasses = {
    green: "bg-accent-green text-white",
    blue: "bg-accent-blue text-white",
    orange: "bg-accent-orange text-white",
    red: "bg-accent-red text-white",
  };

  const changeClasses = {
    positive: "text-accent-green-success",
    negative: "text-accent-red-danger",
    warning: "text-status-pending",
  };

  return (
    <Card>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-text-secondary">{title}</p>
          <p className="text-2xl font-bold text-text-primary">{value}</p>
          <div className="flex items-center mt-2">
            {changeType === "positive" ? (
              <TrendingUp className="h-4 w-4 mr-1" />
            ) : changeType === "negative" ? (
              <TrendingDown className="h-4 w-4 mr-1" />
            ) : (
              <AlertTriangle className="h-4 w-4 mr-1" />
            )}
            <span
              className={`text-sm font-medium ${changeClasses[changeType]}`}
            >
              {change > 0 ? "+" : ""}
              {change}%
            </span>
          </div>
        </div>
        <div className={`p-3 rounded-full ${colorClasses[color]}`}>
          <Icon className="h-6 w-6" />
        </div>
      </div>
    </Card>
  );
}

interface QuickActionButtonProps {
  title: string;
  description: string;
  href: string;
  icon: React.ComponentType<any>;
}

function QuickActionButton({
  title,
  description,
  href,
  icon: Icon,
}: QuickActionButtonProps) {
  return (
    <a
      href={href}
      className="block p-4 bg-primary-elevated rounded-lg hover:bg-primary-card transition-colors group"
    >
      <div className="flex items-center mb-2">
        <Icon className="h-5 w-5 text-accent-orange mr-2" />
        <h4 className="font-medium text-text-primary group-hover:text-accent-orange transition-colors">
          {title}
        </h4>
      </div>
      <p className="text-sm text-text-secondary">{description}</p>
    </a>
  );
}

export default page;
