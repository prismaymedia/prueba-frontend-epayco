interface HomeTemplateProps {
  children: React.ReactNode;
}

const HomeTemplate = ({ children }: HomeTemplateProps) => (
  <div className="max-w-4xl mx-auto p-6">{children}</div>
);

export default HomeTemplate;
