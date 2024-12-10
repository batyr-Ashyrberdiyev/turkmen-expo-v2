import { scrollTop } from '@/lib/utils';
import { Container } from '../layout';
import { ContactsForm, NewsCard, Animate } from '../shared';
import { Button } from '../ui/button';
import { newsData } from '../shared/home/home-news';

export const News = () => {
  scrollTop();

  return (
    <Container className="md:pt-20 pt-10">
      <Animate className="mb-16">
        <h1 className="h1 text-center">Последние новости</h1>
        <p className="max-w-[608px] text-center mx-auto leading-6 mt-2">
          Узнайте о самых свежих событиях, обновлениях и достижениях Turkmen Expo. Будьте в курсе
          всего, что происходит в мире бизнес-мероприятий и технологий!
        </p>
      </Animate>

      <Animate className="flex flex-col gap-12 items-center md:mb-[120px] mb-20">
        <div className="grid md:grid-cols-4 grid-cols-1 md:gap-8 gap-6">
          {newsData.slice(0, 4).map((item, i) => (
            <NewsCard link={''} key={i} {...item} />
          ))}
        </div>
        <Button variant={'outline'} className="btn">
          Показать больше новостей
        </Button>
      </Animate>

      <Animate margin="30px">
        <ContactsForm />
      </Animate>
    </Container>
  );
};
