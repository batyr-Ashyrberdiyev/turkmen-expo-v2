import { scrollTop } from '@/lib/utils';
import { Container, PageHero } from '../layout';
import { MediaCard } from '../shared';

export const Media = () => {
  scrollTop();

  return (
    <div>
      <PageHero title="Медиа" img="/media-header.png" />

      <Container className="mt-16">
        <section className="flex flex-col gap-16">
          <div>
            <h3 className="text-28 mb-8">2024 год</h3>

            <div className="grid grid-cols-4 gap-8">
              <MediaCard title={'Kids Expo – все для детей'} img={'/media-1.png'} />
              <MediaCard title={'Kids Expo – все для детей'} img={'/media-1.png'} />
              <MediaCard title={'Kids Expo – все для детей'} img={'/media-1.png'} />
              <MediaCard title={'Kids Expo – все для детей'} img={'/media-1.png'} />
            </div>
          </div>
          <div>
            <h3 className="text-28 mb-8">2023 год</h3>

            <div className="grid grid-cols-4 gap-8">
              <MediaCard title={'Kids Expo – все для детей'} img={'/media-1.png'} />
            </div>
          </div>
        </section>
      </Container>
    </div>
  );
};
