import { ReactNode } from 'react';
import { ScrollReveal } from './ScrollReveal';

interface FloatingCardProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
  reveal?: boolean;
}

export function FloatingCard({ 
  children, 
  delay = 0, 
  className = '', 
  style = {}, 
  onClick,
  reveal = true
}: FloatingCardProps) {
  const cardContent = (
    <div
      onClick={onClick}
      className={`float-card-depth spatial-layer-2 w-full h-full`}
      style={{
        cursor: onClick ? 'pointer' : 'default',
        ...style
      }}
    >
      {children}
    </div>
  );

  if (reveal) {
    return (
      <ScrollReveal 
        delay={delay} 
        className={className} 
        style={{ height: '100%', width: '100%' }}
      >
        {cardContent}
      </ScrollReveal>
    );
  }

  return (
    <div className={className} style={{ height: '100%', width: '100%' }}>
      {cardContent}
    </div>
  );
}
