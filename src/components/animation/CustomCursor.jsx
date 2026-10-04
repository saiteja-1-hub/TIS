import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';


export default function CustomCursor() {
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);


  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);


  const ringX = useSpring(mouseX, { stiffness: 450, damping: 28, restDelta: 0.001 });
  const ringY = useSpring(mouseY, { stiffness: 450, damping: 28, restDelta: 0.001 });


  const dotX = useSpring(mouseX, { stiffness: 1000, damping: 35, restDelta: 0.001 });
  const dotY = useSpring(mouseY, { stiffness: 1000, damping: 35, restDelta: 0.001 });

  useEffect(() => {

    if (window.matchMedia('(pointer: coarse)').matches) {
      return;
    }

    const handleMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };


    const handleElementOver = (e) => {
      const target = e.target;
      if (
        target.closest('a') ||
        target.closest('button') ||
        target.closest('[role="button"]') ||
        target.closest('input') ||
        target.closest('select') ||
        target.closest('.interactive-target') ||
        target.closest('.stat-card') ||
        target.closest('.ranking-card') ||
        target.closest('.sport-card') ||
        target.closest('.testimonial-card')
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mouseover', handleElementOver, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleElementOver);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [isVisible, mouseX, mouseY]);

  if (!isVisible) return null;

  return (
    <div className="custom-cursor-container" aria-hidden="true">

      <motion.div
        className="custom-cursor-ring"
        style={{
          x: ringX,
          y: ringY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          scale: isHovered ? 1.85 : 1,
          borderColor: isHovered ? '#fbbf24' : 'rgba(251, 191, 36, 0.5)',
          backgroundColor: isHovered ? 'rgba(153, 27, 27, 0.22)' : 'rgba(251, 191, 36, 0.03)',
        }}
        transition={{ duration: 0.15, ease: 'easeOut' }}
      />


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
          opacity: isHovered ? 0.6 : 1,
        }}
        transition={{ duration: 0.1, ease: 'easeOut' }}
      />
    </div>
  );
}
