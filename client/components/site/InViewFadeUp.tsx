import { motion, useAnimation } from "framer-motion";
import * as React from "react";

interface InViewFadeUpProps {
  className?: string;
  children: React.ReactNode;
  delay?: number;
  amount?: number;
}

export function InViewFadeUp({ className, children, delay = 0, amount = 0.6 }: InViewFadeUpProps) {
  const controls = useAnimation();
  const ease = [0.22, 1, 0.36, 1] as const;

  return (
    <motion.div
      className={className}
      initial={{ y: 24, opacity: 0 }}
      animate={controls}
      whileInView={{ y: 0, opacity: 1, transition: { duration: 0.6, ease, delay } }}
      viewport={{ once: false, amount }}
      onViewportLeave={() => controls.start({ y: 24, opacity: 0 })}
    >
      {children}
    </motion.div>
  );
}
