import { FC } from 'react';
import { Container, PageHero } from '../layout';
import { ContactsForm } from '../shared';
import { scrollTop } from '@/lib/utils';

interface Props {
  className?: string;
}

export const About: FC<Props> = ({ className }) => {
  scrollTop();

  return (
    <div className={className}>
      <PageHero img="/about-header.png" title="О компании" className="mb-16" />

      <Container className="flex flex-col gap-[120px]">
        <div className="flex gap-8">
          <div>
            <h2 className="h2 mb-[68px]">Кто мы?</h2>

            <div className="h-[557px] w-[408px]">
              <img src="/about-we.png" alt="about image" className="size-full object-cover" />
            </div>
          </div>
          <div className="flex flex-col text-ON_SURFACE_VAR leading-8 gap-8 text-[24px] !font-normal">
            <div>
              TurkmenExpo – новое направление компании TPS в Туркменистане, которая более двадцати
              лет занимает лидирующие позиции на рынке рекламы, маркетинга и полиграфии. Компания
              предоставляет услуги по организации выставок, дизайну, монтажу и обслуживанию
              рекламных продуктов, выставочных стендов, сувениров, типографской печати, а также
              производству и трансляции телевизионных рекламных роликов.
            </div>

            <div>
              Будучи материнской компанией TurkmenExpo, TPS является ведущей компанией в
              Туркменистане на всех выставках с 1999 года. Мы также специализируемся на
              маркетинговых исследованиях, организации и проведении мероприятий, запуске новых
              продуктов и акциях по продвижению. Клиенты ценят нас за выдающееся качество
              обслуживания и вкус.
            </div>

            <div>
              Компания «TurkmenExpo» вместе с головными компаниями является крупнейшим организатором
              выставок, в том чисел выставок товаров, инвестиционных роуд-шоу и других международных
              мероприятий не только в Туркменистане, но и за его пределами. Мы успешно
              организовываем международные выставки, конгрессы, форумы и конференции по всей стране.
              Также поддерживаем участие туркменских компаний на значимых международных выставках за
              рубежом, в том{' '}
            </div>
          </div>
        </div>

        <ContactsForm />
      </Container>
    </div>
  );
};
