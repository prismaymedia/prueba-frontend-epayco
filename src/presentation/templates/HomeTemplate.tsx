interface HomeTemplateProps {
    children: React.ReactNode;
  }
  
  export const HomeTemplate = ({ children }: HomeTemplateProps) => (
    <div className="max-w-4xl mx-auto p-6 space-y-8">
      {children}
    </div>
  );