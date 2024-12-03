import { FC } from 'react';
import { cn } from '@/lib/utils';
import { Container, SectionHeader } from '@/components/layout';
import { NewsCard } from '../';

interface Props {
  className?: string;
}

const data = [
  {
    img: '/news-img.png',
    title: 'Ашхабад готовится к международной конференции и выставке CIET-2024',
    id: '1',
  },
  {
    img: '/news-img.png',
    title: 'Ашхабад готовится к международной конференции и выставке CIET-2024',
    id: '1',
  },
  {
    img: '/news-img.png',
    title: 'Ашхабад готовится к международной конференции и выставке CIET-2024',
    id: '1',
  },
  {
    img: '/news-img.png',
    title: 'Ашхабад готовится к международной конференции и выставке CIET-2024',
    id: '1',
  },
];

const HomeNews: FC<Props> = ({ className }) => {
  return (
    <section className={cn(className, '')}>
      <Container>
        <SectionHeader title="Новости" linkText="лента новостей" link="/news" />

        <div className="grid grid-cols-4 gap-8">
          {data.map((item, i) => (
            <NewsCard link={''} key={i} i={i} {...item} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default HomeNews;
