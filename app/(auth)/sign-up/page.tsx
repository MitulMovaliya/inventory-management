"use client"

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import React, { useState } from "react";
import { registerUser } from '@/utils/api/auth'
import toast from "react-hot-toast";

function page() {
  type SignUpFormData = {
    email: string;
    password: string
    firstName: string
    lastName: string
    shopName: string
    shopAddress: string
    shopPhone: string
    shopEmail: string
  }
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [formData, setFormData] = useState<SignUpFormData>({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    shopName: "",
    shopAddress: "",
    shopPhone: "",
    shopEmail: "",
  });
  const [errors, setErrors] = useState<Partial<SignUpFormData>>({});
  const validateForm = () => {
    const newErrors: Partial<SignUpFormData> = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required";
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }

    if (!formData.password.trim()) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    } else if (!/^(?=.*[A-Z])(?=.*[!@#$%^&*])/.test(formData.password)) {
      newErrors.password = "Password must contain at least one uppercase letter and one special character";
    }

    if (!formData.shopName.trim()) {
      newErrors.shopName = "Shop name is required";
    }

    if (!formData.shopAddress.trim()) {
      newErrors.shopAddress = "Shop address is required";
    }

    if (!formData.shopPhone.trim()) {
      newErrors.shopPhone = "Shop phone is required";
    }

    if (!formData.shopEmail.trim()) {
      newErrors.shopEmail = "Shop email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.shopEmail)) {
      newErrors.shopEmail = "Please enter a valid shop email";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e: React.FormEvent<HTMLInputElement>) => {
    const { name, value } = e.target as HTMLInputElement;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    if (!validateForm()) {
      e.preventDefault();
      setIsLoading(false);
      return;
    }
    e.preventDefault();
    setIsLoading(true);

    try {
      // Simulate API call
      const response = await registerUser(formData);
      // console.log("User registered:", response);
      const { token } = response.data;
      localStorage.setItem("authToken", token);
      toast.success("Registration successful!");
    }
    catch (error: any) {
      toast.error(error.message);
    }
    finally {
      setIsLoading(false);
    }
  };

  return <div className="max-w-md w-full space-y-8">
    <div className="text-center">
      <h1 className="text-3xl font-bold text-accent-orange mb-2">InvMng</h1>
      <h2 className="text-2xl font-semibold text-text-primary">Create your Account</h2>
      <p className="text-text-secondary mt-2">Sign up for a new account</p>

    </div>
    <Card>
      <form className="space-y-6" onSubmit={handleSubmit}>
        <p className="text-md font-semibold pb-3 border-b border-border-subtle text-white">Personal Information</p>

        <div className="grid md:grid-cols-2 gap-4">
          <Input
            label="First Name"
            name="firstName"
            type="text"
            onChange={handleInputChange}
            value={formData.firstName}
            error={errors.firstName}
            placeholder="John"
          //required
          />
          <Input
            label="Last Name"
            name="lastName"
            type="text"
            placeholder="Doe"
            required
            error={errors.lastName}
            onChange={handleInputChange}
            value={formData.lastName}
          />
        </div>
        <Input
          label="Email Address"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleInputChange}
          error={errors.email}
          placeholder="john@example.com"
          // required
          autoComplete="email"
        />

        <Input
          label="Password"
          name="password"
          type="password"
          value={formData.password}
          onChange={handleInputChange}
          error={errors.password}
          placeholder="••••••••"
          // required
          autoComplete="current-password"
        />

        <p className="text-md font-semibold pb-3 border-b border-border-subtle text-white">Shop Information</p>

        <Input
          label="Shop Name"
          name="shopName"
          type="text"
          placeholder="My Shop"
          value={formData.shopName}
          error={errors.shopName}
          onChange={handleInputChange}

        // required
        />
        <Input
          label="Shop Address"
          name="shopAddress"
          onChange={handleInputChange}
          error={errors.shopAddress}
          value={formData.shopAddress}
          type="text"
          placeholder="123 Main St"
        // required
        />

        <div className="grid md:grid-cols-2 gap-4">
          <Input
            label="Shop Phone"
            name="shopPhone"
            type="text"
            placeholder="(123) 456-7890"
            // required
            value={formData.shopPhone}
            error={errors.shopPhone}
            onChange={handleInputChange}

          />
          <Input
            label="Shop Email"
            name="shopEmail"
            type="email"
            placeholder="shop@example.com"
            autoComplete="email"
            //required
            value={formData.shopEmail}
            onChange={handleInputChange}
            error={errors.shopEmail}

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

