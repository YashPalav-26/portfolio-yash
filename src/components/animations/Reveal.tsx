import { PropsWithChildren } from "react";
import { motion, useReducedMotion, Variants } from "framer-motion";

export type RevealProps = PropsWithChildren<{
  className?: string;
  delay?: number;
  duration?: number;
  y?: number;
  x?: number;
  once?: boolean;
  as?: keyof JSX.IntrinsicElements;
}>;

export function Reveal({
  children,
  className,
  delay = 0,
  duration = 0.5,
  y = 24,
  x = 0,
  once = true,
  as: Tag = "div",
}: RevealProps) {
  const prefersReduced = useReducedMotion();

  const variants: Variants = prefersReduced
    ? { hidden: { opacity: 0 }, visible: { opacity: 1 } }
    : {
        hidden: { opacity: 0, y, x },
        visible: {
          opacity: 1,
          y: 0,
          x: 0,
          transition: {
            duration,
            delay,
            ease: [0.22, 1, 0.36, 1],
          },
        },
      };

  const Component = motion[Tag] || motion.div;

  return (
    <Component
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: 0.2, margin: "-10% 0px" }}
      variants={variants}
    >
      {children}
    </Component>
  );
}

export type FadeInStaggerProps = PropsWithChildren<{
  className?: string;
  stagger?: number;
  gap?: string;
}>;

export function FadeInStagger({ children, className, stagger = 0.08 }: FadeInStaggerProps) {
  const prefersReduced = useReducedMotion();

  return (
    <motion.ul
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2, margin: "-10% 0px" }}
      variants={{
        hidden: {},
        visible: prefersReduced
          ? { transition: { staggerChildren: 0 } }
          : { transition: { staggerChildren: stagger } },
      }}
    >
      {children}
    </motion.ul>
  );
}

export function FadeInItem({ children, className }: PropsWithChildren<{ className?: string }>) {
  const prefersReduced = useReducedMotion();
  return (
    <motion.li
      className={className}
      variants={prefersReduced ? { hidden: { opacity: 0 }, visible: { opacity: 1 } } : { hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0 } }}
    >
      {children}
    </motion.li>
  );
}
