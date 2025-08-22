"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Add your login logic here
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      console.log("Login attempt:", { email, password });
    } catch (error) {
      console.error("Login failed:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-md w-full space-y-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-accent-orange mb-2">InvMng</h1>
        <h2 className="text-2xl font-semibold text-text-primary">Welcome back</h2>
        <p className="text-text-secondary mt-2">Sign in to your account</p>
      </div>
      <Card>

        <form onSubmit={handleSubmit} className="space-y-6">
          <Input
            label="Email Address"
            name="email"
            type="email"
            // value={formData.email}
            // onChange={handleInputChange}
            // error={errors.email}
            placeholder="john@example.com"
            required
            autoComplete="email"
          />

          <Input
            label="Password"
            name="password"
            type="password"
            // value={formData.password}
            // onChange={handleInputChange}
            // error={errors.password}
            placeholder="••••••••"
            required
            autoComplete="current-password"
          />

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 text-accent-orange bg-primary-card border-border-subtle rounded focus:ring-accent-orange focus:ring-2"
              />
              <label htmlFor="remember-me" className="ml-2 block text-sm text-text-secondary">
                Remember me
              </label>
            </div>

            <div className="text-sm">
              <Link href="/auth/forgot-password" className="text-accent-orange hover:text-accent-orange-hover">
                Forgot your password?
              </Link>
            </div>
          </div>

          <Button
            type="submit"
            variant="primary"
            size="lg"
            isLoading={isLoading}
            className="w-full"
          >
            Sign in
          </Button>

          <div className="text-center">
            <p className="text-text-secondary">
              Don't have an account?{' '}
              <Link href="/sign-up" className="text-accent-orange hover:text-accent-orange-hover font-medium">
                Sign up
              </Link>
            </p>
          </div>
        </form>
      </Card>
    </div>
  );
}
