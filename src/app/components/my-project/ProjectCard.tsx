import Image from "next/image";

export type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  techStack: string[];
};

type ProjectCardProps = {
  item: Project;
};

export default function ProjectCard({ item }: ProjectCardProps) {
  return (
    <li
      key={item.id}
      className="flex-none w-[200px] lg:w-[240px] rounded-xl overflow-hidden bg-transparent  text-white snap-center shadow-lg hover:shadow-xl transition-shadow"
    >
      <div className="min-h-fit bg-transparent from-white via-gray-100 to-white flex items-center justify-center">
        <img
          src={item.image}
          alt={item.title}
          className="w-full object-cover"
        />
      </div>

      <div className="p-4 space-y-2 bg-white dark:bg-[#0f172a]">
        <h3 className="font-semibold text-black dark:text-white text-base">
          {item.title}
        </h3>
        <p className="text-sm text-gray-500 dark:text-gray-400 line-clamp-2">
          {item.description}
        </p>

        <div className="flex flex-wrap gap-2 mt-3">
          {item.techStack.map((tech, i) => (
            <Image
              key={i}
              className="text-black dark:text-white"
              src={`/logos/${tech}.svg`}
              alt="React Logo"
              width={20}
              height={20}
            />
          ))}
        </div>
      </div>
    </li>
  );
}
