import React from "react";

const Footer = () => {
  return (
    <footer className="py-8 text-center text-sm text-gray-500 border-t border-gray-100">
      <p>&copy; {new Date().getFullYear()} Notez. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
