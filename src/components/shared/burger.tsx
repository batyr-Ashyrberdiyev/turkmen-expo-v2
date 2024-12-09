import { cn } from "@/lib/utils";
import { FC } from "react";
import { motion } from "framer-motion";

interface Props {
  className?: string;
  burger: boolean;
  setBurger: (value: boolean) => void;
}

export const Burger: FC<Props> = ({ className }) => {
  return (
    <motion.div
      initial={{ translateX: "100%", opacity: 0 }}
      animate={{ translateX: 0, opacity: 1 }}
      exit={{ translateX: "100%", opacity: 0 }}
      transition={{ ease: [0.1, 0, 0.2, 1] }}
      className={cn(
        "bg-SURFACE fixed top-20 bottom-0 right-0 left-0 z-30 min-h-screen overflow-y-auto w-full",
        className
      )}
    >
      asd
    </motion.div>
  );
};
