import React from "react";
import {
  ShoppingCart,
  QrCode,
  Plus,
  Minus,
  Trash2,
  CreditCard,
} from "lucide-react";

export default function POSPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-text-primary">
            Point of Sale
          </h1>
          <p className="text-text-secondary">Process sales transactions</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-accent-orange text-white rounded-lg hover:bg-accent-orange/90 transition-colors">
          <QrCode className="h-4 w-4" />
          Scan Product
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Product Search and Selection */}
        <div className="lg:col-span-2 space-y-6">
          {/* Search */}
          <div className="bg-primary-card rounded-lg border border-border-subtle p-6">
            <h3 className="text-lg font-semibold text-text-primary mb-4">
              Add Products
            </h3>
            <input
              type="text"
              placeholder="Search products or scan barcode..."
              className="w-full px-4 py-2 border border-border-subtle rounded-lg focus:ring-2 focus:ring-accent-orange focus:border-transparent"
            />
          </div>

          {/* Product Grid */}
          <div className="bg-primary-card rounded-lg border border-border-subtle p-6">
            <h3 className="text-lg font-semibold text-text-primary mb-4">
              Products
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {/* Product cards will be mapped here */}
              <div className="flex items-center justify-center h-32 border-2 border-dashed border-border-subtle rounded-lg text-text-secondary">
                <div className="text-center">
                  <ShoppingCart className="h-8 w-8 mx-auto mb-2 opacity-50" />
                  <p className="text-sm">No products</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Cart and Checkout */}
        <div className="space-y-6">
          {/* Cart */}
          <div className="bg-primary-card rounded-lg border border-border-subtle p-6">
            <h3 className="text-lg font-semibold text-text-primary mb-4">
              Cart
            </h3>

            {/* Cart Items */}
            <div className="space-y-4 mb-6">
              <div className="flex items-center justify-center h-32 text-text-secondary">
                <div className="text-center">
                  <ShoppingCart className="h-8 w-8 mx-auto mb-2 opacity-50" />
                  <p className="text-sm">Cart is empty</p>
                </div>
              </div>
            </div>

            {/* Cart Total */}
            <div className="border-t border-border-subtle pt-4 space-y-2">
              <div className="flex justify-between">
                <span className="text-text-secondary">Subtotal:</span>
                <span className="text-text-primary">$0.00</span>
              </div>
              <div className="flex justify-between">
                <span className="text-text-secondary">Tax:</span>
                <span className="text-text-primary">$0.00</span>
              </div>
              <div className="flex justify-between text-lg font-semibold">
                <span className="text-text-primary">Total:</span>
                <span className="text-text-primary">$0.00</span>
              </div>
            </div>
          </div>

          {/* Payment */}
          <div className="bg-primary-card rounded-lg border border-border-subtle p-6">
            <h3 className="text-lg font-semibold text-text-primary mb-4">
              Payment
            </h3>

            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-2">
                <button className="flex items-center justify-center gap-2 px-4 py-2 border border-border-subtle rounded-lg hover:bg-primary-elevated transition-colors">
                  <CreditCard className="h-4 w-4" />
                  Card
                </button>
                <button className="flex items-center justify-center gap-2 px-4 py-2 border border-border-subtle rounded-lg hover:bg-primary-elevated transition-colors">
                  Cash
                </button>
              </div>

              <button className="w-full py-3 bg-accent-orange text-white rounded-lg hover:bg-accent-orange/90 transition-colors font-semibold">
                Process Payment
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
