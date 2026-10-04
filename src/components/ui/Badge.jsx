import React from 'react';


export default function Badge({
  children,
  variant = 'gold',
  className = '',
  icon: Icon
}) {
  const variantClass = {
    gold: 'section-tag',
    crimson: 'section-tag crimson',
    pill: 'sport-pill-tag'
  }[variant] || 'section-tag';

  return (
    <span className={`${variantClass} ${className}`.trim()}>
      {Icon && <Icon size={14} className="badge-icon" />}
      {children}
    </span>
  );
}
