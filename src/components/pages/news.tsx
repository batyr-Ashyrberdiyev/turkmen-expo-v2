import { scrollTop } from '@/lib/utils';
import { Container } from '../layout';
import { ContactsForm, NewsCard } from '../shared';
import { Button } from '../ui/button';
import { newsData } from '../shared/home/home-news';
import { Animate } from '../shared';

export const News = () => {
  scrollTop();

  return (
    <Container className="pt-20">
      <Animate className="mb-16">
        <h1 className="h1 text-center">Последние новости</h1>
        <p className="max-w-[608px] texr-center mx-auto h4 mt-2">
          Узнайте о самых свежих событиях, обновлениях и достижениях Turkmen Expo. Будьте в курсе
          всего, что происходит в мире бизнес-мероприятий и технологий!
        </p>
      </Animate>

      <Animate className="flex flex-col gap-12 items-center mb-[120px]">
        <div className="grid grid-cols-4 gap-8">
          {newsData.map((item, i) => (
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
