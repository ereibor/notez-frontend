"use client";
import { motion } from "framer-motion";
import FeatureCard from "./FeatureCard";
import { BookOpen, Target, FileText, Layout } from "lucide-react";

const PreviewSection = () => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 40,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.8,
        delay: 0.2,
      }}
      id="features"
      className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-24 w-full max-w-4xl scroll-mt-24"
    >
      <FeatureCard
        icon={<BookOpen className="w-6 h-6 text-pink-700" />}
        title="Journaling"
        description="Capture your daily reflections in a serene, distraction-free environment."
        color="bg-pink"
      />

      <FeatureCard
        icon={<Layout className="w-6 h-6 text-sage-700" />}
        title="Life Categories"
        description="Organize notes by life areas like Health, Career, and Relationships."
        color="bg-sage"
      />

      <FeatureCard
        icon={<Target className="w-6 h-6 text-yellow-700" />}
        title="Goal Tracking"
        description="Set intentions and track your progress with visual indicators."
        color="bg-yellow"
      />

      <FeatureCard
        icon={<FileText className="w-6 h-6 text-orange-700" />}
        title="Quick Notes"
        description="Jot down fleeting ideas instantly before they slip away."
        color="bg-peach"
      />
    </motion.div>
  );
};

export default PreviewSection;
