import { FC } from 'react';
import { Container } from './container';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Animate, LangMenu, Logo, Socials } from '../shared';

interface Props {
  className?: string;
}

export const navData = [
  {
    title: 'О компании',
    link: '/about',
  },
  {
    title: 'Услуги',
    link: '/services',
  },
  {
    title: 'Новости',
    link: '/news',
  },
  {
    title: 'Мероприятия',
    link: '/events',
  },
  {
    title: 'Медиа',
    link: '/media',
  },
  {
    title: 'Контакты',
    link: '/contacts',
  },
];

export const Header: FC<Props> = ({ className }) => {
  const { pathname } = useLocation();

  return (
    <Animate duration={0.3} delay={0.3}>
      <header className={cn('bg-SURFACE_CONTAINER py-4', className)}>
        <Container className="flex justify-between items-center">
          <div className="flex items-center gap-4">
            <div className="mb-1">
              <Logo />
            </div>
            <LangMenu />
          </div>

          <nav className="flex items-center gap-4 font-semibold text-[14px]">
            {navData.map((item) => (
              <Link
                className={cn(
                  'hover:text-SECONDARY transition-all',
                  pathname === item.link && '!text-PRIMARY cursor-default',
                )}
                key={item.title}
                to={item.link}>
                {item.title}
              </Link>
            ))}
          </nav>

          <Socials />
        </Container>
      </header>
    </Animate>
  );
};
