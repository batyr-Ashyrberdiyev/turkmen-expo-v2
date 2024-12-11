import { scrollTop } from '@/lib/utils';
import { Container, PageHero } from '../layout';
import { Animate, Gallery, MediaCard } from '../shared';
import { Carousel, CarouselContent, CarouselItem } from '../ui/carousel';
import { GalleryStore } from '@/store/gallery';
import { AnimatePresence } from 'framer-motion';

export const Media = () => {
  scrollTop();

  const isOpen = GalleryStore((state) => state.isOpen);
  const setIsOpen = GalleryStore((state) => state.setIsOpen);

  const onMedia = () => setIsOpen(true);

  return (
    <>
      <AnimatePresence>{isOpen && <Gallery />}</AnimatePresence>

      <div>
        <PageHero title="Медиа" img="/media-header.png" />

        <Container className="mt-16">
          <section className="flex flex-col gap-16">
            <Animate>
              <h3 className="text-28 mb-8">2024 год</h3>

              <div className="hidden md:grid grid-cols-4 gap-8">
                <MediaCard
                  onClick={onMedia}
                  title={'Kids Expo – все для детей'}
                  img={'/media-1.png'}
                />
                <MediaCard title={'Kids Expo – все для детей'} img={'/media-1.png'} />
                <MediaCard title={'Kids Expo – все для детей'} img={'/media-1.png'} />
                <MediaCard title={'Kids Expo – все для детей'} img={'/media-1.png'} />
              </div>

              <Carousel className="md:hidden">
                <CarouselContent overflowHidden>
                  {[...Array(8)].map((_, i) => (
                    <CarouselItem key={i} className="mr-8 basis-[298px]">
                      <MediaCard title={'Kids Expo – все для детей'} img={'/media-1.png'} />
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>
            </Animate>
            <div>
              <h3 className="text-28 mb-8">2023 год</h3>

              <div className="grid grid-cols-4 gap-8">
                <MediaCard title={'Kids Expo – все для детей'} img={'/media-1.png'} />
              </div>
            </div>
          </section>
        </Container>
      </div>
    </>
  );
};
