import { lazy } from "react";
import { HomeEvents } from "../shared/home/home-events";
import { HomeHero } from "../shared/home/home-hero";
import { scrollTop } from "@/lib/utils";

const Partners = lazy(() => import("../shared/home/home-partners"));
const About = lazy(() => import("../shared/home/home-about"));
const News = lazy(() => import("../shared/home/home-news"));

export const Home = () => {
  scrollTop();

  return (
    <div className="flex flex-col md:gap-[120px] gap-20">
      <HomeHero />
      <HomeEvents />
      <News />
      <About />
      <Partners />
    </div>
  );
};
