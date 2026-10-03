import React from 'react';
import { motion, useSpring } from 'framer-motion';
import { useMousePosition } from '../../hooks/useMousePosition';

/**
 * Feature: Custom Cursor
 * Follows mouse position smoothly using Framer Motion springs.
 * Expands and reacts when hovering over links, buttons, and interactive targets.
 * Automatically disabled on touch screens via pointer: coarse detection.
 */
export default function CustomCursor() {
  const { mousePosition, isHovered, isVisible } = useMousePosition();

  // Smooth springs for outer ring to prevent jitter and maintain 60 FPS
  const ringX = useSpring(mousePosition.x, { stiffness: 400, damping: 28 });
  const ringY = useSpring(mousePosition.y, { stiffness: 400, damping: 28 });

  // Tighter springs for inner dot
  const dotX = useSpring(mousePosition.x, { stiffness: 900, damping: 35 });
  const dotY = useSpring(mousePosition.y, { stiffness: 900, damping: 35 });

  if (!isVisible) return null;

  return (
    <>
      {/* Outer Follower Ring */}
      <motion.div
        className="custom-cursor-ring"
        style={{
          x: ringX,
          y: ringY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          scale: isHovered ? 1.7 : 1,
          borderColor: isHovered ? '#fbbf24' : 'rgba(251, 191, 36, 0.45)',
          backgroundColor: isHovered ? 'rgba(153, 27, 27, 0.18)' : 'transparent',
        }}
        transition={{ duration: 0.15 }}
      />

      {/* Inner Dot */}
      <motion.div
        className="custom-cursor-dot"
        style={{
          x: dotX,
          y: dotY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          scale: isHovered ? 0.4 : 1,
          backgroundColor: isHovered ? '#fbbf24' : '#fbbf24',
        }}
        transition={{ duration: 0.1 }}
      />
    </>
  );
}
