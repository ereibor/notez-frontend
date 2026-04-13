interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit" | "reset";
}

const Button = ({ children, onClick, className, type }: ButtonProps) => {
  return (
    <button
      type={type}
      className={`w-full py-4 rounded-full font-medium transition-colors mt-6 cursor-pointer ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
