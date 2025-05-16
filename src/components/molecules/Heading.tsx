import { FaRegArrowAltCircleLeft } from "react-icons/fa";
import { Button } from "../ui/button";
import Link from "next/link";
import { useRouter } from "next/navigation";

type HeadingProps = {
  title?: string;
  description?: string;
  withBackButton?: boolean;
  onBack?: () => void;
};

export function Heading({
  title,
  description,
  withBackButton = false,
  onBack,
}: HeadingProps) {
  const router = useRouter();

  const handleBack = () => {
    if (onBack) {
      onBack();
    } else {
      router.back();
    }
  };

  return (
    <div>
      <div className="mb-4 flex flex-row gap-4 group transition max-w-min">
        {withBackButton && (
          <button onClick={handleBack} className="inline-block">
            <FaRegArrowAltCircleLeft className="text-black/20 dark:text-white/70 group-hover:text-black/80 group-hover:dark:text-white transition-transform duration-300 transform group-hover:-translate-x-1 text-2xl" />
          </button>
        )}

        <h1 className="text-2xl md:text-[30px] font-bold opacity-90 ">
          {title}
        </h1>
      </div>
      <p className="text-lg leading-[22px] opacity-70 text-justify">
        {description}
      </p>
    </div>
  );
}
