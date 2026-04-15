"use client";
import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import Button from "@/components/Button";
import routes from "@/routes";
export default function OTPVerification() {
  const [otp, setOtp] = useState(["", "", "", ""]);
  const [timeLeft, setTimeLeft] = useState(30);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  useEffect(() => {
    if (timeLeft > 0) {
      const timerId = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timerId);
    }
  }, [timeLeft]);
  const handleChange = (index: number, value: string) => {
    if (isNaN(Number(value))) return;
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    // Auto-focus next input
    if (value !== "" && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };
  const handleKeyDown = (
    index: number,
    e: React.KeyboardEvent<HTMLInputElement>,
  ) => {
    if (e.key === "Backspace" && index > 0 && otp[index] === "") {
      inputRefs.current[index - 1]?.focus();
    }
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const code = otp.join("");
    if (code.length === 6) {
      console.log("Verifying OTP:", code);
    }
  };
  const handleResend = () => {
    console.log("Resending code...");
    setTimeLeft(30);
  };
  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 0.95,
      }}
      animate={{
        opacity: 1,
        scale: 1,
      }}
      className="min-h-screen flex flex-col items-center justify-center p-6 max-w-md mx-auto w-full relative"
    >
      <Link
        href={routes.FORGOT_PASSWORD}
        className="absolute top-8 left-6 p-2 rounded-full hover:bg-black/5 transition-colors"
      >
        <ArrowLeft size={24} />
      </Link>

      <div className="w-full space-y-8">
        <div className="text-center">
          <h1 className="font-serif text-4xl font-bold mb-2">Notez</h1>
          <h2 className="text-2xl font-semibold text-dark mt-12">
            Enter Verification Code
          </h2>
          <p className="text-gray-500 mt-3 leading-relaxed">
            We sent a 6-digit code to your email address. Please enter it below.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8 mt-10">
          <div className="flex justify-center gap-8">
            {otp.map((digit, index) => (
              <input
                key={index}
                ref={(el) => (inputRefs.current[index] = el)}
                type="text"
                maxLength={1}
                value={digit}
                onChange={(e) => handleChange(index, e.target.value)}
                onKeyDown={(e) => handleKeyDown(index, e)}
                className="w-12 h-14 text-center text-xl font-semibold rounded-2xl bg-white border-none shadow-sm focus:ring-2 focus:ring-sage outline-none transition-all"
              />
            ))}
          </div>

          <Button
            type="submit"
            disabled={otp.join("").length !== 6}
            className="w-full bg-dark text-white py-4 rounded-full font-medium hover:bg-gray-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Verify
          </Button>
        </form>

        <div className="text-center mt-6">
          {timeLeft > 0 ? (
            <p className="text-sm text-gray-500">
              Resend code in{" "}
              <span className="font-medium text-dark">
                00:{timeLeft.toString().padStart(2, "0")}
              </span>
            </p>
          ) : (
            <button
              onClick={handleResend}
              className="text-sm font-medium text-dark hover:underline"
            >
              Resend Code
            </button>
          )}
        </div>
      </div>
    </motion.div>
  );
}
