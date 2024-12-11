import { cn, scrollLock } from '@/lib/utils';
import { FC } from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '../ui/carousel';
import { X } from 'lucide-react';
import { GalleryStore } from '@/store/gallery';
import { motion } from 'framer-motion';

interface Props {
  className?: string;
}

export const Gallery: FC<Props> = ({ className }) => {
  scrollLock();

  const setIsOpen = GalleryStore((state) => state.setIsOpen);

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="size-full fixed top-0 left-0 bottom-0 right-0 z-[60]  overflow-y-auto bg-ON_SURFACE">
        <Carousel className={cn('relative size-full', className)}>
          <div className="h-full flex flex-col justify-center">
            <CarouselContent className="size-full mx-auto">
              {[...Array(5)].map((_, i) => (
                <CarouselItem key={i} className="py-40 px-[600px]">
                  <img src="/media-1.png" alt="gallery-image" className="size-full object-cover" />
                </CarouselItem>
              ))}
            </CarouselContent>
          </div>

          <button
            onClick={() => setIsOpen(false)}
            className="size-12 absolute top-12 right-14 p-1 hover:scale-[1.2] transition-transform ease-in-out duration-200">
            <X className="size-full text-white" />
          </button>

          <CarouselNext className="absolute cursor-pointer  transition-transform ease-in-out top-1/2 -translate-y-1/2 right-10" />
          <CarouselPrevious className="absolute cursor-pointer hover:scale-[1.2] transition-transform ease-in-out top-1/2 -translate-y-1/2 left-10" />
        </Carousel>
      </motion.div>
    </>
  );
};
