import { MY_EDUCATIONS } from "@/data";

import EducationCard from "./EducationCard";

const EducationList = () => {
  return (
    <section className="space-y-6">
      <div className="grid gap-4 md:grid-cols-1">
        {MY_EDUCATIONS?.map((item, index) => (
          <EducationCard key={index} {...item} />
        ))}
      </div>
    </section>
  );
};

export default EducationList;
