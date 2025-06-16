import { CAREERS } from "@/data";

import CareerCard from "./CareerCard";
import { Career } from "@/types";

const CareerList = () => {
  return (
    <section className="space-y-6">
      <div className="grid gap-3 ">
        {CAREERS?.map((career: Career, index: number) => (
          <CareerCard key={index} {...career} />
        ))}
      </div>
    </section>
  );
};

export default CareerList;
