'use client';

import { motion } from 'motion/react';

export function Background() {
  // Generate particles
  const particles = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 4 + 2,
    duration: Math.random() * 20 + 15,
    delay: Math.random() * 5,
  }));

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {/* Animated mesh gradient background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 -left-4 w-[500px] h-[500px] bg-emerald-500/30 rounded-full mix-blend-multiply filter blur-[120px] animate-blob"></div>
        <div className="absolute top-0 -right-4 w-[500px] h-[500px] bg-teal-500/20 rounded-full mix-blend-multiply filter blur-[120px] animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-[500px] h-[500px] bg-cyan-500/20 rounded-full mix-blend-multiply filter blur-[120px] animate-blob animation-delay-4000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-600/15 rounded-full mix-blend-multiply filter blur-[130px] animate-blob animation-delay-3000"></div>
      </div>

      {/* Floating particles */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-emerald-400/50 shadow-[0_0_20px_4px_rgba(52,211,153,0.4)]"
          style={{
            width: particle.size,
            height: particle.size,
            left: `${particle.x}%`,
            top: `${particle.y}%`,
          }}
          animate={{
            y: [0, -50, 0],
            x: [0, Math.random() * 40 - 20, 0],
            opacity: [0.4, 0.8, 0.4],
            scale: [1, 1.4, 1],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
