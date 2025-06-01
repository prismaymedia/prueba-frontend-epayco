interface PageLayout {
    children: React.ReactNode;
}

const PageLayout = ({ children }: PageLayout) => {
  return (
    <div className="bg-green-100 w-full min-h-screen">
      <main className="container mx-auto px-4 lg:px-0">
        {children}
      </main>
    </div>
  );
}

export default PageLayout;