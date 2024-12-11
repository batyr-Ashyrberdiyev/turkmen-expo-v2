import { clsx, type ClassValue } from 'clsx';
import { useLenis } from 'lenis/react';
import { useEffect } from 'react';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function scrollTop(params: any = null) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [params]);
}

export function scrollLock() {
  const lenis = useLenis(() => {});

  useEffect(() => {
    lenis?.stop();
    document.body.classList.add('overflow-hidden');

    return () => {
      lenis?.start();
      document.body.classList.remove('overflow-hidden');
    };
  }, []);
}
