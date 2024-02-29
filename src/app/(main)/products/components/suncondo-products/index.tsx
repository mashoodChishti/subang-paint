"use client";
import { motion } from "framer-motion";
import { LampContainer } from "@/components/ui/lamp";
export const SuncondoProducts = () => {
  return (
    <div className="bg-white">
      <motion.h2
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="mt-8 bg-black  bg-clip-text text-center text-6xl font-bold tracking-tight text-transparent "
      >
        Suncondo Products
      </motion.h2>
      <LampContainer>
        <></>
      </LampContainer>
    </div>
  );
};
