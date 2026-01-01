"use client"

import {motion} from 'framer-motion'
interface FloatingItemProps {
    children: React.ReactNode;

    className?: string;
    yAnimate: number[];
    rotateAnimate: number[];
    duration: number;
  }
  
const FloatingItem: React.FC<FloatingItemProps> = ({ children, className, yAnimate, rotateAnimate, duration }) => (
    <motion.div
      className={`absolute ${className}`}
      animate={{ y: yAnimate, rotate: rotateAnimate }}
      transition={{ duration, repeat: Infinity, repeatType: "loop" }}
    >
      {children}
    </motion.div>
  );
  export default FloatingItem