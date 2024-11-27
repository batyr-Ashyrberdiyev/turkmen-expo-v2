import { FC } from "react";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

interface Props {
  className?: string;
  link?: string;
  title: string;
  linkText: string;
}

export const SectionHeader: FC<Props> = ({
  className,
  link = "",
  title,
  linkText,
}) => {
  return (
    <div className={cn(className, "flex items-center justify-between mb-8")}>
      <h2 className="h2">{title}</h2>

      <Link
        to={link}
        className="flex font-semibold h-12 items-center group gap-2 text-PRIMARY"
      >
        {linkText}
        <ArrowRight className="group-hover:translate-x-1 ease-out transition-all duration-400" />
      </Link>
    </div>
  );
};
