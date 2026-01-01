"use client"

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

type SkillCardProps = {
  title: string;
  value: number;
  color: string;
};

export default function SkillCard({ title, value, color }: SkillCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { margin: "-50px", once: false });

  return (
    <div ref={ref} className="sm:p-3">
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-lg font-semibold text-zinc-900 dark:text-white">
          {title}
        </h3>
        <span className="text-sm text-zinc-900 dark:text-zinc-100">
          {value}%
        </span>
      </div>

      <div className="w-full h-2 bg-zinc-300 dark:bg-zinc-700 rounded-full overflow-hidden">
        <motion.div
          className="h-full rounded-full"
          style={{ backgroundColor: color }}
          initial={{ width: 0 }}
          animate={{ width: isInView ? `${value}%` : "0%" }}
          transition={{ duration: 1.2, ease: [0.4, 0, 0.2, 1] }}       
         />
      </div>
    </div>
  );
}
