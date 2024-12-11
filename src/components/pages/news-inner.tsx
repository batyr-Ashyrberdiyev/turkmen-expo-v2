import { useParams } from 'react-router-dom';
import { Container } from '../layout';
import { Animate, NewsCard } from '../shared';
import { scrollTop } from '@/lib/utils';
import { newsData } from '../shared/home/home-news';
import { Carousel, CarouselContent, CarouselItem } from '../ui/carousel';

export const NewsInner = () => {
  scrollTop();

  const { id } = useParams();

  return (
    <div>
      <Animate className="flex flex-col gap-16 md:pt-16 pt-10">
        <section className="flex flex-col md:gap-8 gap-4">
          <h6 className="h5 text-center">23 сентября 2024 г.</h6>

          <h1 className="h1 text-center max-w-[980px] mx-auto">
            Выставка Baby & Kids Expo 2024 пройдёт в Японии с 3 по 5 июля
          </h1>

          <div className="max-w-[1288px] mx-auto md:h-auto h-[232px] overflow-x-visible">
            <img src="/news-inner.png" alt="image" className="size-full object-cover" />
          </div>

          <Container className="flex flex-col md:gap-6 gap-4 md:h3 text-base !font-normal max-w-[848px] mx-auto">
            <p>
              С 3 по 5 июля 2024 года в Японии состоится одно из крупнейших международных
              мероприятий в сфере товаров и услуг для детей – выставка Baby & Kids Expo 2024. Это
              событие привлекает производителей, дистрибьюторов, представителей ритейла и родителей,
              стремящихся узнать о новейших разработках и продуктах для детей. Мероприятие пройдет в
              выставочном центре Tokyo Big Sight.
            </p>
            <p>
              Baby & Kids Expo 2024 традиционно проходит в Токио и собирает участников со всего
              мира. На выставке будут представлены детская одежда, игрушки, мебель, учебные
              материалы, продукты питания, а также инновационные гаджеты и приложения для детей.
              Участники смогут увидеть новинки, протестировать продукцию и пообщаться с
              разработчиками и экспертами отрасли.
            </p>
            <p>
              С 3 по 5 июля 2024 года в Японии состоится одно из крупнейших международных
              мероприятий в сфере товаров и услуг для детей – выставка Baby & Kids Expo 2024. Это
              событие привлекает производителей, дистрибьюторов, представителей ритейла и родителей,
              стремящихся узнать о новейших разработках и продуктах для детей. Мероприятие пройдет в
              выставочном центре Tokyo Big Sight.
            </p>
            <p>
              Baby & Kids Expo 2024 традиционно проходит в Токио и собирает участников со всего
              мира. На выставке будут представлены детская одежда, игрушки, мебель, учебные
              материалы, продукты питания, а также инновационные гаджеты и приложения для детей.
              Участники смогут увидеть новинки, протестировать продукцию и пообщаться с
              разработчиками и экспертами отрасли.
            </p>
          </Container>

          <hr className="border-OUTLINE_VAR my-4" />
        </section>
      </Animate>

      <section className="flex flex-col gap-8 mt-20">
        <Container>
          <Animate>
            <h3 className="h3 !text-ON_SURFACE md:mb-8 mb-6">Читайте также:</h3>
          </Animate>

          <div className="md:grid-4 hidden">
            {newsData.slice(0, 4).map((item, i) => (
              <NewsCard key={i} link={''} {...item} id="0" />
            ))}
          </div>

          <Carousel opts={{ dragFree: true }} className="md:hidden">
            <CarouselContent overflowHidden>
              {newsData.slice(0, 4).map((item, i) => (
                <CarouselItem className="basis-[364px] mr-4">
                  <NewsCard key={i} link={''} {...item} id="0" />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </Container>
      </section>
    </div>
  );
};
