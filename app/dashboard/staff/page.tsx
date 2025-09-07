import React from "react";
import {
  Users,
  Plus,
  Search,
  Filter,
  UserCheck,
  UserX,
  Shield,
} from "lucide-react";

export default function StaffPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-text-primary">
            Staff Management
          </h1>
          <p className="text-text-secondary">
            Manage your team members and their roles
          </p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-accent-orange text-white rounded-lg hover:bg-accent-orange/90 transition-colors">
          <Plus className="h-4 w-4" />
          Add Staff Member
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-primary-card rounded-lg border border-border-subtle p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-text-secondary">
                Total Staff
              </p>
              <p className="text-2xl font-bold text-text-primary">0</p>
            </div>
            <Users className="h-8 w-8 text-accent-orange" />
          </div>
        </div>

        <div className="bg-primary-card rounded-lg border border-border-subtle p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-text-secondary">Active</p>
              <p className="text-2xl font-bold text-text-primary">0</p>
            </div>
            <UserCheck className="h-8 w-8 text-green-500" />
          </div>
        </div>

        <div className="bg-primary-card rounded-lg border border-border-subtle p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-text-secondary">
                Inactive
              </p>
              <p className="text-2xl font-bold text-text-primary">0</p>
            </div>
            <UserX className="h-8 w-8 text-red-500" />
          </div>
        </div>
      </div>

      {/* Filters and Search */}
      <div className="flex items-center gap-4">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-text-secondary" />
          <input
            type="text"
            placeholder="Search staff members..."
            className="w-full pl-10 pr-4 py-2 border border-border-subtle rounded-lg focus:ring-2 focus:ring-accent-orange focus:border-transparent"
          />
        </div>
        <select className="px-4 py-2 border border-border-subtle rounded-lg focus:ring-2 focus:ring-accent-orange focus:border-transparent">
          <option value="">All Roles</option>
          <option value="OWNER">Owner</option>
          <option value="STOCK_MANAGER">Stock Manager</option>
          <option value="CASHIER">Cashier</option>
        </select>
        <button className="flex items-center gap-2 px-4 py-2 border border-border-subtle rounded-lg hover:bg-primary-elevated transition-colors">
          <Filter className="h-4 w-4" />
          Filter
        </button>
      </div>

      {/* Staff Table */}
      <div className="bg-primary-card rounded-lg border border-border-subtle p-6">
        <div className="flex items-center justify-center h-64 text-text-secondary">
          <div className="text-center">
            <Users className="h-12 w-12 mx-auto mb-4 opacity-50" />
            <p>No staff members found</p>
            <p className="text-sm">
              Add team members to start managing your staff
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
