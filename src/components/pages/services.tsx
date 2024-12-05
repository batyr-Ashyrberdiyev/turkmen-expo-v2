import { scrollTop } from '@/lib/utils';
import { Container, PageHero } from '../layout';
import { ContactsForm, ServicesBlock } from '../shared';

const list = [
  '• Просторные павильоны с крытыми переходами.',
  '• Современные выставочные и конференц-залы.',
  '• Открытые и закрытые бесплатные парковки.',
  '• Таможенный пост на территории для оформления выставочных грузов.',
];

const events = [
  {
    title: 'Организация выставок',
    img: '/services-1.png',
    greenText: 'В распоряжении наших клиентов:',
    list: list,
    text: '«Туркмен Экспо» – лидер с опытом 20 лет в области организации и проведения выставок, массовых мероприятий, конференций и деловых форумов, в том числе международных. Мы сотрудничаем с одной из самых крупных и престижных выставочных площадок мира.',
  },
  {
    title: 'Организация выставок',
    img: '/services-1.png',
    greenText: 'В распоряжении наших клиентов:',
    list: list,
    text: '«Туркмен Экспо» – лидер с опытом 20 лет в области организации и проведения выставок, массовых мероприятий, конференций и деловых форумов, в том числе международных. Мы сотрудничаем с одной из самых крупных и престижных выставочных площадок мира.',
  },
];

export const Services = () => {
  scrollTop();

  return (
    <div>
      <PageHero
        img="/services-header.png"
        title="Наши услуги для успешной презентации вашего бизнеса"
      />

      <Container className="flex flex-col gap-[120px] mt-16">
        <div className="flex flex-col gap-8">
          {events.map((item, i) => (
            <>
              <ServicesBlock key={i} i={i} {...item} reverse={i % 2 === 0} />
              {i + 1 !== events.length && <hr className="border-OUTLINE_VAR" />}
            </>
          ))}
        </div>

        <ContactsForm />
      </Container>
    </div>
  );
};
