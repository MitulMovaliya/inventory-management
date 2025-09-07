import React from "react";
import {
  ShoppingBag,
  Plus,
  Search,
  Filter,
  TrendingUp,
  Calendar,
  DollarSign,
} from "lucide-react";

export default function PurchasesPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-text-primary">Purchases</h1>
          <p className="text-text-secondary">
            Track and manage your purchase transactions
          </p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-accent-orange text-white rounded-lg hover:bg-accent-orange/90 transition-colors">
          <Plus className="h-4 w-4" />
          Record Purchase
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-primary-card rounded-lg border border-border-subtle p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-text-secondary">
                Total Purchases
              </p>
              <p className="text-2xl font-bold text-text-primary">$0</p>
            </div>
            <DollarSign className="h-8 w-8 text-accent-orange" />
          </div>
        </div>

        <div className="bg-primary-card rounded-lg border border-border-subtle p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-text-secondary">
                This Month
              </p>
              <p className="text-2xl font-bold text-text-primary">$0</p>
            </div>
            <Calendar className="h-8 w-8 text-accent-orange" />
          </div>
        </div>

        <div className="bg-primary-card rounded-lg border border-border-subtle p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-text-secondary">Orders</p>
              <p className="text-2xl font-bold text-text-primary">0</p>
            </div>
            <ShoppingBag className="h-8 w-8 text-accent-orange" />
          </div>
        </div>
      </div>

      {/* Filters and Search */}
      <div className="flex items-center gap-4">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-text-secondary" />
          <input
            type="text"
            placeholder="Search purchases..."
            className="w-full pl-10 pr-4 py-2 border border-border-subtle rounded-lg focus:ring-2 focus:ring-accent-orange focus:border-transparent"
          />
        </div>
        <button className="flex items-center gap-2 px-4 py-2 border border-border-subtle rounded-lg hover:bg-primary-elevated transition-colors">
          <Filter className="h-4 w-4" />
          Filter
        </button>
      </div>

      {/* Purchases Table */}
      <div className="bg-primary-card rounded-lg border border-border-subtle p-6">
        <div className="flex items-center justify-center h-64 text-text-secondary">
          <div className="text-center">
            <ShoppingBag className="h-12 w-12 mx-auto mb-4 opacity-50" />
            <p>No purchases found</p>
            <p className="text-sm">Purchase records will appear here</p>
          </div>
        </div>
      </div>
    </div>
  );
}
