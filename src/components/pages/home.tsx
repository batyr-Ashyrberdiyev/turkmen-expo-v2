import { lazy } from 'react';
import { HomeEvents } from '../shared/home/home-events';
import { HomeHero } from '../shared/home/home-hero';

const Partners = lazy(() => import('../shared/home/home-partners'));
const About = lazy(() => import('../shared/home/home-about'));
const News = lazy(() => import('../shared/home/home-news'));

export const Home = () => {
  return (
    <div className="flex flex-col gap-[120px]">
      <HomeHero />
      <HomeEvents />
      <News />
      <About />
      <Partners />
    </div>
  );
};
