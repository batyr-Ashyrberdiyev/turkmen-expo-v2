import { useParams } from "react-router-dom";
import { Container } from "../layout";
import { Animate, NewsCard } from "../shared";
import { scrollTop } from "@/lib/utils";
import { newsData } from "../shared/home/home-news";

export const NewsInner = () => {
  scrollTop();

  const { id } = useParams();

  return (
    <Container className="flex flex-col gap-16 pt-16">
      <Animate>
        <section className="flex flex-col gap-8">
          <h6 className="h5 text-center ">23 сентября 2024 г.</h6>

          <h1 className="h1 text-center max-w-[980px] mx-auto">
            Выставка Baby & Kids Expo 2024 пройдёт в Японии с 3 по 5 июля
          </h1>

          <div className="w-full h-[400px]">
            <img
              src="/news-inner.png"
              alt="image"
              className="size-full object-cover"
            />
          </div>

          <div className="flex flex-col gap-6 h3 !font-normal max-w-[848px] mx-auto">
            <p>
              С 3 по 5 июля 2024 года в Японии состоится одно из крупнейших
              международных мероприятий в сфере товаров и услуг для детей –
              выставка Baby & Kids Expo 2024. Это событие привлекает
              производителей, дистрибьюторов, представителей ритейла и
              родителей, стремящихся узнать о новейших разработках и продуктах
              для детей. Мероприятие пройдет в выставочном центре Tokyo Big
              Sight.
            </p>
            <p>
              Baby & Kids Expo 2024 традиционно проходит в Токио и собирает
              участников со всего мира. На выставке будут представлены детская
              одежда, игрушки, мебель, учебные материалы, продукты питания, а
              также инновационные гаджеты и приложения для детей. Участники
              смогут увидеть новинки, протестировать продукцию и пообщаться с
              разработчиками и экспертами отрасли.
            </p>
            <p>
              С 3 по 5 июля 2024 года в Японии состоится одно из крупнейших
              международных мероприятий в сфере товаров и услуг для детей –
              выставка Baby & Kids Expo 2024. Это событие привлекает
              производителей, дистрибьюторов, представителей ритейла и
              родителей, стремящихся узнать о новейших разработках и продуктах
              для детей. Мероприятие пройдет в выставочном центре Tokyo Big
              Sight.
            </p>
            <p>
              Baby & Kids Expo 2024 традиционно проходит в Токио и собирает
              участников со всего мира. На выставке будут представлены детская
              одежда, игрушки, мебель, учебные материалы, продукты питания, а
              также инновационные гаджеты и приложения для детей. Участники
              смогут увидеть новинки, протестировать продукцию и пообщаться с
              разработчиками и экспертами отрасли.
            </p>
          </div>

          <hr className="border-OUTLINE_VAR" />
        </section>
      </Animate>

      <section className="flex flex-col gap-8">
        <Animate>
          <h3 className="h3 !text-ON_SURFACE">Читайте также:</h3>
        </Animate>

        <Animate className="grid-4">
          {newsData.map((item, i) => (
            <NewsCard key={i} link={""} {...item} id="0" />
          ))}
        </Animate>
      </section>
    </Container>
  );
};
