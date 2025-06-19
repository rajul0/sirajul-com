import { BsBuildings as CompanyIcon } from "react-icons/bs";

import { Card } from "@/components/ui/card";
import { Image } from "@/components/molecules";
import { Education } from "@/types";

const EducationCard = ({
  schoolFullName,
  major,
  logoUrl,
  level,
  fromYear,
  endYear,
  address,
}: Education) => {
  return (
    <Card className="flex items-center gap-5 border px-6 py-4 border-gray-100 dark:border-gray-700">
      {logoUrl ? (
        <Image
          src={logoUrl}
          width={55}
          height={55}
          alt={schoolFullName}
          className="h-14 w-14 rounded bg-neutral-50 p-1 hover:scale-110 hover:bg-transparent"
        />
      ) : (
        <CompanyIcon size={50} />
      )}

      <div className="space-y-1">
        <a
          //   href={link || "#"}
          target="_blank"
        >
          <h6>{schoolFullName}</h6>
        </a>
        <div className="space-y-2 text-sm text-neutral-600 dark:text-neutral-400">
          <div className="flex flex-col gap-1 md:flex-row md:gap-2">
            <span>{level}</span>
            <span className="hidden text-neutral-300 dark:text-neutral-700 md:flex">
              •
            </span>
            <span>{major}</span>
          </div>
          <div className="flex flex-col gap-3 md:flex-row md:text-[13px]">
            <div className="flex gap-1 text-neutral-500">
              <span>{fromYear}</span> - <span>{endYear || "Present"}</span>
            </div>
            <span className="hidden text-neutral-300 dark:text-neutral-700 lg:block">
              •
            </span>
            <span>{address}</span>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default EducationCard;
