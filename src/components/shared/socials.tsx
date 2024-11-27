import { FC } from "react";
import { cn } from "@/lib/utils";

interface Props {
  className?: string;
}

const socials = [
  {
    url: "/social/in.svg",
  },
  {
    url: "/social/face.svg",
  },
  {
    url: "/social/x.svg",
  },
  {
    url: "/social/inst.svg",
  },
];

export const Socials: FC<Props> = ({ className }) => {
  return (
    <div className="flex items-center">
      {socials.map(({ url }) => (
        <a className="cursor-pointer">
          <img key={url} src={url} />
        </a>
      ))}
    </div>
  );
};
