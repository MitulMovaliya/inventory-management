"use client"

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import React, { useState } from "react";

function page() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  return <div className="max-w-md w-full space-y-8">
    <div className="text-center">
      <h1 className="text-3xl font-bold text-accent-orange mb-2">InvMng</h1>
      <h2 className="text-2xl font-semibold text-text-primary">Create your Account</h2>
      <p className="text-text-secondary mt-2">Sign up for a new account</p>

    </div>
    <Card>
      <form className="space-y-6">
        <p className="text-md font-semibold pb-3 border-b border-border-subtle text-white">Personal Information</p>

        <div className="grid md:grid-cols-2 gap-4">
          <Input
            label="First Name"
            name="firstName"
            type="text"
            placeholder="John"
            required
          />
          <Input
            label="Last Name"
            name="lastName"
            type="text"
            placeholder="Doe"
            required
          />
        </div>
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

        <p className="text-md font-semibold pb-3 border-b border-border-subtle text-white">Shop Information</p>

        <Input
          label="Shop Name"
          name="shopName"
          type="text"
          placeholder="My Shop"
          required
        />
        <Input
          label="Shop Address"
          name="shopAddress"
          type="text"
          placeholder="123 Main St"
          required
        />

        <div className="grid md:grid-cols-2 gap-4">
          <Input
            label="Shop Phone"
            name="shopPhone"
            type="text"
            placeholder="(123) 456-7890"
            required
          />
          <Input
            label="Shop Email"
            name="shopEmail"
            type="email"
            placeholder="shop@example.com"
            autoComplete="email"
            required
          />
        </div>
        <Button
          type="submit"
          variant="primary"
          size="lg"
          isLoading={isLoading}
          className="w-full"
        >
          Create Account
        </Button>

        <div className="text-center">
          <p className="text-text-secondary">
            Already have an account?{' '}
            <Link href="/login" className="text-accent-orange hover:text-accent-orange-hover font-medium">
              Sign in
            </Link>
          </p>
        </div>
      </form>
    </Card>
  </div>;
}

export default page;
