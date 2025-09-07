// TypeScript type definitions

export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  role: UserRole;
  shopId?: string;
  shop?: Shop;
  createdAt: Date;
  updatedAt: Date;
}

export interface Shop {
  id: string;
  name: string;
  address?: string;
  phone?: string;
  email?: string;
  ownerId: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Category {
  id: string;
  name: string;
  description?: string;
  shopId: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Product {
  id: string;
  name: string;
  description?: string;
  sku?: string;
  price: number;
  costPrice?: number;
  stock: number;
  minStock: number;
  categoryId: string;
  category?: Category;
  shopId: string;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface Sale {
  id: string;
  saleNumber: string;
  totalAmount: number;
  discount: number;
  tax: number;
  finalAmount: number;
  paymentMethod: string;
  status: SaleStatus;
  customerId?: string;
  customerName?: string;
  customerPhone?: string;
  userId: string;
  user?: User;
  shopId: string;
  createdAt: Date;
  updatedAt: Date;
  saleItems?: SaleItem[];
}

export interface SaleItem {
  id: string;
  quantity: number;
  unitPrice: number;
  totalPrice: number;
  saleId: string;
  productId: string;
  product?: Product;
}

export interface Purchase {
  id: string;
  purchaseNumber: string;
  totalAmount: number;
  discount: number;
  tax: number;
  finalAmount: number;
  supplierId?: string;
  supplierName?: string;
  supplierPhone?: string;
  status: PurchaseStatus;
  userId: string;
  user?: User;
  shopId: string;
  createdAt: Date;
  updatedAt: Date;
  purchaseItems?: PurchaseItem[];
}

export interface PurchaseItem {
  id: string;
  quantity: number;
  unitPrice: number;
  totalPrice: number;
  purchaseId: string;
  productId: string;
  product?: Product;
}

export interface DashboardStats {
  totalSales: number;
  totalProducts: number;
  lowStockItems: number;
  todaySales: number;
  monthlySales: number;
  recentSales: Sale[];
  topProducts: Array<{
    product: Product;
    totalSold: number;
    revenue: number;
  }>;
  lowStockProducts: Product[];
}

export interface SalesReport {
  period: string;
  totalSales: number;
  totalRevenue: number;
  averageOrderValue: number;
  salesByDay: Array<{
    date: string;
    sales: number;
    revenue: number;
  }>;
  topProducts: Array<{
    product: Product;
    quantity: number;
    revenue: number;
  }>;
}

export interface InventoryAlert {
  id: string;
  type: "LOW_STOCK" | "OUT_OF_STOCK";
  product: Product;
  currentStock: number;
  minStock: number;
  createdAt: Date;
}

export enum UserRole {
  OWNER = "OWNER",
  CASHIER = "CASHIER",
  STOCK_MANAGER = "STOCK_MANAGER",
}

export enum SaleStatus {
  PENDING = "PENDING",
  COMPLETED = "COMPLETED",
  CANCELLED = "CANCELLED",
  REFUNDED = "REFUNDED",
}

export enum PurchaseStatus {
  PENDING = "PENDING",
  COMPLETED = "COMPLETED",
  CANCELLED = "CANCELLED",
}

export interface AuthUser {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  role: UserRole;
  shopId?: string;
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface SignupRequest {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  shopName: string;
  shopAddress?: string;
  shopPhone?: string;
  shopEmail?: string;
}

export interface CreateStaffRequest {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  role: UserRole;
}

export interface CreateProductRequest {
  name: string;
  description?: string;
  sku?: string;
  price: number;
  costPrice?: number;
  stock: number;
  minStock: number;
  categoryId: string;
}

export interface CreateSaleRequest {
  customerId?: string;
  customerName?: string;
  customerPhone?: string;
  discount: number;
  tax: number;
  paymentMethod: string;
  items: Array<{
    productId: string;
    quantity: number;
    unitPrice: number;
  }>;
}

export interface CreatePurchaseRequest {
  supplierId?: string;
  supplierName?: string;
  supplierPhone?: string;
  discount: number;
  tax: number;
  items: Array<{
    productId: string;
    quantity: number;
    unitPrice: number;
  }>;
}

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  message?: string;
  error?: string;
}
