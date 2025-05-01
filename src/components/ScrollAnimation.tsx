
import React, { ReactNode } from 'react';

interface ScrollAnimationProps {
  children: ReactNode;
  animation?: string;
  threshold?: number;
  delay?: number;
}

const ScrollAnimation: React.FC<ScrollAnimationProps> = ({ 
  children
}) => {
  // Removed animation logic to disable scroll animations
  return (
    <div className="transition-all duration-1000">
      {children}
    </div>
  );
};

export default ScrollAnimation;
