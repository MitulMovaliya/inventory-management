import React from "react";
import {
  BarChart3,
  TrendingUp,
  TrendingDown,
  DollarSign,
  ShoppingCart,
  Package,
  Users,
  Calendar,
} from "lucide-react";

export default function AnalyticsPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-text-primary">Analytics</h1>
          <p className="text-text-secondary">
            Monitor your business performance and insights
          </p>
        </div>
        <div className="flex gap-2">
          <select className="px-4 py-2 border border-border-subtle rounded-lg focus:ring-2 focus:ring-accent-orange focus:border-transparent">
            <option value="7">Last 7 days</option>
            <option value="30">Last 30 days</option>
            <option value="90">Last 3 months</option>
            <option value="365">Last year</option>
          </select>
          <button className="px-4 py-2 border border-border-subtle rounded-lg hover:bg-primary-elevated transition-colors">
            Export
          </button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-primary-card rounded-lg border border-border-subtle p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-text-secondary">
                Total Revenue
              </p>
              <p className="text-2xl font-bold text-text-primary">$0</p>
              <div className="flex items-center mt-2">
                <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
                <span className="text-sm text-green-500">+0%</span>
              </div>
            </div>
            <DollarSign className="h-8 w-8 text-accent-orange" />
          </div>
        </div>

        <div className="bg-primary-card rounded-lg border border-border-subtle p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-text-secondary">
                Total Sales
              </p>
              <p className="text-2xl font-bold text-text-primary">0</p>
              <div className="flex items-center mt-2">
                <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
                <span className="text-sm text-green-500">+0%</span>
              </div>
            </div>
            <ShoppingCart className="h-8 w-8 text-accent-orange" />
          </div>
        </div>

        <div className="bg-primary-card rounded-lg border border-border-subtle p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-text-secondary">
                Products Sold
              </p>
              <p className="text-2xl font-bold text-text-primary">0</p>
              <div className="flex items-center mt-2">
                <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
                <span className="text-sm text-green-500">+0%</span>
              </div>
            </div>
            <Package className="h-8 w-8 text-accent-orange" />
          </div>
        </div>

        <div className="bg-primary-card rounded-lg border border-border-subtle p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-text-secondary">
                Avg. Order Value
              </p>
              <p className="text-2xl font-bold text-text-primary">$0</p>
              <div className="flex items-center mt-2">
                <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
                <span className="text-sm text-green-500">+0%</span>
              </div>
            </div>
            <BarChart3 className="h-8 w-8 text-accent-orange" />
          </div>
        </div>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Revenue Chart */}
        <div className="bg-primary-card rounded-lg border border-border-subtle p-6">
          <h3 className="text-lg font-semibold text-text-primary mb-4">
            Revenue Trend
          </h3>
          <div className="flex items-center justify-center h-64 text-text-secondary">
            <div className="text-center">
              <BarChart3 className="h-12 w-12 mx-auto mb-4 opacity-50" />
              <p>Revenue chart will appear here</p>
              <p className="text-sm">Data visualization coming soon</p>
            </div>
          </div>
        </div>

        {/* Sales Chart */}
        <div className="bg-primary-card rounded-lg border border-border-subtle p-6">
          <h3 className="text-lg font-semibold text-text-primary mb-4">
            Sales Overview
          </h3>
          <div className="flex items-center justify-center h-64 text-text-secondary">
            <div className="text-center">
              <ShoppingCart className="h-12 w-12 mx-auto mb-4 opacity-50" />
              <p>Sales chart will appear here</p>
              <p className="text-sm">Data visualization coming soon</p>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Analytics */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Top Products */}
        <div className="bg-primary-card rounded-lg border border-border-subtle p-6">
          <h3 className="text-lg font-semibold text-text-primary mb-4">
            Top Products
          </h3>
          <div className="flex items-center justify-center h-48 text-text-secondary">
            <div className="text-center">
              <Package className="h-8 w-8 mx-auto mb-2 opacity-50" />
              <p className="text-sm">No data available</p>
            </div>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-primary-card rounded-lg border border-border-subtle p-6">
          <h3 className="text-lg font-semibold text-text-primary mb-4">
            Recent Activity
          </h3>
          <div className="flex items-center justify-center h-48 text-text-secondary">
            <div className="text-center">
              <Calendar className="h-8 w-8 mx-auto mb-2 opacity-50" />
              <p className="text-sm">No recent activity</p>
            </div>
          </div>
        </div>

        {/* Low Stock Alert */}
        <div className="bg-primary-card rounded-lg border border-border-subtle p-6">
          <h3 className="text-lg font-semibold text-text-primary mb-4">
            Low Stock Alert
          </h3>
          <div className="flex items-center justify-center h-48 text-text-secondary">
            <div className="text-center">
              <Package className="h-8 w-8 mx-auto mb-2 opacity-50" />
              <p className="text-sm">All products in stock</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
