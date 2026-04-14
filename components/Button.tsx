interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;

}

const Button = ({ children, className, ...props  }: ButtonProps) => {
  return (
    <button
      {...props}
      className={`w-full py-4 rounded-full font-medium transition-colors mt-6 cursor-pointer ${className}`}
    
    >
      {children}
    </button>
  );
};

export default Button;
