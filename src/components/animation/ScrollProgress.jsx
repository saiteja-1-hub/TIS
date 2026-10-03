import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

/**
 * Feature: Top Reading Scroll Progress Bar
 * Tracks viewport scrolling via Framer Motion's useScroll() and useSpring().
 * Renders a fixed top progress line that expands smoothly as the user reads down the page.
 */
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <motion.div
      className="scroll-progress-bar"
      style={{ scaleX }}
      aria-hidden="true"
    />
  );
}
