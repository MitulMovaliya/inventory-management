import React from "react";
import { Package, Plus, Search, Filter } from "lucide-react";

export default function ProductsPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-text-primary">Products</h1>
          <p className="text-text-secondary">Manage your inventory products</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-accent-orange text-white rounded-lg hover:bg-accent-orange/90 transition-colors">
          <Plus className="h-4 w-4" />
          Add Product
        </button>
      </div>

      {/* Filters and Search */}
      <div className="flex items-center gap-4">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-text-secondary" />
          <input
            type="text"
            placeholder="Search products..."
            className="w-full pl-10 pr-4 py-2 border border-border-subtle rounded-lg focus:ring-2 focus:ring-accent-orange focus:border-transparent"
          />
        </div>
        <button className="flex items-center gap-2 px-4 py-2 border border-border-subtle rounded-lg hover:bg-primary-elevated transition-colors">
          <Filter className="h-4 w-4" />
          Filter
        </button>
      </div>

      {/* Products Grid/Table */}
      <div className="bg-primary-card rounded-lg border border-border-subtle p-6">
        <div className="flex items-center justify-center h-64 text-text-secondary">
          <div className="text-center">
            <Package className="h-12 w-12 mx-auto mb-4 opacity-50" />
            <p>No products found</p>
            <p className="text-sm">Start by adding your first product</p>
          </div>
        </div>
      </div>
    </div>
  );
}
