interface Props {
  label: string;
  styles: string;
}
export const Title = ({ label, styles }: Props) => {
  return <h1 className={`title ${styles ? styles : ""}`}>{label}</h1>;
};
