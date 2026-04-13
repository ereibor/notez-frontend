"use client";
import React, { useState } from "react";

import { motion } from "framer-motion";
import { Eye, EyeOff } from "lucide-react";
import Link from "next/link";
export default function SignUp() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    setError("");
    console.log("Sign Up Data:", formData);
    // In a real app, we'd register the user here
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <motion.div
      initial={{
        opacity: 0,
        x: 20,
      }}
      animate={{
        opacity: 1,
        x: 0,
      }}
      exit={{
        opacity: 0,
        x: -20,
      }}
      className="min-h-screen flex flex-col items-center justify-center p-6 max-w-md mx-auto w-full"
    >
      <div className="w-full space-y-8">
        <div className="text-center">
          <h1 className="font-serif text-4xl font-bold mb-2">Notez</h1>
          <h2 className="text-2xl font-semibold text-dark mt-8">
            Create Account
          </h2>
          <p className="text-gray-500 mt-2">
            Join us to start organizing your thoughts
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5 mt-10">
          <div className="space-y-1.5">
            <label className="text-sm font-medium text-gray-700 ml-1">
              Full Name
            </label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="John Doe"
              className="w-full px-5 py-4 rounded-2xl bg-white border-none shadow-sm focus:ring-2 focus:ring-sage outline-none transition-all"
              required
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-sm font-medium text-gray-700 ml-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="examplemail@gmail.com"
              className="w-full px-5 py-4 rounded-2xl bg-white border-none shadow-sm focus:ring-2 focus:ring-sage outline-none transition-all"
              required
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-sm font-medium text-gray-700 ml-1">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Create a password"
                className="w-full px-5 py-4 rounded-2xl bg-white border-none shadow-sm focus:ring-2 focus:ring-sage outline-none transition-all pr-12"
                required
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="text-sm font-medium text-gray-700 ml-1">
              Confirm Password
            </label>
            <input
              type={showPassword ? "text" : "password"}
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Confirm your password"
              className="w-full px-5 py-4 rounded-2xl bg-white border-none shadow-sm focus:ring-2 focus:ring-sage outline-none transition-all"
              required
            />
          </div>

          {error && <p className="text-red-500 text-sm ml-1">{error}</p>}

          <button
            type="submit"
            className="w-full bg-dark text-white py-4 rounded-full font-medium hover:bg-gray-800 transition-colors mt-6"
          >
            Create Account
          </button>
        </form>

        <p className="text-center text-sm text-gray-500 mt-8">
          Already have an account?{" "}
          <Link
            href="/signin"
            className="text-dark font-semibold hover:underline"
          >
            Sign in
          </Link>
        </p>
      </div>
    </motion.div>
  );
}
