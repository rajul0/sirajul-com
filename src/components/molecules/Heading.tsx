import { FaRegArrowAltCircleLeft } from "react-icons/fa";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

type HeadingProps = {
  title: string;
  description: string;
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
    <motion.div
      variants={{
        hidden: { opacity: 0, x: 100 },
        visible: {
          opacity: 1,
          x: 0,
          transition: {
            duration: 0.5,
          },
        },
      }}
      initial="hidden"
      animate="visible"
    >
      <div className="mb-4 flex flex-row gap-4 group transition max-w-max">
        {withBackButton && (
          <button onClick={handleBack} className="inline-block">
            <FaRegArrowAltCircleLeft className="text-black/20 dark:text-white/70 group-hover:text-black/80 group-hover:dark:text-white transition-transform duration-300 transform group-hover:-translate-x-1 text-2xl" />
          </button>
        )}

        <h1 className="text-2xl md:text-[30px] font-bold text-zinc-800 dark:text-zinc-200 ">
          {title}
        </h1>
      </div>
      <p className="text-md leading-[20px] md:text-base font-light opacity-70 text-justify">
        {description}
      </p>
    </motion.div>
  );
}
