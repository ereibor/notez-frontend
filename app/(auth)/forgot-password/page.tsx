"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { useState } from "react";
export default function ForgotPassword() {
  const [submitted, setSubmitted] = useState(true);
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 20,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      exit={{
        opacity: 0,
        y: -20,
      }}
      className="min-h-screen flex flex-col items-center justify-center p-6 max-w-md mx-auto w-full relative"
    >
      <Link
        href="/signin"
        className="absolute top-8 left-6 p-2 rounded-full hover:bg-black/5 transition-colors"
      >
        <ArrowLeft size={24} />
      </Link>

      <div className="w-full space-y-8">
        <div className="text-center">
          <h1 className="font-serif text-4xl font-bold mb-2">Notez</h1>
          <h2 className="text-2xl font-semibold text-dark mt-12">
            Forgot Password?
          </h2>
          <p className="text-gray-500 mt-3 leading-relaxed">
            Don&apos;t worry! It happens. Please enter the email address
            associated with your account.
          </p>
        </div>

        <form className="space-y-6 mt-10">
          <div className="space-y-1.5">
            <label className="text-sm font-medium text-gray-700 ml-1">
              Email Address
            </label>
            <input
              type="email"
              placeholder="examplemail@gmail.com"
              className="w-full px-5 py-4 rounded-2xl bg-white border-none shadow-sm focus:ring-2 focus:ring-sage outline-none transition-all"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-dark text-white py-4 rounded-full font-medium hover:bg-gray-800 transition-colors"
          >
            Send Reset Code
          </button>
        </form>
        {submitted && (
          <p className="text-green-600 text-sm text-center">
            ✅ OTP has been sent to your email
          </p>
        )}
      </div>
    </motion.div>
  );
}
