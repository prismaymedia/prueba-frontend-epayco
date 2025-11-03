interface Props {
  title: string;
  position: string;
  size: string;
  rounded?: boolean;
}
export const Header = ({ title, position, size, rounded }: Props) => {
  return (
    <section
      className={`bg-linear-to-r from-[#870412] to-[#e1111c] ${position} ${
        rounded ?? "rounded-xl"
      } `}
    >
      <h1
        className={`${size} tracking-tight font-bold text-white p-6`}
      >
        {title}
      </h1>
    </section>
  );
};
