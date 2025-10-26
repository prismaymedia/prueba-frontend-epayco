import React from 'react';

interface TypographyProps {
  variant?: 'h1' | 'h2' | 'h3' | 'p' | 'label';
  children: React.ReactNode;
  className?: string;
}

function Typography({ variant = 'p', children, className = '' }: TypographyProps) {
    const Component = variant as keyof JSX.IntrinsicElements;

  return <Component className={className}>{children}</Component>;
}

export { Typography };
