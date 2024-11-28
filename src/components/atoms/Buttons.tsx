interface ButtonProps {
  children: React.ReactNode;
}

const Button = ({ children }: ButtonProps) => {
  return (
    <button type="submit" className="px-4 py-3 bg-[#ffb200] text-white rounded">
      {children}
    </button>
  );
};

export default Button;
