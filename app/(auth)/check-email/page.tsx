"use client";

import Button from "@/components/Button";
import routes from "@/routes";
import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function CheckEmail() {
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const handleResend = async () => {
    try {
      setSending(true);

      await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/auth/resend-verification`,
        {
          method: "POST",
        },
      );

      setSent(true);
    } catch (err) {
      console.error(err);
    } finally {
      setSending(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="min-h-screen flex flex-col items-center justify-center p-6 max-w-md mx-auto w-full text-center"
    >
      {/* ICON */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 20,
          delay: 0.2,
        }}
        className="w-24 h-24 bg-sage/20 rounded-full flex items-center justify-center mb-8"
      >
        <Mail size={48} className="text-sage-700" />
      </motion.div>

      {/* TEXT */}
      <h2 className="text-3xl font-semibold text-dark mb-4">
        Check your email
      </h2>

      <p className="text-gray-500 mb-10 leading-relaxed">
        We’ve sent a verification link to your email address. Please check your
        inbox and click the link to verify your account.
      </p>

      {/* RESEND BUTTON */}
      <Button
        onClick={handleResend}
        disabled={sending}
        className="w-full bg-dark text-white py-4 rounded-full font-medium hover:bg-gray-800 transition-colors disabled:opacity-60"
      >
        {sending ? "Sending..." : sent ? "Email Sent Again" : "Resend Email"}
      </Button>

      {/* BACK TO LOGIN */}
      <Link
        href={routes.SIGNIN}
        className="mt-6 text-sm text-gray-500 hover:underline"
      >
        Back to Login
      </Link>
    </motion.div>
  );
}
