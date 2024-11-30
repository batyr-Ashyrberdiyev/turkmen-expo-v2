import { Container } from '../layout';
import { ContactsForm, NewsCard } from '../shared';
import { Button } from '../ui/button';

export const News = () => {
  return (
    <Container className="pt-20">
      <div className="mb-16">
        <h1 className="h1 text-center">Последние новости</h1>
        <p className="max-w-[608px] texr-center mx-auto h4 mt-2">
          Узнайте о самых свежих событиях, обновлениях и достижениях Turkmen Expo. Будьте в курсе
          всего, что происходит в мире бизнес-мероприятий и технологий!
        </p>
      </div>

      <section className="flex flex-col gap-12 items-center mb-[120px]">
        <div className="grid grid-cols-4 gap-8">
          {[...Array(12)].map((_, i) => (
            <NewsCard id={String(i)} key={i} />
          ))}
        </div>
        <Button variant={'outline'} className="btn">
          Показать больше новостей
        </Button>
      </section>

      <ContactsForm />
    </Container>
  );
};
