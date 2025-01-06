import { FC } from 'react';
import { Container } from './container';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Animate, Burger, LangMenu, Logo, Socials } from '../shared';
import { MenuIcon, X } from 'lucide-react';
import { AnimatePresence } from 'framer-motion';
import { BurgerStore } from '@/store/burger';

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

  const burger = BurgerStore((state) => state.burger);
  const setBurger = BurgerStore((state) => state.setBurger);

  return (
    <>
      <AnimatePresence>
        {burger && <Burger burger={burger} setBurger={setBurger} />}
      </AnimatePresence>

      <Animate>
        <header className={cn('bg-SURFACE_CONTAINER sticky z-50 py-4 h-20', className)}>
          <Container className="hidden lg:flex justify-between items-center">
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

          {/* MOBILE */}
          <Container className="flex lg:hidden items-center justify-between">
            <Logo />

            <button onClick={() => setBurger(!burger)} className="relative size-8">
              <MenuIcon
                size={30}
                className={cn(
                  'text-ON_SURFACE_VAR rounded-md transition-all ease-in-out duration-300 position-center',
                  burger ? 'opacity-0 scale-50' : 'scale-100 opacity-100',
                )}
              />

              <X
                size={30}
                className={cn(
                  'text-ON_SURFACE_VAR rounded-md transition-all ease-in-out duration-300 position-center',
                  !burger ? 'opacity-0 scale-50' : 'scale-100 opacity-100',
                )}
              />
            </button>
          </Container>
        </header>
      </Animate>
    </>
  );
};
