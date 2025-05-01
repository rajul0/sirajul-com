import { FaRegArrowAltCircleLeft } from "react-icons/fa";
import { Button } from "../ui/button";
import Link from "next/link";

type HeadingProps = {
  title: string;
  description: string;
  withBackButton?: boolean;
};

export function Heading({
  title,
  description,
  withBackButton = false,
}: HeadingProps) {
  return (
    <div>
      {withBackButton && (
        <Link href="/my-project" className="inline-block group transition">
          <FaRegArrowAltCircleLeft className="text-black/20 dark:text-white/70 group-hover:text-black/80 group-hover:dark:text-white transition-transform duration-300 transform group-hover:-translate-x-1 text-2xl" />
        </Link>
      )}

      <h1 className="text-2xl md:text-3xl font-bold opacity-90">{title}</h1>
      <p className="opacity-70">{description}</p>
    </div>
  );
}
