import React from "react";
import {
  Settings,
  User,
  Store,
  Bell,
  Shield,
  Database,
  Palette,
  Globe,
} from "lucide-react";

export default function SettingsPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-text-primary">Settings</h1>
          <p className="text-text-secondary">
            Manage your application preferences and configurations
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Settings Navigation */}
        <div className="lg:col-span-1">
          <div className="bg-primary-card rounded-lg border border-border-subtle p-6">
            <h3 className="text-lg font-semibold text-text-primary mb-4">
              Settings Categories
            </h3>
            <nav className="space-y-2">
              <button className="flex items-center w-full px-3 py-2 text-left text-sm font-medium rounded-lg bg-accent-orange text-white">
                <User className="mr-3 h-4 w-4" />
                Profile
              </button>
              <button className="flex items-center w-full px-3 py-2 text-left text-sm font-medium text-text-secondary hover:bg-primary-elevated hover:text-text-primary rounded-lg transition-colors">
                <Store className="mr-3 h-4 w-4" />
                Business
              </button>
              <button className="flex items-center w-full px-3 py-2 text-left text-sm font-medium text-text-secondary hover:bg-primary-elevated hover:text-text-primary rounded-lg transition-colors">
                <Bell className="mr-3 h-4 w-4" />
                Notifications
              </button>
              <button className="flex items-center w-full px-3 py-2 text-left text-sm font-medium text-text-secondary hover:bg-primary-elevated hover:text-text-primary rounded-lg transition-colors">
                <Shield className="mr-3 h-4 w-4" />
                Security
              </button>
              <button className="flex items-center w-full px-3 py-2 text-left text-sm font-medium text-text-secondary hover:bg-primary-elevated hover:text-text-primary rounded-lg transition-colors">
                <Database className="mr-3 h-4 w-4" />
                Data
              </button>
              <button className="flex items-center w-full px-3 py-2 text-left text-sm font-medium text-text-secondary hover:bg-primary-elevated hover:text-text-primary rounded-lg transition-colors">
                <Palette className="mr-3 h-4 w-4" />
                Appearance
              </button>
            </nav>
          </div>
        </div>

        {/* Settings Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Profile Settings */}
          <div className="bg-primary-card rounded-lg border border-border-subtle p-6">
            <h3 className="text-lg font-semibold text-text-primary mb-4">
              Profile Information
            </h3>
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-text-primary mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border border-border-subtle rounded-lg focus:ring-2 focus:ring-accent-orange focus:border-transparent"
                    placeholder="Enter first name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-text-primary mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border border-border-subtle rounded-lg focus:ring-2 focus:ring-accent-orange focus:border-transparent"
                    placeholder="Enter last name"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-text-primary mb-2">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-3 py-2 border border-border-subtle rounded-lg focus:ring-2 focus:ring-accent-orange focus:border-transparent"
                  placeholder="Enter email address"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-text-primary mb-2">
                  Phone
                </label>
                <input
                  type="tel"
                  className="w-full px-3 py-2 border border-border-subtle rounded-lg focus:ring-2 focus:ring-accent-orange focus:border-transparent"
                  placeholder="Enter phone number"
                />
              </div>
            </div>
            <div className="mt-6">
              <button className="px-4 py-2 bg-accent-orange text-white rounded-lg hover:bg-accent-orange/90 transition-colors">
                Update Profile
              </button>
            </div>
          </div>

          {/* Business Settings */}
          <div className="bg-primary-card rounded-lg border border-border-subtle p-6">
            <h3 className="text-lg font-semibold text-text-primary mb-4">
              Business Information
            </h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-text-primary mb-2">
                  Business Name
                </label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-border-subtle rounded-lg focus:ring-2 focus:ring-accent-orange focus:border-transparent"
                  placeholder="Enter business name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-text-primary mb-2">
                  Business Address
                </label>
                <textarea
                  rows={3}
                  className="w-full px-3 py-2 border border-border-subtle rounded-lg focus:ring-2 focus:ring-accent-orange focus:border-transparent"
                  placeholder="Enter business address"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-text-primary mb-2">
                    Tax ID
                  </label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border border-border-subtle rounded-lg focus:ring-2 focus:ring-accent-orange focus:border-transparent"
                    placeholder="Enter tax ID"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-text-primary mb-2">
                    Currency
                  </label>
                  <select className="w-full px-3 py-2 border border-border-subtle rounded-lg focus:ring-2 focus:ring-accent-orange focus:border-transparent">
                    <option value="USD">USD - US Dollar</option>
                    <option value="EUR">EUR - Euro</option>
                    <option value="GBP">GBP - British Pound</option>
                    <option value="INR">INR - Indian Rupee</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="mt-6">
              <button className="px-4 py-2 bg-accent-orange text-white rounded-lg hover:bg-accent-orange/90 transition-colors">
                Update Business Info
              </button>
            </div>
          </div>

          {/* Notification Settings */}
          <div className="bg-primary-card rounded-lg border border-border-subtle p-6">
            <h3 className="text-lg font-semibold text-text-primary mb-4">
              Notification Preferences
            </h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-text-primary">
                    Low Stock Alerts
                  </p>
                  <p className="text-sm text-text-secondary">
                    Get notified when products are running low
                  </p>
                </div>
                <input
                  type="checkbox"
                  className="h-4 w-4 text-accent-orange focus:ring-accent-orange border-gray-300 rounded"
                />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-text-primary">
                    Sales Reports
                  </p>
                  <p className="text-sm text-text-secondary">
                    Receive daily/weekly sales reports
                  </p>
                </div>
                <input
                  type="checkbox"
                  className="h-4 w-4 text-accent-orange focus:ring-accent-orange border-gray-300 rounded"
                />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-text-primary">
                    Order Updates
                  </p>
                  <p className="text-sm text-text-secondary">
                    Get updates on purchase orders
                  </p>
                </div>
                <input
                  type="checkbox"
                  className="h-4 w-4 text-accent-orange focus:ring-accent-orange border-gray-300 rounded"
                />
              </div>
            </div>
            <div className="mt-6">
              <button className="px-4 py-2 bg-accent-orange text-white rounded-lg hover:bg-accent-orange/90 transition-colors">
                Save Preferences
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
