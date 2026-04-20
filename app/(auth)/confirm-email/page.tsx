"use client";

import routes from "@/routes";
import { motion } from "framer-motion";
import { CheckCircle2, XCircle } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

type Status = "loading" | "success" | "error";

export default function ConfirmEmail() {
  const searchParams = useSearchParams();
  const token = searchParams.get("token");

  const [status, setStatus] = useState<Status>("loading");
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (!token) {
      setStatus("error");
      setMessage("Invalid verification link.");
      return;
    }

    const verifyEmail = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/auth/verify-email?token=${token}`,
        );

        const data = await res.json();

        if (!res.ok) {
          throw new Error(data.message || "Verification failed");
        }

        setStatus("success");
      } catch (err: any) {
        setStatus("error");
        setMessage(err.message || "Something went wrong");
      }
    };

    verifyEmail();
  }, [token]);

  // ---------------- UI ----------------

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
        className={`w-24 h-24 rounded-full flex items-center justify-center mb-8 ${
          status === "success"
            ? "bg-sage/20"
            : status === "error"
              ? "bg-red-100"
              : "bg-gray-100"
        }`}
      >
        {status === "loading" && <p>...</p>}

        {status === "success" && (
          <CheckCircle2 size={48} className="text-sage-700" />
        )}

        {status === "error" && <XCircle size={48} className="text-red-500" />}
      </motion.div>

      {/* TEXT */}
      {status === "loading" && (
        <>
          <h2 className="text-2xl font-semibold mb-4">
            Verifying your email...
          </h2>
          <p className="text-gray-500">Please wait a moment</p>
        </>
      )}

      {status === "success" && (
        <>
          <h2 className="text-3xl font-semibold text-dark mb-4">
            Email Verified!
          </h2>
          <p className="text-gray-500 mb-10 leading-relaxed">
            Your email has been successfully verified. You can now access all
            features of Notez.
          </p>

          <Link
            href={routes.SIGNIN} // better than dashboard unless user is auto-logged in
            className="w-full bg-dark text-white py-4 rounded-full font-medium hover:bg-gray-800 transition-colors"
          >
            Log In
          </Link>
        </>
      )}

      {status === "error" && (
        <>
          <h2 className="text-3xl font-semibold text-dark mb-4">
            Verification Failed
          </h2>
          <p className="text-gray-500 mb-10 leading-relaxed">{message}</p>

          <Link
            href={routes.SIGNIN}
            className="w-full bg-dark text-white py-4 rounded-full font-medium hover:bg-gray-800 transition-colors"
          >
            Resend Email
          </Link>
        </>
      )}
    </motion.div>
  );
}
