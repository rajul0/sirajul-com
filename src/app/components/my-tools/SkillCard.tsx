type SkillCardProps = {
  title: string;
  logo?: React.ReactNode;
};

export default function SkillCard({ title, logo }: SkillCardProps) {
  return (
    <div className="px-4 h-10 bg-white dark:bg-[#0f172a] rounded-lg flex items-center gap-2 justify-center text-black dark:text-white shadow-md relative">
      {logo && (
        <div className="w-5 h-5 flex items-center justify-center">
          {typeof logo === "string" ? (
            <img
              src={logo}
              alt={title}
              className="w-full h-full object-contain"
            />
          ) : (
            logo
          )}
        </div>
      )}
      <span className="text-base">{title}</span>
    </div>
  );
}
