import Link from "next/link";

const NavBar = () => {
  return (
    <header className="sticky top-4 z-20 mx-auto mt-4 flex justify-between items-center max-w-3xl w-[calc(100%-2rem)] px-6 py-3 bg-white/80 backdrop-blur-md rounded-full shadow-soft border border-gray-100">
      <div className="font-serif text-xl font-bold tracking-tight">Notez</div>
      <nav className="hidden sm:flex items-center gap-6 text-sm font-medium text-gray-600">
        <a href="#features" className="hover:text-dark transition-colors">
          Features
        </a>
        <a href="#about" className="hover:text-dark transition-colors">
          About
        </a>
      </nav>
      <div className="flex items-center gap-3">
        <Link
          href="/signin"
          className="text-sm font-medium hover:text-gray-600 transition-colors"
        >
          Sign In
        </Link>
        <Link
          href="/signup"
          className="text-sm font-medium bg-dark text-white px-5 py-2.5 rounded-full hover:bg-gray-800 transition-colors"
        >
          Get Started
        </Link>
      </div>
    </header>
  );
};

export default NavBar;
