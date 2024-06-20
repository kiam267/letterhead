'use client';
import { cn } from '@/lib/utils';
import {
  useMotionValue,
  motion,
  useMotionTemplate,
} from 'framer-motion';
import React from 'react';


export const Highlight = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <motion.span
      initial={{
        backgroundSize: '0% 100%',
      }}
      animate={{
        backgroundSize: '100% 100%',
      }}
      transition={{
        duration: 2,
        ease: 'linear',
        delay: 0.5,
      }}
      style={{
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'left center',
        display: 'inline',
      }}
      className={cn(
        `relative inline-block pb-1  px-1 rounded-lg bg-gradient-to-r from-orange-300 to-yellow-200/60 dark:from-purple-300 dark:to-purple-500`,
        className
      )}
    >
      {children}
    </motion.span>
  );
};
