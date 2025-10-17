import { motion } from "framer-motion";
import * as React from "react";

type HeadingTag = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

interface InViewHeadingProps {
  tag?: HeadingTag;
  className?: string;
  children: React.ReactNode;
  delay?: number;
  once?: boolean;
}

export function InViewHeading({
  tag = "h2",
  className,
  children,
  delay = 0,
  once = true,
}: InViewHeadingProps) {
  const MotionTag: any = (motion as any)[tag] || motion.h2;
  return (
    <MotionTag
      className={className}
      initial={{ y: 24, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay } }}
      viewport={{ once, amount: 0.6 }}
    >
      {children}
    </MotionTag>
  );
}
