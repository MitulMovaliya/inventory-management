import React from "react";
import { Tag, Plus, Search, Edit, Trash2 } from "lucide-react";

export default function CategoriesPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-text-primary">Categories</h1>
          <p className="text-text-secondary">
            Organize your products into categories
          </p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-accent-orange text-white rounded-lg hover:bg-accent-orange/90 transition-colors">
          <Plus className="h-4 w-4" />
          Add Category
        </button>
      </div>

      {/* Search */}
      <div className="flex items-center gap-4">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-text-secondary" />
          <input
            type="text"
            placeholder="Search categories..."
            className="w-full pl-10 pr-4 py-2 border border-border-subtle rounded-lg focus:ring-2 focus:ring-accent-orange focus:border-transparent"
          />
        </div>
      </div>

      {/* Categories List */}
      <div className="bg-primary-card rounded-lg border border-border-subtle">
        <div className="p-6">
          <div className="flex items-center justify-center h-64 text-text-secondary">
            <div className="text-center">
              <Tag className="h-12 w-12 mx-auto mb-4 opacity-50" />
              <p>No categories found</p>
              <p className="text-sm">
                Create categories to organize your products
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
