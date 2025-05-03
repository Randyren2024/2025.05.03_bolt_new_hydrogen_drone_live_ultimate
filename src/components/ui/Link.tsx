import React from 'react';

interface LinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  openInNewTab?: boolean;
}

export const Link: React.FC<LinkProps> = ({ 
  href, 
  children, 
  className = '', 
  openInNewTab = false
}) => {
  const attributes = openInNewTab ? { target: '_blank', rel: 'noopener noreferrer' } : {};
  
  return (
    <a 
      href={href}
      className={className}
      {...attributes}
    >
      {children}
    </a>
  );
};