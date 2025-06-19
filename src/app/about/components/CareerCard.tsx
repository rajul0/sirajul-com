"use client";
import { differenceInMonths, differenceInYears, format } from "date-fns";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { BsBuildings as CompanyIcon } from "react-icons/bs";
import { HiChevronRight } from "react-icons/hi";

import { Card } from "@/components/ui/card";
import { Image } from "@/components/molecules";
import { cn } from "@/lib/utils";
import { Career } from "@/types";

const CareerCard = ({
  role,
  companyLabel,
  companyFullName,
  logoUrl,
  address,
  workType,
  workMode,
  fromDate,
  endDate,
  responsibilities,
}: Career) => {
  const [isShowResponsibility, setIsShowResponsibility] =
    useState<boolean>(false);

  const startDateFormatted = format(new Date(fromDate), "MMM yyyy");
  const endDateFormatted = endDate
    ? format(new Date(endDate), "MMM yyyy")
    : "Present";

  const durationYears = differenceInYears(
    new Date(endDate || Date.now()),
    new Date(fromDate)
  );
  const durationMonths =
    (differenceInMonths(new Date(endDate || Date.now()), new Date(fromDate)) %
      12) +
    1;

  const durationText = `${
    durationYears > 0
      ? `${durationYears} Year${durationYears > 1 ? "s" : ""}, `
      : ""
  }${durationMonths} Month${durationMonths > 1 ? "s" : ""}`;

  return (
    <Card className="flex gap-5 border px-6 py-4 border-gray-100 dark:border-gray-700">
      <div className="mt-1.5 w-fit">
        {logoUrl ? (
          <Image
            src={logoUrl}
            width={55}
            height={55}
            alt={companyLabel}
            className="h-14 w-14 rounded bg-neutral-50 p-1 hover:scale-110 hover:bg-transparent"
          />
        ) : (
          <CompanyIcon size={50} />
        )}
      </div>
      <div className="w-4/5 space-y-3">
        <div className="space-y-1">
          <h6>{role}</h6>
          <div className="space-y-1 text-sm text-neutral-600 dark:text-neutral-400">
            <div className="flex flex-col gap-1 md:flex-row md:items-center md:gap-2">
              <a target="_blank">
                <span className="cursor-pointer underline-offset-2 hover:text-dark hover:underline hover:dark:text-white">
                  {companyLabel}
                </span>
              </a>
              <span className="hidden text-neutral-300 dark:text-neutral-700 lg:block">
                •
              </span>
              <span className="text-neutral-500">[ {companyFullName} ]</span>
              <span className="hidden text-neutral-300 dark:text-neutral-700 lg:block">
                •
              </span>
              <span>{address}</span>
            </div>
            <div className="flex flex-col gap-2 md:flex-row md:text-[13px]">
              <div className="flex gap-1">
                <span>
                  {startDateFormatted} - {endDateFormatted}
                </span>
              </div>
              <span className="hidden text-neutral-300 dark:text-neutral-700 lg:block">
                •
              </span>
              <span className="text-neutral-500 dark:text-neutral-500">
                {durationText}
              </span>
              <span className="hidden text-neutral-300 dark:text-neutral-700 lg:block">
                •
              </span>
              <span>{workMode}</span>
              <span className="hidden text-neutral-300 dark:text-neutral-700 lg:block">
                •
              </span>
              <span>{workType}</span>
            </div>
          </div>
        </div>
        <button
          onClick={() => setIsShowResponsibility(!isShowResponsibility)}
          className="-ml-1 mt-5 flex items-center gap-1 text-sm text-neutral-500"
        >
          <HiChevronRight
            size={18}
            className={cn({
              "rotate-90 transition-all duration-300": isShowResponsibility,
            })}
          />
          {isShowResponsibility ? "Hide" : "Show"} Responsibilities
        </button>
        <AnimatePresence>
          {isShowResponsibility && (
            <motion.ul
              className="ml-5 list-disc space-y-1 pb-2 text-sm leading-normal text-neutral-600 dark:text-neutral-400"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              {responsibilities?.map((item) => (
                <motion.li key={item} layout>
                  {item}
                </motion.li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>
      </div>
    </Card>
  );
};

export default CareerCard;
