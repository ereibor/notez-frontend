import AboutSection from "@/components/home/AboutSection";
import HeroSection from "@/components/home/HeroSection";
import PreviewSection from "@/components/home/PreviewSection";

export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1 flex flex-col items-center justify-center px-6 text-center max-w-5xl mx-auto w-full py-12">
        <HeroSection />
        <PreviewSection />
        <AboutSection />
      </main>
    </div>
  );
}
