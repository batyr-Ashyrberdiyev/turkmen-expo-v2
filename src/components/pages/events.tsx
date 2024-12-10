import { scrollTop } from '@/lib/utils';
import { Container, PageHero } from '../layout';
import { Animate, EventCard } from '../shared';

export const Events = () => {
  scrollTop();

  return (
    <div>
      <PageHero title="Ближайшие мероприятия" img="/events-header.png" />

      <Container className="flex flex-col gap-16 mt-16">
        <Animate>
          <p className="max-w-[908px] mx-auto text-base">
            Ознакомьтесь с расписанием предстоящих выставок и деловых встреч от Turkmen Expo. Здесь
            вы найдёте информацию о ключевых событиях, которые создают возможности для нового
            партнёрства, обмена знаниями и продвижения бизнеса. Следите за обновлениями и планируйте
            участие в самых значимых мероприятиях индустрии!
          </p>
        </Animate>

        <section className="flex flex-col md:gap-8 gap-6">
          <Animate>
            <EventCard i={0} />
          </Animate>
        </section>
      </Container>
    </div>
  );
};
