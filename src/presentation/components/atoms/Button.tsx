interface Props {
  label?: string;
  type?: "submit" | "button";
  onClick?: () => void;
}

export const Button = ({ label, type, onClick }: Props) => {
  return (
    <section className="w-full flex justify-center">
      <button
        className="bg-[#870412] text-white px-4 py-2 rounded hover:bg-gray-900 cursor-pointer"
        type={type}
        onClick={onClick}
      >
        {label}
      </button>
    </section>
  );
};
