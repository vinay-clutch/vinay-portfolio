"use client";

import { cn } from "@/utilities/cn";
import { useInView, Variants } from "framer-motion";
import { motion, type Transition } from "framer-motion";

import { useMemo, useRef } from "react";

type AnimationVariant =
  | "fadeUp"
  | "fadeLeft"
  | "fadeRight"
  | "reveal"
  | "scale"
  | "none";

type AnimateInProps = {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  variant?: AnimationVariant;
  once?: boolean;
};

const baseTransition: Transition = {
  duration: 0.7,
  ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
};

const variantMap: Record<AnimationVariant, Variants> = {
  fadeUp: {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0 },
  },
  fadeLeft: {
    hidden: { opacity: 0, x: -24 },
    visible: { opacity: 1, x: 0 },
  },
  fadeRight: {
    hidden: { opacity: 0, x: 24 },
    visible: { opacity: 1, x: 0 },
  },
  scale: {
    hidden: { opacity: 0, scale: 0.96 },
    visible: { opacity: 1, scale: 1 },
  },
  reveal: {
    hidden: { opacity: 0, clipPath: "inset(0 100% 0 0)" },
    visible: { opacity: 1, clipPath: "inset(0 0% 0 0)" },
  },
  none: {
    hidden: { opacity: 1, y: 0 },
    visible: { opacity: 1, y: 0 },
  },
};

export function AnimateIn({
  children,
  delay = 0,
  className = "",
  variant = "fadeUp",
  once = true,
}: AnimateInProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, {
    once,
    amount: 0.1,
    margin: "-5% 0px -5% 0px",
  });

  const variants = useMemo(
    () => variantMap[variant] ?? variantMap.fadeUp,
    [variant]
  );

  return (
    <motion.div
      ref={ref}
      className={cn("will-change-transform", className)}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={variants}
      transition={{ ...baseTransition, delay }}
    >
      {children}
    </motion.div>
  );
}
