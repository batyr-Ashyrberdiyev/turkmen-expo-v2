import { FC } from 'react';
import { cn } from '@/lib/utils';
import { Container } from '@/components/layout';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Animate } from '../index';

interface Props {
  className?: string;
}

const HomeAbout: FC<Props> = ({ className }) => {
  return (
    <section className={cn(className, '')}>
      <Container className="flex flex-col gap-8">
        <Animate className="h2">О нас</Animate>

        <Animate className="flex gap-[52px]">
          <p className="pl-[18%] h4 flex-shrink flex-grow-0">
            И нет сомнений, что ключевые особенности структуры проекта формируют глобальную
            экономическую сеть и при этом — обнародованы. Внезапно, акционеры крупнейших компаний,
            инициированные исключительно синтетически, призваны к ответу. В целом, конечно,
            высокотехнологичная концепция общественного уклада играет важную роль в формировании.
          </p>
          <Link to={'/about'}>
            <Button
              variant={'transparent'}
              className="flex font-semibold h-12 items-center group gap-2 text-PRIMARY">
              подробнее о нас
              <ArrowRight />
            </Button>
          </Link>
        </Animate>

        <div className="w-full h-[400px]">
          <motion.img
            initial={{ opacity: 0, height: 0 }}
            whileInView={{ opacity: 1, height: '100%' }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.1, 0.1, 0, 1] }}
            src="/about-img.png"
            alt="about image"
            className="size-full object-cover"
          />
        </div>
      </Container>
    </section>
  );
};

export default HomeAbout;
