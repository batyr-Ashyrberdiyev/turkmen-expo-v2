import {
  HomeAbout,
  HomeEvents,
  HomeHero,
  HomeNews,
  HomePartners,
} from "../shared/home";

export const Home = () => {
  return (
    <div className="flex flex-col gap-[120px]">
      <HomeHero />
      <HomeEvents />
      <HomeNews />
      <HomeAbout />
      <HomePartners />
    </div>
  );
};
