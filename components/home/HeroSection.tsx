"use client";
import Link from "next/link";
import { motion } from "framer-motion";
const HeroSection = () => {
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
      transition={{
        duration: 0.6,
      }}
      className="max-w-2xl"
    >
      <h1 className="text-5xl md:text-6xl font-serif font-bold leading-tight mb-6 text-dark">
        Organize your thoughts, <br className="hidden md:block" />
        <span className="text-gray-500 italic">beautifully.</span>
      </h1>
      <p className="text-lg text-gray-600 mb-10 max-w-xl mx-auto leading-relaxed">
        A warm, minimal space for your journals, quick notes, and life goals.
        Designed to help you focus on what matters.
      </p>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <Link
          href="/signup"
          className="w-full sm:w-auto bg-dark text-white px-8 py-4 rounded-full font-medium hover:bg-gray-800 transition-all shadow-soft hover:shadow-md"
        >
          Start Writing for Free
        </Link>
      </div>
    </motion.div>
  );
};

export default HeroSection;
