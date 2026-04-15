"use client";
import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import routes from "@/routes";

export default function ChangePassword() {
  const router = useRouter();

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    console.log("New Password:", password);

    // TODO: call API here

    router.push("/signin");
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="min-h-screen flex flex-col items-center justify-center p-6 max-w-md mx-auto w-full relative"
    >
      <Link
        href={routes.VERIFY_OTP}
        className="absolute top-8 left-6 p-2 rounded-full hover:bg-black/5 transition-colors"
      >
        <ArrowLeft size={24} />
      </Link>

      <div className="w-full space-y-8">
        <div className="text-center">
          <h1 className="font-serif text-4xl font-bold mb-2">Notez</h1>
          <h2 className="text-2xl font-semibold text-dark mt-12">
            Create New Password
          </h2>
          <p className="text-gray-500 mt-3 leading-relaxed">
            Your OTP has been verified. Please set a new password for your
            account.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6 mt-10">
          <div className="space-y-1.5">
            <label className="text-sm font-medium text-gray-700 ml-1">
              New Password
            </label>
            <input
              type="password"
              placeholder="Enter new password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-5 py-4 rounded-2xl bg-white shadow-sm focus:ring-2 focus:ring-sage outline-none transition-all"
              required
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-sm font-medium text-gray-700 ml-1">
              Confirm Password
            </label>
            <input
              type="password"
              placeholder="Confirm new password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full px-5 py-4 rounded-2xl bg-white shadow-sm focus:ring-2 focus:ring-sage outline-none transition-all"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-dark text-white py-4 rounded-full font-medium hover:bg-gray-800 transition-colors"
          >
            Reset Password
          </button>
        </form>
      </div>
    </motion.div>
  );
}
