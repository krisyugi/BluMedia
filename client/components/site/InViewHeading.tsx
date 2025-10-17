import { motion, useAnimation } from "framer-motion";
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
  once = false,
}: InViewHeadingProps) {
  const MotionTag: any = (motion as any)[tag] || motion.h2;
  const controls = useAnimation();

  const variants = {
    hidden: { y: 24, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay } },
  };

  return (
    <MotionTag
      className={className}
      initial="hidden"
      animate={controls}
      variants={variants}
      whileInView="show"
      viewport={{ once, amount: 0.6 }}
      onViewportLeave={() => controls.start("hidden")}
    >
      {children}
    </MotionTag>
  );
}
