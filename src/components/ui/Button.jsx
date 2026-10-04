import React from 'react';


export default function Button({
  children,
  variant = 'primary',
  className = '',
  onClick,
  type = 'button',
  id,
  href,
  target,
  rel,
  ariaLabel,
  disabled = false,
  ...props
}) {
  const variantClass = {
    primary: 'btn-primary',
    secondary: 'btn-secondary',
    gold: 'btn-gold',
    ghost: 'btn-ghost'
  }[variant] || 'btn-primary';

  const combinedClass = `${variantClass} ${className}`.trim();

  if (href) {
    return (
      <a
        href={href}
        className={combinedClass}
        target={target}
        rel={rel}
        aria-label={ariaLabel}
        id={id}
        {...props}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      className={combinedClass}
      onClick={onClick}
      aria-label={ariaLabel}
      disabled={disabled}
      id={id}
      {...props}
    >
      {children}
    </button>
  );
}
