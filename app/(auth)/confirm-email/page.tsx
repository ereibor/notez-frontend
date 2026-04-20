"use client";
import routes from "@/routes";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import Link from "next/link";

export default function ConfirmEmail() {
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
      className="min-h-screen flex flex-col items-center justify-center p-6 max-w-md mx-auto w-full text-center"
    >
      <motion.div
        initial={{
          scale: 0,
        }}
        animate={{
          scale: 1,
        }}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 20,
          delay: 0.2,
        }}
        className="w-24 h-24 bg-sage/20 rounded-full flex items-center justify-center mb-8"
      >
        <CheckCircle2 size={48} className="text-sage-700" />
      </motion.div>

      <h2 className="text-3xl font-semibold text-dark mb-4">Email Verified!</h2>
      <p className="text-gray-500 mb-10 leading-relaxed">
        Your email has been successfully verified. You can now access all
        features of Notez.
      </p>

      <Link
        href={routes.DASHBOARD}
        className="w-full bg-dark text-white py-4 rounded-full font-medium hover:bg-gray-800 transition-colors"
      >
        Continue to Dashboard
      </Link>
    </motion.div>
  );
}
