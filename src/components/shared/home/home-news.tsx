import { FC } from 'react';
import { cn } from '@/lib/utils';
import { Container, SectionHeader } from '@/components/layout';
import { Animate, NewsCard } from '../';

interface Props {
  className?: string;
}

export const newsData = [
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

        <Animate className="grid md:grid-cols-4 grid-cols-1 md:gap-8 gap-6">
          {newsData.slice(0, 4).map((item, i) => (
            <NewsCard link={''} key={i} {...item} />
          ))}
        </Animate>
      </Container>
    </section>
  );
};

export default HomeNews;
