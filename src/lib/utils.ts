import { clsx, type ClassValue } from "clsx";
import { useEffect } from "react";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function scrollTop(params: any = null) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [params]);
}
