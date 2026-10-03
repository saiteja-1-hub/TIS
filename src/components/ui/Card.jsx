import React from 'react';

/**
 * Reusable Card UI Component
 */
export default function Card({
  children,
  className = '',
  onClick,
  style,
  ...props
}) {
  return (
    <div
      className={`ui-card ${className}`.trim()}
      onClick={onClick}
      style={style}
      {...props}
    >
      {children}
    </div>
  );
}
