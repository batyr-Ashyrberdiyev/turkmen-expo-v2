import { FC } from 'react';
import { cn } from '@/lib/utils';
import { Container, SectionHeader } from '@/components/layout';
import { NewsCard } from '../';

interface Props {
  className?: string;
}

const HomeNews: FC<Props> = ({ className }) => {
  return (
    <section className={cn(className, '')}>
      <Container>
        <SectionHeader title="Новости" linkText="лента новостей" />

        <div className="grid grid-cols-4  gap-8">
          <NewsCard />
          <NewsCard />
          <NewsCard />
          <NewsCard />
        </div>
      </Container>
    </section>
  );
};

export default HomeNews;
