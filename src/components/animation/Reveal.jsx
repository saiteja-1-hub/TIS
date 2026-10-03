import React from 'react';
import { motion } from 'framer-motion';

/**
 * Feature: Scroll-Triggered Reveals
 * Wraps section cards, stats, and text blocks using Framer Motion's whileInView.
 * Uses viewport={{ once: true }} to animate elements into view without causing re-triggering lag during reverse scrolling.
 */
export default function Reveal({
  children,
  className = '',
  delay = 0,
  direction = 'up',
  duration = 0.5,
  distance = 28
}) {
  const directions = {
    up: { y: distance, x: 0 },
    down: { y: -distance, x: 0 },
    left: { x: distance, y: 0 },
    right: { x: -distance, y: 0 },
    none: { x: 0, y: 0 }
  };

  const initialOffset = directions[direction] || directions.up;

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, ...initialOffset }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: '-30px' }}
      transition={{
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1]
      }}
    >
      {children}
    </motion.div>
  );
}
